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

  .demos .el-form-item {
    margin-bottom: 10px;
  }
  .demos .el-form-item__label {
    width: 120px;
    text-align: left;
  }
  .demos .el-form-item__content {
    margin-left: 120px;
  }
  .demos .el-input-number {
    width: 100%;
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
    padding: 1em 1em;
    margin: 0;
    border-radius: 5px;
    opacity: 1;
    display: block;
    transition: opacity .2s;
  }
  .card h1,
  .card h2,
  .card h3,
  .card h4,
  .card h5,
  .card > p:first-child {
    margin-top: 0;
  }
  .card > p:last-child {
    margin-bottom: 0;
  }
  .card h4 {
    color: #fff;
  }
  .el-alert--success,
  .card--primary {
    background-color: #3ab882;
    color: #fff;
  }

</style>
