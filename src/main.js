/*eslint-disable */

import 'document-register-element/build/document-register-element.js';
import 'set-prototype-of'; //polyfill

// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue';
// import App from './App';
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App },
// });

function setProto(A, B) {
  A.prototype = Object.create(
    B.prototype, {
      constructor: {
        configurable: true,
        writable: true,
        value: A
      }
    }
  );
}

function isES2015() {
  if (typeof Symbol == "undefined") return false;
  try {
    eval("class Foo {}");
  } catch (e) { return false; }

  return true;
}

document.body.appendChild(
  document.createElement('p')
).textContent = 'ES6 detection - ' + isES2015();

if (isES2015()) {
  console.info('IS ES6');
  class AppDrawer extends HTMLElement {
    // Can define constructor arguments if you wish.
    constructor(self) {
      super();
      self = HTMLElement.call(self || this);

      self.setAttribute('cool', 'true');
      self.textContent = 'V1 click me'; // eslint-disable-line
      self.addEventListener('click', () => {
        self.toggleDrawer();
      });

      document.body.appendChild(
        document.createElement('p')
      ).textContent = 'V1 created';
    }

    connectedCallback() {
      document.body.appendChild(
        document.createElement('p')
      ).textContent = 'V1 attached';
    }

    disconnectedCallback() {
      console.warn('disconnectedCallback', this);
    };

    static get observedAttributes() {
      return ['test', 'open'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.info('attributeChangedCallback', name, oldValue, newValue);
    }

    toggleDrawer() {
      console.info('toggle'); // eslint-disable-line
      this.setAttribute('test', Math.random());
    }
  }

  customElements.define('app-drawer', AppDrawer);
} else {
  console.info('NOT ES6');
  function AppDrawer(self) {
    self = HTMLElement.call(self || this);

    self.setAttribute('cool', 'true');
    self.textContent = 'V0 click me'; // eslint-disable-line
    self.addEventListener('click', () => {
      self.toggleDrawer();
    });

    document.body.appendChild(
      document.createElement('p')
    ).textContent = 'V0 created';
    return self;
  }

  AppDrawer.observedAttributes = ['test', 'open'];
  setProto(AppDrawer, HTMLElement);

  AppDrawer.prototype.connectedCallback = function () {
    document.body.appendChild(
      document.createElement('p')
    ).textContent = 'V0 attached';
  };

  AppDrawer.prototype.disconnectedCallback = function () {
    console.warn('disconnectedCallback', this);
  };

  AppDrawer.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
    console.info('attributeChangedCallback', name, oldValue, newValue);
  };

  AppDrawer.prototype.toggleDrawer = function() {
    console.info('toggle'); // eslint-disable-line
    this.setAttribute('test', Math.random());
  };

  customElements.define('app-drawer', AppDrawer);
}





