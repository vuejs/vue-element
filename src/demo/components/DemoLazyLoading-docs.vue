<template>
  <div>
    <h2>Lazy loading demo</h2>

    <div class="demo-card">
      <div class="el-form-item">
        <label class="el-form-item__label">prop</label>
        <div class="el-form-item__content">
          <el-input v-model="prop"></el-input>
        </div>
      </div>

      <br />

      <demo-lazy-loading :prop="prop">
        <p class="loading" v-loading="true"></p>
      </demo-lazy-loading>
    </div>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="Description" name="1">
        <p>Imagine</p>
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
      <el-collapse-item title="JavaScript - register with Vue-element" name="4">
        <pre><code class="language-javascript">
import DemoElement from 'DemoElement.vue';

Vue.element('demo-lazy-loading', { props: ['prop'] }, {
  connectedCallback() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(DemoElement), 2000);
    });
  }
});
        </code></pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import Vue from 'vue';
  import DemoElement from 'demo/components/DemoLazyLoading-component';

  export default {
    data() {
      return {
        prop: 'Lazy loaded prop value',
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
        Vue.element('demo-lazy-loading', { props: ['prop'] }, {
          connectedCallback() {
            return new Promise((resolve) => {
              setTimeout(() => resolve(DemoElement), 2000);
            });
          }
        });
      }
    }
  };
</script>

<style>
  demo-lazy-loading > .loading {
    display: block;
    min-height: 50px;
  }

</style>
