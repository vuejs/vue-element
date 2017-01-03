import registerCustomElement from './utils/registerCustomElement';
import createVueInstance from './utils/createVueInstance';
import { convertProp } from './utils/props';

function install(Vue) {
  Vue.element = function vueElement(tag, component, options = {}) {
    const propsHash = {};

    // register Custom Element
    registerCustomElement('app-drawer', {
      constructorCallback() {
        typeof options.constructorCallback === 'function' && options.constructorCallback.call(this);
        createVueInstance(this, Vue, component, propsHash);
      },

      connectedCallback() {
        typeof options.connectedCallback === 'function' && options.connectedCallback.call(this);
        if (!this.__detached__) {
          createVueInstance(this, Vue, component, propsHash);
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
        if (this.__vue__ && propsHash[name] && typeof value !== 'undefined' && value !== null) {
          this.__vue__[name] = convertProp(value);
        }
      },

      observedAttributes: ['cool']
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
