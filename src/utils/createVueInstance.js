import { getPropsData, reactiveProps } from './props';
import { getSlots } from './slots';
import { customEmit } from './customEvent';

/**
 * Create new Vue instance if it's not already created
 * (like when opening modal and moving element around DOM)
 * @param element
 * @param Vue
 * @param componentDefinition
 * @param props
 * @param options
 */
export default function createVueInstance(element, Vue, componentDefinition, props, options) {
  if (!element.__vue_custom_element__) {
    const ComponentDefinition = Vue.util.extend({}, componentDefinition);
    const propsData = getPropsData(element, ComponentDefinition, props);
    const vueVersion = (Vue.version && parseInt(Vue.version.split('.')[0], 10)) || 0;

    // element.addEventListener('change-event', (event) => { console.info('[Custom Event]', event.detail); }); // eslint-disable-line

    // Auto event handling based on $emit
    let ctorOptions = {}; // adjust vue-loader cache object if necessary - https://github.com/vuejs/vue-loader/issues/83
    if (ComponentDefinition._Ctor) { // eslint-disable-line no-underscore-dangle
      ctorOptions = ComponentDefinition._Ctor[0].options;  // eslint-disable-line no-underscore-dangle
    }
    ComponentDefinition.methods = ctorOptions.methods = ComponentDefinition.methods || {}; // eslint-disable-line no-multi-assign
    ComponentDefinition.methods.$emit = ctorOptions.methods.$emit = (...args) => customEmit(element, ...args); // eslint-disable-line no-multi-assign, max-len

    let rootElement;

    /**
     * Developement ENV - will be removed in production build
     */
    if (vueVersion >= 2) {
      const elementOriginalChildren = element.cloneNode(true).childNodes; // clone hack due to IE compatibility
      // Vue 2+
      rootElement = {
        propsData,
        props: props.camelCase,
        computed: {
          reactiveProps() {
            const reactivePropsList = {};
            props.camelCase.forEach((prop) => {
              reactivePropsList[prop] = this[prop];
            });

            return reactivePropsList;
          }
        },
        /* eslint-disable */
        render(createElement) {
          const data = {
            props: this.reactiveProps
          };

          return createElement(
            ComponentDefinition,
            data,
            getSlots(elementOriginalChildren, createElement)
          );
        }
        /* eslint-enable */
      };
    } else if (vueVersion === 1) {
      // Fallback for Vue 1.x
      rootElement = ComponentDefinition;
      rootElement.propsData = propsData;
    } else {
      // Fallback for older Vue versions
      rootElement = ComponentDefinition;
      const propsWithDefault = {};
      Object.keys(propsData)
        .forEach((prop) => {
          propsWithDefault[prop] = { default: propsData[prop] };
        });
      rootElement.props = propsWithDefault;
    }

    const elementInnerHtml = vueVersion >= 2 ? '<div></div>' : `<div>${element.innerHTML}</div>`.replace(/vue-slot=/g, 'slot=');
    if (options.shadow && element.shadowRoot) {
      element.shadowRoot.innerHTML = elementInnerHtml;
      rootElement.el = element.shadowRoot.children[0];
    } else {
      element.innerHTML = elementInnerHtml;
      rootElement.el = element.children[0];
    }

    reactiveProps(element, props);

    // Define the Vue constructor to manage the element
    element.__vue_custom_element__ = new Vue(rootElement);
    if (options.shadow && options.shadowCss && element.shadowRoot) {
      const style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(options.shadowCss));

      element.shadowRoot.appendChild(style);
    }
    element.removeAttribute('ve-cloak');
    element.setAttribute('ve-ready', '');
  }
}
