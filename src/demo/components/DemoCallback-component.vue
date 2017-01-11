<template>
  <div class="card demo-callback">
    <el-rate v-model="rate" @change="changeCallback"></el-rate>
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
</style>
