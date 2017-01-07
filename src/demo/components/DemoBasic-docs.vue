<template>
  <div>
    <h2>Basic demo</h2>

    <div class="demo-card">
      <demo-basic prop1="1" prop2="example text" prop3="true" long-prop-name="long name"></demo-basic>
    </div>

    <el-collapse v-model="activeNames">
      <el-collapse-item title="Description" name="1">
        <p>Let's add basic component to see if values from HTML attributes are visible inside Vue component. We will also check if numbers and booleans are properly detected.</p>

        <p>After registering <strong>"demo-basic"</strong> tag, you can insert that tag into standard HTML, SPA's, React, Angulat or Vue projects without the hassle and further initialization.</p>

        <p>Code examples below are written in ES2015 version of JavaScript, but feel free to use ES5.</p>

      </el-collapse-item>
      <el-collapse-item title="HTML" name="2">
        <pre><code class="language-html">
{{HTML}}
        </code></pre>
      </el-collapse-item>
      <el-collapse-item title="Vue" name="3">
        <pre><code class="language-jsx">
&#x3C;template&#x3E;
  {{vueTemplate}}
&#x3C;/template&#x3E;

&#x3C;script&#x3E;
  {{vueScript}}
&#x3C;/script&#x3E;
        </code></pre>
      </el-collapse-item>
      <el-collapse-item title="JS" name="4">
        <pre><code class="language-javascript">
import DemoBasic from 'DemoBasic.vue';

Vue.element('demo-basic', DemoBasic);
        </code></pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import Vue from 'vue';
  import DemoElement from 'demo/components/DemoBasic-component';

  export default {
    data() {
      return {
        message: 'Hello Vue!',
        activeNames: ['1'],
        HTML: (
`<demo-basic
  prop1="1"
  prop2="example text"
  prop3="true"
  long-prop-name="long name">
</demo-basic>`
        ),
        vueTemplate: (
`<div>
    <h4>{{ message }}</h4>
    <el-table
      :data="tableData">
      <el-table-column
        prop="prop"
        label="Prop name">
      </el-table-column>
      <el-table-column
        prop="value"
        label="Value">
      </el-table-column>
      <el-table-column
        prop="type"
        label="typeof">
      </el-table-column>
    </el-table>
  </div>`
        ),
        vueScript: (
`export default {
    props: [
      'prop1',
      'prop2',
      'prop3',
      'longPropName'
    ],
    data() {
      return {
        message: 'Hello Vue-element!'
      };
    },
    computed: {
      tableData() {
        return [{
          prop: 'prop1',
          value: this.prop1,
          type: typeof this.prop1
        }, {
          prop: 'prop2',
          value: this.prop2,
          type: typeof this.prop2
        }, {
          prop: 'prop3',
          value: this.prop3,
          type: typeof this.prop3
        }, {
          prop: 'long-prop-name',
          value: this.longPropName,
          type: typeof this.longPropName
        }];
    },
    created() {
      console.info('demo-basic created()');
    }
  };`
        )
      };
    },
    methods: {
      registerCustomElement() {
        Vue.element('demo-basic', DemoElement);
      }
    }
  };
</script>

