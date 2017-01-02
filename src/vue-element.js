import registerCustomElement from './utils/registerCustomElement';
import createVueInstance from './utils/createVueInstance';
import { convertProp } from './utils/props';

function install(Vue) {
  Vue.element = function vueElement(tag, component, options = {}) {
    let propsHash = Object.create(null);

    /**
     * When attribute changes we should update Vue instance
     * @param name
     * @param oldVal
     * @param value
     */
    p.attributeChangedCallback = function (name, oldVal, value) {
      if (this.__vue__ && propsHash[name] && typeof value !== 'undefined' && value !== null) {
        this.__vue__[name] = convertProp(value);
      }
    };

    // register Custom Element
    registerCustomElement('app-drawer', {
      constructorCallback() {
        createVueInstance(this, Vue, component, propsHash);
        typeof options.constructorCallback === 'function' && options.constructorCallback.call(this);
      },

      connectedCallback() {
        if (!this.__detached) {
          createVueInstance(this, Vue, component, propsHash);
        }
        typeof options.connectedCallback === 'function' && options.connectedCallback.call(this);

        this.__detached = false;
      },

      /**
       *  When using element in e.g. modal, it's detached and then attached back to document.
       *  It will be unfortunate if we will destroy Vue instance when it happens.
       *  That's why we detect if it's permament using setTimeout
       */
      disconnectedCallback() {
        this.__detached = true;

        setTimeout(function() {
          if (this.__detached && this.__vue__) {
            typeof options.disconnectedCallback === 'function' && options.disconnectedCallback.call(this);
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

if (typeof exports == "object") {
  module.exports = install
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return install })
} else if (window.Vue) {
  Vue.use(install)
}
