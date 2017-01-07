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
    margin: 2em 0;
  }

  .demos .el-collapse-item__content {
    font-size: 1.2em;
    padding: 10px 36px;
  }

  .demos pre[class*="language-"] {
    padding: 0;
  }

  .demo-card {
    border: 1px solid #e0e6ed;
    border-radius: 2px;
    padding: 36px 36px;
    background-color: #fff;

    font-size: 1.4em;
  }

  .demo-card .demo-button {
    float: right
  }

</style>
