/*eslint-disable */

import 'document-register-element/build/document-register-element.js';
import 'set-prototype-of';

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
    B.prototype,
    {constructor: {
      configurable: true,
      writable: true,
      value: A
    }}
  );
}

function isES2015() {
  if (typeof Symbol == "undefined") return false;
  try {
    eval("class Foo {}");
  } catch (e) { console.warn('NOT ES6'); return false; }

  console.warn('IS ES6');
  return true;
}

document.body.appendChild(
  document.createElement('p')
).textContent = 'ES6 detection - ' + isES2015();

if (isES2015()) {
  class AppDrawer extends HTMLElement {
    // Can define constructor arguments if you wish.
    constructor(self) {
      super();
      self = HTMLElement.call(self || this);

      self.textContent = 'click me'; // eslint-disable-line

      console.info('self.textContent', self.textContent);

      // Setup a click listener on <app-drawer> itself.
      self.addEventListener('click', () => {
        // Don't toggle the drawer if it's disabled.
        if (self.disabled) {
          return;
        }
        self.toggleDrawer();

        return self; // eslint-disable-line
      });

      document.body.appendChild(
        document.createElement('p')
      ).textContent = 'created';
    }

    connectedCallback() {
      console.info('this.textContent', this.textContent);
      // this.textContent = 'click me'; // eslint-disable-line
      document.body.appendChild(
        document.createElement('p')
      ).textContent = 'attached';
    }

    toggleDrawer() {
      console.info('toggle'); // eslint-disable-line
    }
  }

  customElements.define('app-drawer', AppDrawer);
} else {
  function AppDrawer(self) {
    self = HTMLElement.call(self || this);
    self.setAttribute('cool', 'true');
    self.textContent = 'my-button text'; // eslint-disable-line
    console.info('my-button created');
    return self;
  }

  setProto(AppDrawer, HTMLElement);
  customElements.define('app-drawer', AppDrawer);

  // document.registerElement(
  //   'app-drawer',
  //   {
  //     prototype: Object.create(
  //       HTMLElement.prototype, {
  //         createdCallback: {value: function() {
  //           console.log('here I am ^_^ ');
  //           console.log('with content: ', this.textContent);
  //         }},
  //         attachedCallback: {value: function() {
  //           console.log('live on DOM ;-) ');
  //         }},
  //         detachedCallback: {value: function() {
  //           console.log('leaving the DOM :-( )');
  //         }},
  //         attributeChangedCallback: {value: function(
  //           name, previousValue, value
  //         ) {
  //           if (previousValue == null) {
  //             console.log(
  //               'got a new attribute ', name,
  //               ' with value ', value
  //             );
  //           } else if (value == null) {
  //             console.log(
  //               'somebody removed ', name,
  //               ' its value was ', previousValue
  //             );
  //           } else {
  //             console.log(
  //               name,
  //               ' changed from ', previousValue,
  //               ' to ', value
  //             );
  //           }
  //         }}
  //       })
  //   }
  // );

}





