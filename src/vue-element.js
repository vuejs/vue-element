import registerCustomElement from './utils/registerCustomElement';
import createVueInstance from './utils/createVueInstance';
import { getProps, convertAttributeValue } from './utils/props';

function install(Vue) {
  Vue.element = function vueElement(tag, componentDefinition, options = {}) {
    const props = getProps(componentDefinition, Vue);
    // register Custom Element
    registerCustomElement(tag, {
      constructorCallback() {
        typeof options.constructorCallback === 'function' && options.constructorCallback.call(this);
      },

      connectedCallback() {
        typeof options.connectedCallback === 'function' && options.connectedCallback.call(this);
        if (!this.__detached__) {
          createVueInstance(this, Vue, componentDefinition, props, options);
        }

        this.__detached__ = false;
      },

      /**
       *  When using element in e.g. modal, it's detached and then attached back to document.
       *  It will be unfortunate if we will destroy Vue instance when it happens.
       *  That's why we detect if it's permament using setTimeout
       */
      disconnectedCallback() {
        this.__detached__ = true;
        typeof options.disconnectedCallback === 'function' && options.disconnectedCallback.call(this);

        setTimeout(function detachtedTimeout() {
          if (this.__detached__ && this.__vue__) {
            this.__vue__.$destroy(true);
          }
        }, 3000);
      },

      /**
       * When attribute changes we should update Vue instance
       * @param name
       * @param oldVal
       * @param value
       */
      attributeChangedCallback(name, oldValue, value) {
        if (this.__vue__ && typeof value !== 'undefined') {
          const nameCamelCase = Vue.util.camelize(name);
          typeof options.attributeChangedCallback === 'function' && options.attributeChangedCallback.call(this, name, oldValue, value);
          this.__vue__[nameCamelCase] = convertAttributeValue(value);
        }
      },

      observedAttributes: props.hyphenate,

      shadow: !!options.shadow && !!HTMLElement.prototype.attachShadow
    });
  };
}

/*eslint-disable */
if (typeof exports == "object") {
  module.exports = install
} else if (typeof define == "function" && define.amd) {
  define([], function (){ return install })
} else if (window.Vue) {
  Vue.use(install)
}
