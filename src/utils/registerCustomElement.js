/*eslint-disable */
import isES2015 from './isES2015';
import 'set-prototype-of'; //polyfill for older browsers (IE < 11) that do not support Object.setPrototypeOf needed by Webpack's transpiled ES2015 "class", even if it's not directly used

export default function registerCustomElement(name, options = {}) {
  if (isES2015) {
    // ES2015 detected. We will use "class" based Custom Elements V1 specification. If it's natively supported it will run without polyfill
    class myCustomElement extends HTMLElement {
      // Can define constructor arguments if you wish.
      constructor(self) {
        super();
        self = HTMLElement.call(self || this);

        typeof options.constructorCallback === 'function' && options.constructorCallback.call(self);
        return self;
      }

      connectedCallback() {
        typeof options.connectedCallback === 'function' && options.connectedCallback.call(this);
      }

      disconnectedCallback() {
        typeof options.disconnectedCallback === 'function' && options.disconnectedCallback.call(this);
      };

      static get observedAttributes() {
        return options.observedAttributes || [];
      }

      attributeChangedCallback(name, oldValue, value) {
        typeof options.attributeChangedCallback === 'function' && options.attributeChangedCallback.call(this, name, oldValue, value);
      }
    }

    customElements.define(name, myCustomElement);
  } else {
    // not ES2015. We will use polyfill supported version of registering Custom Elements so older browsers could handle it
    function myCustomElement(self) {
      self = HTMLElement.call(self || this);

      typeof options.constructorCallback === 'function' && options.constructorCallback.call(self);
      return self;
    }

    myCustomElement.observedAttributes = options.observedAttributes || [];

    myCustomElement.prototype = Object.create(
      HTMLElement.prototype, {
        constructor: {
          configurable: true,
          writable: true,
          value: myCustomElement
        }
      }
    );

    myCustomElement.prototype.connectedCallback = function () {
      typeof options.connectedCallback === 'function' && options.connectedCallback.call(this);
    };

    myCustomElement.prototype.disconnectedCallback = function () {
      typeof options.disconnectedCallback === 'function' && options.disconnectedCallback.call(this);
    };

    myCustomElement.prototype.attributeChangedCallback = function (name, oldValue, value) {
      typeof options.attributeChangedCallback === 'function' && options.attributeChangedCallback.call(this, name, oldValue, value);
    };

    customElements.define(name, myCustomElement);
  }
}
