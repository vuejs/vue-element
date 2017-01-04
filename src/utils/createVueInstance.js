import { getPropsData, reactiveProps } from './props';

/**
 * Create new Vue instance if it's not already created
 * (like when opening modal and moving element around DOM)
 * @param element
 * @param Vue
 * @param componentDefinition
 * @param props
 */
export default function createVueInstance(element, Vue, componentDefinition, props) {
  if (!element.__vue__) {
    const ComponentDefinition = Vue.util.extend({}, componentDefinition);
    const elementOriginalInnerHtml = element.innerHTML;
    const componentProps = ComponentDefinition.props || [];
    const propsData = getPropsData(element, ComponentDefinition, props);

    const rootElement = {
      propsData,
      props: componentProps,
      components: {
        'vue-element-component': ComponentDefinition
      },
      computed: {
        reactiveProps() {
          const reactivePropsList = {};
          componentProps.forEach((prop) => {
            reactivePropsList[prop] = this[prop];
          });

          return reactivePropsList;
        }
      },
      /* eslint-disable */
      render(h) {
        const data = {
          props: this.reactiveProps
        };

        return (
          <ComponentDefinition {...data}>
            {elementOriginalInnerHtml}
          </ComponentDefinition>
        )
      },
      /* eslint-enable */
      mounted() {
        this.$nextTick(() => {
          console.info('vue-element-component mounted', this); // eslint-disable-line
        });
      }
    };

    element.innerHTML = '<div></div>';
    rootElement.el = element.children[0];

    reactiveProps(element, props);

    // Define the Vue constructor to manage the element
    element.__vue__ = new Vue(rootElement); // eslint-disable-line no-new
  }
}
