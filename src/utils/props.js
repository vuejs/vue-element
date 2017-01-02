/**
 * Number and Boolean props are treated as strings
 * We should convert it so props will behave as intended
 * @param value
 * @returns {*}
 */
export function convertProp(value) {
  let propsValue = value;
  const isBoolean = ['true', 'false'].indexOf(value) > -1,
    valueParsed = parseFloat(propsValue, 10),
    isNumber = !isNaN(valueParsed) && isFinite(propsValue);

  if (isBoolean) {
    propsValue = propsValue === 'true';
  } else if (isNumber) {
    propsValue = valueParsed;
  }

  return propsValue;
}

/**
 * If we get DOM node of element we could use it like this:
 * document.querySelector('widget-vue1').prop1 <-- get prop
 * document.querySelector('widget-vue1').prop1 = 'new Value' <-- set prop
 * @param element
 * @param component
 * @param propsHash
 */
export function reactiveProps(element, component, propsHash) {
  let props = [];
  if (component.props && component.props.length) {
    props = component.props;
  } else if (component.props && typeof component.props === 'object') {
    for (var prop in component.props) {
      props.push(prop);
    }
  }

  // Handle param attributes
  props.forEach(function (name) {
    propsHash[name] = true;
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


/**
 * In root Vue instance we should pass props as 'propsData'.
 * That's why we get element attributes and set proper propsData
 * @param element
 * @param instanceOptions
 */
export function initProps(element, instanceOptions, propsHash) {
  const attributes = Vue.util.toArray(element.attributes);
  instanceOptions.propsData = instanceOptions.propsData || {};

  attributes.forEach(function(attribute) {
    if (typeof attribute.nodeValue === 'string') {
      var name = attribute.nodeName,
        nameCamelCase = Vue.util.camelize(name),
        value = attribute.nodeValue;

      if (value !== '' && propsHash[name]) {
        instanceOptions.propsData[nameCamelCase] = convertProp(value);
      }
    }
  });
}
