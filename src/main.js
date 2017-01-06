import 'document-register-element/build/document-register-element';
import Vue from 'vue';
import VueRouter from 'vue-router';
import vueElement from './vue-element';

import App from './demo/App';
import Home from './demo/Home';
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
  {
    path: '/',
    component: App,
    children: [
      { path: '/', component: Home },
      { path: '/demo-basic', component: DemoBasic }
    ]
  }
];

const router = new VueRouter({
  routes // short for routes: routes
});

const app = new Vue({
  router
}).$mount('#vue-demo-app');

export default app;
