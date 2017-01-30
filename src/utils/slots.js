/**
 * Get attributes of given node
 * @param children
 * @param Vue
 * @returns {*}
 */
export function getAttributes(children, Vue) {
  const attributes = {};

  Vue.util.toArray(children.attributes).forEach((attribute) => {
    attributes[attribute.nodeName === 'vue-slot' ? 'slot' : attribute.nodeName] = attribute.nodeValue;
  });

  return attributes;
}

/**
 * Helper utility returning slots for render function
 * @param children
 * @param createElement
 * @param Vue
 */
export function getSlots(children = [], createElement, Vue) {
  const slots = [];
  Vue.util.toArray(children).forEach((child) => {
    if (child.nodeName === '#text') {
      if (child.nodeValue.trim()) {
        slots.push(createElement('span', child.nodeValue));
      }
    } else {
      const attributes = getAttributes(child, Vue);
      const elementOptions = {
        attrs: attributes,
        domProps: {
          innerHTML: child.innerHTML
        }
      };

      if (attributes.slot) {
        elementOptions.slot = attributes.slot;
        attributes.slot = undefined;
      }

      slots.push(createElement(child.tagName, elementOptions));
    }
  });

  return slots;
}
