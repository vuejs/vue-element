<template>
  <div>
    <div id="hero">
      <div class="inner">
        <div class="left">
          <div class="logo"></div>
        </div><div class="right">
        <h2 class="vue">Vue Custom Element</h2>
        <h1>
          <span class="logo-vue">Vue Custom Element</span>
          <div class="subtext">Custom Elements for Vue.js</div>
        </h1>
        <p>
          <!--<a class="button" href="/v2/guide/">GET STARTED</a>-->
          <a class="button white" href="https://github.com/karol-f/vue-custom-element" target="_blank">GITHUB</a>
        </p>
      </div>
      </div>
    </div>

    <div id="highlights">
      <div class="inner">
        <div class="point">
          <h2>Custom Elements v1</h2>
          <p>Compatible with latest specification. vue-custom-element will use native implementation if supported.</p>
        </div>

        <div class="point">
          <h2>Compatibility</h2>
          <p>Vue 0.12+. Using polyfill we can support wide range of browsers, including IE9+, Android and IOS.</p>
        </div>

        <div class="point">
          <h2>Full featured</h2>
          <p>
            You can use nesting, HMR, slots, lazy loading, native Custom Elements callbacks.
          </p>
        </div>
      </div>
    </div>

    <div id="demos">
      <div class="inner">
        <h3>Demos</h3>

        <ul>
          <li v-for="(label, url) in demos">
            <router-link :to="'/demos/' + url" class="bttn-jelly">{{label}}</router-link>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  import demos from './services/demos';

  export default {
    data() {
      return {
        demos
      };
    }
  };
</script>
