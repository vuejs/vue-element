import { getPropsData, reactiveProps } from './props';
import { getSlots } from './slots';

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
  if (!element.__vue_element__) {
    const ComponentDefinition = Vue.util.extend({}, componentDefinition);
    const elementOriginalChildren = element.cloneNode(true).childNodes; // clone hack due to IE compatibility
    const propsData = getPropsData(element, ComponentDefinition, props);

    const rootElement = {
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
          getSlots(elementOriginalChildren, createElement, Vue)
        );
      },
      /* eslint-enable */
    };

    if (options.shadow && element.shadowRoot) {
      element.shadowRoot.innerHTML = '<div></div>';
      rootElement.el = element.shadowRoot.children[0];
    } else {
      element.innerHTML = '<div></div>';
      rootElement.el = element.children[0];
    }

    reactiveProps(element, props);

    // Define the Vue constructor to manage the element
    element.__vue_element__ = new Vue(rootElement); // eslint-disable-line no-new
  }
}
