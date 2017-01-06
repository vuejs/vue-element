<template>
  <div class="demos inner">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .demos .el-collapse {
    margin-top: 2em;
  }

  .demo-card {
    border: 1px solid #e0e6ed;
    border-radius: 2px;

    padding: 30px 15px;

    background-color: #fff;
  }

  .demo-card .demo-button {
    float: right
  }

</style>
