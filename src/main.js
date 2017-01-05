import 'document-register-element/build/document-register-element';
import Vue from 'vue';
import vueElement from './vue-element';

import AppDrawer from './demo/components/AppDrawer';

Vue.use(vueElement);

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

/* eslint-disable no-console */
const options = {
  constructorCallback() {
    this.addEventListener('click', () => {
      console.log('clicked!');
      this.setAttribute('prop1', Math.random());
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

  attributeChangedCallback(name, oldValue, value) {
    console.info('attributeChangedCallback', name, oldValue, value);
  }

};

Vue.element('app-drawer', AppDrawer, options);
