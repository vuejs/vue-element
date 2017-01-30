<template>
  <div class="card card--primary demo-callback">
    <h4>Choose rating</h4>
    <p>
      <el-rate v-model="rate" @change="changeCallback"></el-rate>
    </p>
  </div>
</template>

<script>
  export default {
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
  };
</script>

<style>
  .demo-callback {
    text-align: center;
  }
  .demo-callback h4 {
    margin-bottom: 10px;
  }
  .demo-callback .el-icon-star-off {
    color: #fff !important;
  }
</style>
