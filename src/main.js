import 'document-register-element/build/document-register-element';
import Vue from 'vue';
import VueRouter from 'vue-router';
import vueElement from './vue-element';

import Demo from './demo/Demo';
import DemoBasic from './demo/components/DemoBasic';

///////////////////////
//  Use Vue plugins  //
///////////////////////
Vue.use(vueElement);
Vue.use(VueRouter);

////////////////////////////////
//  Register Custom Elements  //
////////////////////////////////
DemoBasic.methods.registerCustomElement();

//////////////////////////////
//  Config and init router  //
//////////////////////////////
const routes = [
  { path: '/', component: Demo },
  { path: '/demo-basic', component: DemoBasic }
];

const router = new VueRouter({
  routes // short for routes: routes
});

const app = new Vue({
  router
}).$mount('#vue-demo-app');

export default app;
