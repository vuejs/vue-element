<template>
  <div class="demo__basic">
    <p><strong>{{ message }}</strong></p>
    <p>{{ prop1 }}({{typeof prop1}}), {{prop2}}({{typeof prop2}}), {{prop3}}({{typeof prop3}}), {{longPropName}}({{typeof longPropName}})</p>
  </div>
</template>

<script>
  export default {
    props: [
      'prop1',
      'prop2',
      'prop3',
      'longPropName'
    ],
    data() {
      return {
        message: 'Hello Vue-element!'
      };
    },
    created() {
      /* eslint-disable no-console */
      console.info('demo-basic created()');
    }
  };
</script>

<style>
  .demo__basic {
    padding: 8px 16px;
    margin: 0;
    border-radius: 5px;
    background-color: #3ab882;
    color: #fff;
    opacity: 1;
    display: block;
    transition: opacity .2s;
  }

  .demo__basic strong {
    color: #fff;
  }
</style>

