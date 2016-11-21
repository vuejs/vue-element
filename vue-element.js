(function () {
  /**
   * Number and Boolean props are treated as strings
   * We should convert it so props will behave as intended
   * @param value
   * @returns {*}
   */
  function convertProp(value) {
    var propsValue = value,
        isBoolean = ['true', 'false'].indexOf(value) > -1,
        valueParsed = parseFloat(value, 10),
        isNumber = !isNaN(valueParsed) && isFinite(value);

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
  function reactiveProps(element, component, propsHash) {
    var props = [];
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
        get: function () {
          return this.__vue__[name];
        },
        set: function (value) {
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
  function initProps(element, instanceOptions, propsHash) {
    var attributes = Vue.util.toArray(element.attributes);
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

  /**
   * If it's not already created (like when opening modal and moving element around DOM), we should create new Vue instance
   * @param element
   * @param Vue
   * @param componentDefinition
   * @param propsHash
   */
  function createVueInstance(element, Vue, componentDefinition, propsHash) {
    if (!element.__vue__) {
      var instanceOptions = Vue.util.extend({}, componentDefinition),
          attributesList = Vue.util.toArray(element.attributes);

      element.innerHTML = '<div class="vue-element-target"></div>';
      instanceOptions.el = element.children[0];

      //add v-cloak
      instanceOptions.el.setAttribute('v-cloak', '');

      reactiveProps(element, instanceOptions, propsHash);
      initProps(element, instanceOptions, propsHash);

      // Define the Vue constructor to manage the element
      element.__vue__ = new Vue(instanceOptions); // eslint-disable-line no-new
    }
  }

  function install(Vue) {
    Vue.element = function (tag, component, options) {
      var p = Object.create(HTMLElement.prototype),
          propsHash = Object.create(null);
      options = options || {};

      p.createdCallback = function () {
        if (typeof options.created === 'function') {
          options.created.call(this);
        }
      };

      // Handle attached to DOM callback
      p.attachedCallback = function () {
        if (!this.__detached) {
          createVueInstance(this, Vue, component, propsHash);
        }
        if (typeof options.attached === 'function') {
          options.attached.call(this);
        }

        this.__detached = false;
      };

      /**
       * When using element in e.g. modal, it's detached and then attached back to document.
       *  It will be unfortunate if we will destroy Vue instance when it happens.
       *  That's why we detect if it's permament using setTimeout
       */
      p.detachedCallback = function () {
        var me = this;
        me.__detached = true;

        if (typeof options.detached === 'function') {
          options.detached.call(this);
        }

        setTimeout(function() {
          if (me.__detached && me.__vue__) {
            me.__vue__.$destroy(true);
          }
        }, 3000);
      };

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

      // register element
      document.registerElement(tag, {
        prototype: p
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
})();