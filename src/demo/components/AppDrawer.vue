<template>
  <div class="app-drawer">
    <p>{{ message }}, {{longProp}}, {{ prop1 }}({{typeof prop1}}), {{prop2}}({{typeof prop2}}), {{prop3}}({{typeof prop3}})</p>
    <slot name="header">NO HEADER SLOT</slot>
    <slot>
      This will only be displayed if there is no content to be distributed.
    </slot>
  </div>
</template>

<script>
  export default {
    props: [
      'prop1',
      'prop2',
      'prop3',
      'longProp'
    ],
    data() {
      return {
        message: 'Hello Vue!'
      };
    },
    created() {
      /* eslint-disable no-console */
      console.info('app-drawer created()', this);
    }
  };
</script>

