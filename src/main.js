/*eslint-disable */

import 'document-register-element/build/document-register-element.js';
import registerCustomElement from './utils/registerCustomElement';

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

const options = {
  constructorCallback() {
    this.setAttribute('cool', 'true');
    this.textContent = 'click me'; // eslint-disable-line
    this.addEventListener('click', () => {
      console.log('clicked!');
    });

    document.body.appendChild(
      document.createElement('p')
    ).textContent = 'Custom Element created';
  },

  connectedCallback() {
    document.body.appendChild(
      document.createElement('p')
    ).textContent = 'Custom Element attached';
  },

  disconnectedCallback() {
    console.warn('disconnectedCallback', this);
  },

  attributeChangedCallback(name, oldValue, newValue) {
    console.info('attributeChangedCallback', name, oldValue, newValue);
  },

  observedAttributes: ['cool']
};

registerCustomElement('app-drawer', options);





