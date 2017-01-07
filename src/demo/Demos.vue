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

  .demos h2 {
    font-size: 1.6em;
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

  .card {
    padding: 8px 16px;
    margin: 0;
    border-radius: 5px;
    opacity: 1;
    display: block;
    transition: opacity .2s;
  }
  .card--primary {
    background-color: #3ab882;
    color: #fff;
  }

  .card strong {
    color: #fff;
  }

</style>
