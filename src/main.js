/*eslint-disable */
import 'document-register-element';

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


function check() {
  if (typeof Symbol == "undefined") return false;
  try {
    eval("class Foo {}");
    eval("var bar = (x) => x+1");
  } catch (e) { console.warn('NOT ES6'); return false; }

  console.warn('IS ES6');
  return true;
}

document.body.appendChild(
  document.createElement('p')
).textContent = 'ES6 detection - ' + check();

class AppDrawer extends HTMLElement {
  // Can define constructor arguments if you wish.
  constructor(self) {
    // self = super(self); // eslint-disable-line
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

// function setProto(A, B) {
//   A.prototype = Object.create(
//     B.prototype,
//     {constructor: {
//       configurable: true,
//       writable: true,
//       value: A
//     }}
//   );
// }
//
// function MyButton(self) {
//   self = HTMLElement.call(self || this);
//   self.setAttribute('cool', 'true');
//   self.textContent = 'my-button text'; // eslint-disable-line
//   console.info('my-button created');
//   return self;
// }
//
// setProto(MyButton, HTMLElement);
// MyButton.prototype.method = function method() {};
// customElements.define('my-button', MyButton);

