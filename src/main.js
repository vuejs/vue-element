import 'document-register-element/build/document-register-element';
import Vue from 'vue';
import vueElement from './vue-element';

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
//
// registerCustomElement('app-drawer', options);

Vue.element('app-drawer', {
  props: [
    'prop1',
    'prop2',
    'prop3'
  ],
  data() {
    return {
      message: 'Hello Vue!'
    };
  },
  template: '<p>{{ message }}, {{ prop1 }}({{typeof prop1}}), {{prop2}}({{typeof prop2}}), {{prop3}}({{typeof prop3}})</p>',
  created() {
    console.info('created', this);
    console.info(this.prop1, this.prop2, this.prop3);
  }
}, options);
