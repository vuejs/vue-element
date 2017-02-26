<template>
  <div>
    <h2>Events demo</h2>

    <div class="demo-card demo-events-docs">
      <demo-events :initial-rating="rating" @change="changeCallback"></demo-events>

      <p>Current rating: <strong>{{rating}}</strong></p>
    </div>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="Description" name="1">
        <p>Passing strings, numbers and booleans is useful, but component's possibility to trigger events allows for a whole lot new possibilities.</p>
        <p>
          In above demo, after changing rating, the current value will be displayed. This value is passed using event from Vue components $emit.
        </p>
      </el-collapse-item>
      <el-collapse-item title="Custom Element HTML" name="2">
        <pre><code class="language-html">
  {{HTML}}
        </code></pre>
      </el-collapse-item>
      <el-collapse-item title="Vue component passed to Vue-custom-element" name="3">
        <pre><code class="language-html">
&#x3C;template&#x3E;
  {{vueTemplate}}
&#x3C;/template&#x3E;

&#x3C;script&#x3E;
  {{vueScript}}
&#x3C;/script&#x3E;
        </code></pre>
      </el-collapse-item>
      <el-collapse-item title="JavaScript - listening to element's event" name="4">
        <pre><code class="language-javascript">
const demoEventElement = document.getElementsByTagName('demo-events')[0];
demoEventElement.addEventListener('change', (event) => { console.info('[Event]', event.detail); });
        </code></pre>
      </el-collapse-item>
      <el-collapse-item title="Vue - listening to element's event" name="5">
        <pre><code class="language-html">
&#x3C;template&#x3E;
  {{vueTemplateUsage}}
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
  {{vueScriptUsage}}
&#x3C;/script&#x3E;
        </code></pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import Vue from 'vue';
  import DemoElement from 'demo/components/DemoEvents-component';

  export default {
    data() {
      return {
        rating: 3,
        activeNames: ['1'],
        HTML: (
'<demo-events initial-rating="3" @change="changeCallback"></demo-events>'
        ),
        vueTemplate: (
`<div class="card">
    <h4>Choose rating</h4>
    <el-rate v-model="rate" @change="changeCallback"></el-rate>
  </div>`
        ),
        vueScript: (
`export default {
    props: [
      'initialRating'
    ],
    data() {
      return {
        rate: this.initialRating
      };
    },
    methods: {
      onChangeCallback(...args) {
        this.$emit('change', ...args);
      }
    }
  };`
        ),
        vueTemplateUsage: (
`<demo-events :initial-rating="rating" @change="changeCallback"></demo-events>
  <p>Current rating: <strong>{{rating}}</strong></p>`
        ),
        vueScriptUsage: (
`export default {
    data() {
      return {
        rating: 3
      };
    },
    methods: {
      changeCallback(event) {
        this.rating = event.detail[0];

    }
  };`
        )
      };
    },
    methods: {
      registerCustomElement() {
        Vue.customElement('demo-events', DemoElement);
      },
      changeCallback(event) {
        this.rating = event.detail[0];
      }
    }
  };
</script>

<style>
  .demo-events-docs {
    text-align: center;
  }

  .demo-events-docs p:last-child {
    margin-bottom: 0;
  }
</style>

