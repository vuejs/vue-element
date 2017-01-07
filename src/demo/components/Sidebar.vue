<template>
  <div :class="['sidebar', {'open': isOpen}]">
    <ul class="main-menu">
      <li><router-link :to="{ path: '/' }" class="nav-link">Home</router-link></li>
      <li class="nav-dropdown-container">
        <h4>Demos</h4>
        <ul class="nav-dropdown">
          <li v-for="(label, url) in demos">
            <router-link :to="'/demos/' + url" class="nav-link">{{label}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: [
      'isOpen',
      'demos'
    ]
  };
</script>

