<template>
  <div class="card card--primary demo-callback">
    <h4>Choose rating</h4>
    <p>
      <el-rate v-model="rate" @change="onChangeCallback"></el-rate>
    </p>
  </div>
</template>

<script>
  export default {
    props: [
      'initialRating',
      'changeCallback'
    ],
    data() {
      return {
        rate: this.initialRating
      };
    },
    methods: {
      onChangeCallback(...args) {
        if (typeof this.changeCallback === 'function') {
          this.changeCallback(...args);
        }
      }
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
