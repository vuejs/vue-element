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
        let lazyLoadingPromise;
        let isLazyLoading;
        if (typeof options.connectedCallback === 'function') {
          lazyLoadingPromise = options.connectedCallback.call(this);
          isLazyLoading = lazyLoadingPromise && lazyLoadingPromise.then && typeof lazyLoadingPromise.then === 'function';
        }
        if (!this.__detached__) {
          if (isLazyLoading) {
            lazyLoadingPromise.then((lazyLoadedComponent) => {
              const lazyLoadedComponentProps = getProps(lazyLoadedComponent, Vue);
              createVueInstance(this, Vue, lazyLoadedComponent, lazyLoadedComponentProps, options);
            });
          } else {
            createVueInstance(this, Vue, componentDefinition, props, options);
          }
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
          if (this.__detached__ && this.__vue_element__) {
            this.__vue_element__.$destroy(true);
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
        if (this.__vue_element__ && typeof value !== 'undefined') {
          const nameCamelCase = Vue.util.camelize(name);
          typeof options.attributeChangedCallback === 'function' && options.attributeChangedCallback.call(this, name, oldValue, value);
          this.__vue_element__[nameCamelCase] = convertAttributeValue(value);
        }
      },

      observedAttributes: props.hyphenate,

      shadow: !!options.shadow && !!HTMLElement.prototype.attachShadow
    });
  };
}

export default install;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
