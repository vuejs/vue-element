<template>
  <div>
    <h2>Basic demo</h2>

    <div class="demo-card">
      Teks teks daNF f .f .fn.f.f.n,f N .
    </div>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="Description" name="1">
        <p>Lorem ipsum</p>

        <my-drawer prop1="1" long-prop="aaa" prop2="some text" prop3="true" class="widget">
          <p>app-drawer text from outside</p>
          <p>second slot text</p>
          test text node
          <h1 vue-slot="header">Here might be a page title</h1>
        </my-drawer>
      </el-collapse-item>
      <el-collapse-item title="HTML" name="2">
        <pre><code class="language-html">
          &lt;my-drawer prop1=&quot;1&quot; long-prop=&quot;aaa&quot; prop2=&quot;some text&quot; prop3=&quot;true&quot;&gt;
                  &lt;p&gt;app-drawer text from outside&lt;/p&gt; &lt;p&gt;second slot text&lt;/p&gt; test text node &lt;h1 vue-slot=&quot;header&quot;&gt;Here might be a page title&lt;/h1&gt; &lt;/my-drawer&gt;
        </code></pre>
      </el-collapse-item>
      <el-collapse-item title="JS" name="3">
        <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import Vue from 'vue';
  import AppDrawer from 'demo/components/AppDrawer';

  export default {
    data() {
      return {
        message: 'Hello Vue!',
        activeNames: ['1']
      };
    },
    methods: {
      registerCustomElement() {
        /* eslint-disable no-console */
        let eventListener;
        const options = {
          constructorCallback() {
            eventListener = this.addEventListener('click', () => {
              console.log('clicked custom element!');
              this.setAttribute('prop1', Math.random());
            });

              // Note that this callback might be eexecuted multiple times when using e.g. vue-router
//            console.info('Custom Element constructorCallback'); // eslint-disable-line no-console
          },

          connectedCallback() {
            console.info('Custom Element connectedCallback'); // eslint-disable-line no-console
          },

          disconnectedCallback() {
            this.removeEventListener('click',
              eventListener
            );
            console.warn('Custom Element disconnectedCallback'); // eslint-disable-line no-console
          },

          attributeChangedCallback(name, oldValue, value) {
            console.info('Custom Element attributeChangedCallback', name, oldValue, value);
          }

//        shadow: true
        };

        Vue.element('my-drawer', AppDrawer, options);
      }
    }
  };
</script>

