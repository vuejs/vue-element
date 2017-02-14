<template>
  <div>
    <h2>Lazy loading demo</h2>

    <div class="demo-card">
      <p class="demo-lazy__buttons">
        <el-button type="primary" @click="addElement">
          Add lazy loaded element to page
        </el-button>
      </p>

      <p v-for="index in showElements">
        <demo-lazy-loading :prop="'Lazy loaded prop value #' + index">
          <p class="loading" v-loading="true"></p>
        </demo-lazy-loading>
      </p>
    </div>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="Description" name="1">
        <p>Imagine preparing a bunch of Vue components that are heavy in size and you don't want to force users to download them all at once - e.g. when creating ui libraries like "Element UI" (that is used across our demos).</p>
        <p>You can load individual components only when you need them - when user attach it to the document.</p>

        <p>Instead of component object we will use function with returned Promise. You can use Webpack's <code>require.ensure()</code> or any other async method to load component.</p>

        <p>One note - Custom Elements v1 spec require defining observed props during registration. That's why if you omit them, attributes won't be reactive, and changing them from outside (HTML attributes or JavaScript) won't work.</p>
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
      <el-collapse-item title="JavaScript - register with Vue-custom-element" name="4">
        <pre><code class="language-javascript">
Vue.customElement('demo-lazy-loading', () => new Promise((resolve) => {
  require(['path/to/lazy-loaded-component'], resolve);
}), { props: ['prop'] });
        </code></pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        showElements: 0,
        activeNames: ['1'],
        HTML: (
`<demo-lazy-loading :prop="prop">
  <p class="loading" v-loading="true"></p>
</demo-lazy-loading>`
        ),
        vueTemplate: (
`<div>
    <p><i class="el-icon-check"></i> Lazy loaded component.</p>

    <el-table :data="tableData">
      <el-table-column prop="prop" label="Prop name"></el-table-column>
      <el-table-column prop="value" label="Value"></el-table-column>
      <el-table-column prop="type" label="typeof"></el-table-column>
    </el-table>
  </div>`
        ),
        vueScript:
`export default {
    props: ['prop'],
    computed: {
      tableData() {
        return [{
          prop: 'prop',
          value: this.prop,
          type: typeof this.prop
        }];
      }
    }
  };`
      };
    },
    methods: {
      registerCustomElement() {
        Vue.customElement('demo-lazy-loading', () => new Promise((resolve) => {
          require(['demo/components/DemoLazyLoading-component'], resolve); // eslint-disable-line
        }), { props: ['prop'] });
      },
      addElement() {
        this.showElements = this.showElements + 1;
      }
    }
  };
</script>

<style>
  demo-lazy-loading > .loading {
    display: block;
    min-height: 50px;
  }

  .demo-lazy__buttons {
    text-align: center;
  }

</style>
