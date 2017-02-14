<template>
  <div>
    <h2>Passing callback functions to props</h2>

    <div class="demo-card demo-callback-docs">
      <demo-callback :initial-rating="rating" ref="demo"></demo-callback>

      <p>Current rating: <strong>{{rating}}</strong></p>
    </div>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="Description" name="1">
        <p>Passing strings, numbers and booleans is useful, but component's possibility to trigger passed functions allows for a whole lot new possibilities.</p>
        <p>
          In above demo, after changing rating, the current value will be displayed. This value is passed to callback function from Custom Element <code>&#x3C;demo-callback&#x3E;&#x3C;/demo-callback&#x3E;</code> created by <code>Vue-custom-element</code>.
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
      <el-collapse-item title="JavaScript - passing callback functions" name="4">
        <pre><code class="language-javascript">
const demoCallbackElement = document.getElementsByTagName('demo-callback')[0];
demoCallbackElement.changeCallback = function(value) {
  console.info('changeCallback callback with value:', value);
}
        </code></pre>
      </el-collapse-item>
      <el-collapse-item title="Vue - passing callback functions" name="5">
        <pre><code class="language-html">
&#x3C;template&#x3E;
  {{vueTemplateUsage}}
&#x3C;/template&#x3E;
&#x3C;script&#x3E;
  {{vueScriptUsage}}
&#x3C;/script&#x3E;
        </code></pre>
      </el-collapse-item>
  </div>
</template>

<script>
  import Vue from 'vue';
  import DemoElement from 'demo/components/DemoCallback-component';

  export default {
    data() {
      return {
        rating: 3,
        activeNames: ['1'],
        HTML: (
'<demo-callbacks initial-rating="3"></demo-callbacks>'
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
      'initialRating',
      'changeCallback'
    ],
    propsData: {
      initialRating: 1,
      changeCallback: () => {}
    },
    data() {
      return {
        rate: this.initialRating
      };
    }
  };`
        ),
        vueTemplateUsage: (
`<demo-callback :initial-rating="rating" ref="demo"></demo-callback>
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
      changeCallback(value) {
        this.rating = value;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.demo.changeCallback = this.changeCallback;
      });
    }
  };`
        )
      };
    },
    methods: {
      registerCustomElement() {
        Vue.customElement('demo-callback', DemoElement);
      },
      changeCallback(value) {
        this.rating = value;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.demo.changeCallback = this.changeCallback;
      });
    }
  };
</script>

<style>
  .demo-callback-docs {
    text-align: center;
  }

  .demo-callback-docs p:last-child {
    margin-bottom: 0;
  }
</style>

