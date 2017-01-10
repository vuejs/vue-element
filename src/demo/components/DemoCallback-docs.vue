<template>
  <div>
    <h2>Passing callback functions to props</h2>

    <div class="demo-card demo-callback-docs">
      <h4>Choose rating</h4>
      <demo-callback initial-rating="3" ref="demo"></demo-callback>
    </div>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="Description" name="1">
        <p>Passing strings, numbers and booleans is useful, but component's possibility to trigger passed functions allows for a whole lot new possibilities.</p>
        <p>
          In above demo, after changing rating, you'll see the current value in browser's console. This value is passed to callback function.
        </p>
      </el-collapse-item>
      <el-collapse-item title="Custom Element HTML" name="2">
        <pre><code class="language-html">
  {{HTML}}
        </code></pre>
      </el-collapse-item>
      <el-collapse-item title="Vue component passed to Vue-element" name="3">
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
        activeNames: ['1'],
        HTML: (
'<demo-callbacks initial-rating="3" ref="demo"></demo-callbacks>'
        ),
        vueTemplate: (
`<div class="card">
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
      changeCallback: () => {}
    },
    data() {
      return {
        rate: this.initialRating || 1
      };
    }
  };`
        ),
        vueScriptUsage: (
`export default {
    methods: {
      changeCallback(value) {
        console.info('changeCallback callback with value:', value);
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
        Vue.element('demo-callback', DemoElement);
      },
      changeCallback(value) {
          console.info('changeCallback callback with value:', value); // eslint-disable-line
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

  .demo-callback-docs h4 {
    margin-bottom: 0;
  }
</style>

