<template>
  <div class="card card--primary demo-events">
    <h4>Choose rating</h4>
    <p>
      <el-rate v-model="rate" @change="onChangeCallback"></el-rate>
    </p>
  </div>
</template>

<script>
  export default {
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
  };
</script>

<style>
  .demo-events {
    text-align: center;
  }
  .demo-events h4 {
    margin-bottom: 10px;
  }
  .demo-events .el-icon-star-off {
    color: #fff !important;
  }
</style>
