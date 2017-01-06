import 'document-register-element/build/document-register-element';
import Vue from 'vue';
import vueElement from './vue-element';
import Demo from './demo/Demo';

Vue.use(vueElement);

/* eslint-disable no-new */
new Vue({
  el: '#vue-demo-app',
  template: '<Demo/>',
  components: { Demo }
});
