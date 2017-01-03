import { reactiveProps } from './props';

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
    const instanceOptions = Vue.util.extend({}, componentDefinition);

    element.innerHTML = '<div class="vue-element-target"></div>';
    instanceOptions.el = element.children[0];

    // add v-cloak
    instanceOptions.el.setAttribute('v-cloak', '');

    // initProps(instanceOptions, props);
    reactiveProps(element, props);

    // Define the Vue constructor to manage the element
    element.__vue__ = new Vue(instanceOptions); // eslint-disable-line no-new
  }
}
