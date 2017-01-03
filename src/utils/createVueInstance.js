import { reactiveProps, initProps } from './props';

/**
 * Create new Vue instance if it's not already created
 * (like when opening modal and moving element around DOM)
 * @param element
 * @param Vue
 * @param componentDefinition
 * @param propsHash
 */
export default function createVueInstance(element, Vue, componentDefinition, propsHash) {
  if (!element.__vue__) {
    const instanceOptions = Vue.util.extend({}, componentDefinition);
    // const attributesList = Vue.util.toArray(element.attributes);

    element.innerHTML = '<div class="vue-element-target"></div>';
    instanceOptions.el = element.children[0];

    // add v-cloak
    instanceOptions.el.setAttribute('v-cloak', '');

    reactiveProps(element, instanceOptions, propsHash);
    initProps(element, instanceOptions, propsHash);

    // Define the Vue constructor to manage the element
    element.__vue__ = new Vue(instanceOptions); // eslint-disable-line no-new
  }
}
