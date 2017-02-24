<template>
  <div class="card">
    <div class="el-form-item">
      <label class="el-form-item__label">prop1</label>
      <div class="el-form-item__content">
        <el-input-number v-model="prop1"></el-input-number>
      </div>
    </div>

    <div class="el-form-item">
      <label class="el-form-item__label">prop2</label>
      <div class="el-form-item__content">
        <el-input v-model="prop2"></el-input>
      </div>
    </div>

    <div class="el-form-item">
      <label class="el-form-item__label">prop3</label>
      <div class="el-form-item__content">
        <el-switch
          v-model="prop3"
          on-text=""
          off-text="">
        </el-switch>
      </div>
    </div>

    <div class="el-form-item">
      <label class="el-form-item__label">long-prop-name</label>
      <div class="el-form-item__content">
        <el-input v-model="longPropName"></el-input>
      </div>
    </div>

    <br />

    <demo-basic :prop1="prop1" :prop2="prop2" :prop3="prop3 || 'false'" :long-prop-name="longPropName"></demo-basic>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        prop1: 1,
        prop2: 'example text',
        prop3: true,
        longPropName: 'long name'
      };
    }
  };
</script>

