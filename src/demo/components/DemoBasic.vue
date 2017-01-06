<template>
  <my-drawer prop1="1" long-prop="aaa" prop2="some text" prop3="true" class="widget">
    <h1 vue-slot="header">Here might be a page title</h1>
    <p>app-drawer text from outside</p>
    <p>second slot text</p>
  </my-drawer>
</template>

<script>
  import Vue from 'vue';
  import AppDrawer from 'demo/components/AppDrawer';

  export default {
    data() {
      return {
        message: 'Hello Vue!'
      };
    },
    created() {
      /* eslint-disable no-console */
      let eventListener;
      const options = {
        constructorCallback() {
          eventListener = this.addEventListener('click', () => {
            console.log('clicked custom element!');
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
          this.removeEventListener('click',
            eventListener
          );
          console.warn('disconnectedCallback', this);
        },

        attributeChangedCallback(name, oldValue, value) {
          console.info('attributeChangedCallback', name, oldValue, value);
        }

//        shadow: true
      };

      Vue.element('my-drawer', AppDrawer, options);
    }
  };
</script>

