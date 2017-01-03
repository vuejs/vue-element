/**
 * Number and Boolean props are treated as strings
 * We should convert it so props will behave as intended
 * @param value
 * @returns {*}
 */
export function convertProp(value) {
  let propsValue = value;
  const isBoolean = ['true', 'false'].indexOf(value) > -1;
  const valueParsed = parseFloat(propsValue, 10);
  const isNumber = !isNaN(valueParsed) && isFinite(propsValue);

  if (isBoolean) {
    propsValue = propsValue === 'true';
  } else if (isNumber) {
    propsValue = valueParsed;
  }

  return propsValue;
}

/**
 * Extract props from component definition, no matter if it's array or object
 * @param component
 */
export function getProps(component) {
  let props = [];
  if (component.props && component.props.length) {
    props = component.props;
  } else if (component.props && typeof component.props === 'object') {
    for (const prop in component.props) { // eslint-disable-line no-restricted-syntax
      if ({}.prototype.hasOwnProperty.call(component.props, prop)) {
        props.push(prop);
      }
    }
  }

  return props;
}

/**
 * If we get DOM node of element we could use it like this:
 * document.querySelector('widget-vue1').prop1 <-- get prop
 * document.querySelector('widget-vue1').prop1 = 'new Value' <-- set prop
 * @param element
 * @param component
 */
export function reactiveProps(element, component) {
  const props = getProps(component);

  // Handle param attributes
  props.forEach((name) => {
    Object.defineProperty(element, name, {
      get() {
        return this.__vue__[name];
      },
      set(value) {
        this.setAttribute(name, convertProp(value));
      }
    });
  });
}
