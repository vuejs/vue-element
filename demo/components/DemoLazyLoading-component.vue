<template>
  <div class="card card--primary">
    <p>
      <i class="el-icon-check"></i> &nbsp;Lazy loaded component.
    </p>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="prop"
        label="Prop name">
      </el-table-column>
      <el-table-column
        prop="value"
        label="Value">
        <template scope="scope">
          <div slot="reference">
            <strong>{{ scope.row.value }}</strong>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        label="typeof">
        <template scope="scope">
          <div slot="reference">
            <el-tag type="gray">{{ scope.row.type }}</el-tag>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props: {
      prop: {
        default: '"prop" value from component'
      }
    },
    computed: {
      tableData() {
        return [{
          prop: 'prop',
          value: JSON.stringify(this.prop),
          type: typeof this.prop
        }];
      }
    }
  };
</script>

