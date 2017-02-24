<template>
  <div :class="[routePath]">
    <div id="mobile-bar" class="top">
      <a class="menu-button" @click="toggleSidebarOpen()"></a>
      <router-link :to="{ path: '/' }" class="logo"></router-link>
    </div>
    <div id="header">
      <a class="menu-button" @click="toggleSidebarOpen()"></a>
      <router-link :to="{ path: '/' }" id="logo">
        <span>Vue Custom Element</span>
      </router-link>
    </div>

    <sidebar :is-open="isSidebarOpen" :demos="demos"></sidebar>

    <router-view></router-view>
  </div>
</template>

<script>
  import demos from './services/demos';
  import Sidebar from './components/Sidebar';

  export default {
    data() {
      return {
        isSidebarOpen: false,
        demos
      };
    },
    computed: {
      routePath() { // eslint-disable-line
        const routes = this.$route.path
          .split('/')
          .filter(slice => !!slice);

        return routes.length ? routes.reduce((a, b) => `path-${a}-${b}`) : 'path-home';
      },
      routeCurrent() {
        return this.$route.matched[this.$route.matched.length - 1];
      }
    },
    methods: {
      toggleSidebarOpen() {
        this.isSidebarOpen = !this.isSidebarOpen;
      }
    },
    components: {
      Sidebar
    },
    watch: {
      routePath() {
        this.isSidebarOpen = false;
      }
    }
  };
</script>

<style>
  .gutter pre {
    color: #999;
  }
  pre {
    color: #525252;
  }
  pre .function .keyword,
  pre .constant {
    color: #0092db;
  }
  pre .keyword,
  pre .attribute {
    color: #e96900;
  }
  pre .number,
  pre .literal {
    color: #ae81ff;
  }
  pre .tag,
  pre .tag .title,
  pre .change,
  pre .winutils,
  pre .flow,
  pre .lisp .title,
  pre .clojure .built_in,
  pre .nginx .title,
  pre .tex .special {
    color: #2973b7;
  }
  pre .class .title {
    color: #fff;
  }
  pre .symbol,
  pre .symbol .string,
  pre .value,
  pre .regexp {
    color: #42b983;
  }
  pre .title {
    color: #a6e22e;
  }
  pre .tag .value,
  pre .string,
  pre .subst,
  pre .haskell .type,
  pre .preprocessor,
  pre .ruby .class .parent,
  pre .built_in,
  pre .sql .aggregate,
  pre .django .template_tag,
  pre .django .variable,
  pre .smalltalk .class,
  pre .javadoc,
  pre .django .filter .argument,
  pre .smalltalk .localvars,
  pre .smalltalk .array,
  pre .attr_selector,
  pre .pseudo,
  pre .addition,
  pre .stream,
  pre .envvar,
  pre .apache .tag,
  pre .apache .cbracket,
  pre .tex .command,
  pre .prompt {
    color: #42b983;
  }
  pre .comment,
  pre .java .annotation,
  pre .python .decorator,
  pre .template_comment,
  pre .pi,
  pre .doctype,
  pre .deletion,
  pre .shebang,
  pre .apache .sqbracket,
  pre .tex .formula {
    color: #b3b3b3;
  }
  pre .coffeescript .javascript,
  pre .javascript .xml,
  pre .tex .formula,
  pre .xml .javascript,
  pre .xml .vbscript,
  pre .xml .css,
  pre .xml .cdata {
    opacity: 0.5;
  }
  html {
    height: 100%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    min-height: 100%;
  }

  body {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #34495e;
    background-color: #f6f6f6;
    margin: 0;
  }
  body.docs {
    padding-top: 61px;
  }
  @media screen and (max-width: 900px) {
    body.docs {
      padding-top: 0;
    }
  }
  a {
    text-decoration: none;
    color: #34495e;
  }
  img {
    border: none;
  }
  h1,
  h2,
  h3,
  h4,
  strong {
    font-weight: 600;
    color: #2c3e50;
  }
  code,
  pre {
    font-family: 'Roboto Mono', Monaco, courier, monospace;
    font-size: 0.8em;
    background-color: #f8f8f8;
    -webkit-font-smoothing: initial;
    -moz-osx-font-smoothing: initial;
  }
  code {
    color: #e96900;
    padding: 3px 5px;
    margin: 0 2px;
    border-radius: 2px;
    white-space: nowrap;
  }
  em {
    color: #7f8c8d;
  }
  p {
    word-spacing: 0.05em;
  }
  a.button {
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }
  a.button.white {
    background-color: #fff;
    color: #42b983;
  }
  .highlight {
    overflow-x: auto;
    position: relative;
    padding: 0;
    background-color: #f8f8f8;
    padding: 0.8em 0.8em 0.4em;
    line-height: 1.1em;
    border-radius: 2px;
  }
  .highlight table,
  .highlight tr,
  .highlight td {
    width: 100%;
    border-collapse: collapse;
    padding: 0;
    margin: 0;
  }
  .highlight .gutter {
    width: 1.5em;
  }
  .highlight .code pre {
    padding: 1.2em 1.4em;
    line-height: 1.5em;
    margin: 0;
  }
  .highlight .code .line {
    min-height: 1.5em;
  }
  .highlight.html .code:after,
  .highlight.js .code:after,
  .highlight.bash .code:after,
  .highlight.css .code:after {
    position: absolute;
    top: 0;
    right: 0;
    color: #ccc;
    text-align: right;
    font-size: 0.75em;
    padding: 5px 10px 0;
    line-height: 15px;
    height: 15px;
    font-weight: 600;
  }
  .highlight.html .code:after {
    content: 'HTML';
  }
  .highlight.js .code:after {
    content: 'JS';
  }
  .highlight.bash .code:after {
    content: 'Shell';
  }
  .highlight.css .code:after {
    content: 'CSS';
  }
  #main {
    position: relative;
    z-index: 1;
    padding: 0 60px 30px;
    overflow-x: hidden;
  }
  #nav .nav-link {
    cursor: pointer;
  }
  #nav .nav-dropdown-container .nav-link:hover {
    border-bottom: none;
  }
  #nav .nav-dropdown-container:hover .nav-dropdown {
    display: block;
  }
  #nav .nav-dropdown-container.language {
    margin-left: 20px;
  }
  #nav .nav-dropdown-container .arrow {
    pointer-events: none;
  }
  #nav .nav-dropdown {
    display: none;
    box-sizing: border-box;
    max-height: calc(100vh - 61px);
    overflow-y: scroll;
    position: absolute;
    top: 100%;
    right: -15px;
    background-color: #fff;
    padding: 10px 0;
    border: 1px solid #ddd;
    border-bottom-color: #ccc;
    text-align: left;
    border-radius: 4px;
    white-space: nowrap;
  }
  #nav .nav-dropdown li {
    line-height: 1.8em;
    margin: 0;
    display: block;
  }
  #nav .nav-dropdown li > ul {
    padding-left: 0;
  }
  #nav .nav-dropdown li:first-child h4 {
    margin-top: 0;
    padding-top: 0;
    border-top: 0;
  }
  #nav .nav-dropdown a,
  #nav .nav-dropdown h4 {
    padding: 0 24px 0 20px;
  }
  #nav .nav-dropdown h4 {
    margin: 0.45em 0 0;
    padding-top: 0.45em;
    border-top: 1px solid #eee;
  }
  #nav .nav-dropdown a {
    color: #3a5169;
    font-size: 0.9em;
    display: block;
  }
  #nav .nav-dropdown a:hover {
    color: #42b983;
  }
  #nav .arrow {
    display: inline-block;
    vertical-align: middle;
    margin-top: -1px;
    margin-left: 6px;
    margin-right: -14px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #ccc;
  }
  #header {
    background-color: #fff;
    padding: 10px 60px;
    position: relative;
    z-index: 2;
  }
  .path-home #header {
    display: none;
  }
  body.docs #header {
    position: fixed;
    width: 100%;
    top: 0;
  }
  body.docs #nav {
    position: fixed;
  }

  #mobile-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #fff;
    z-index: 9;
    display: none;
    box-shadow: 0 0 2px rgba(0,0,0,0.25);
  }
  a.menu-button {
    top: 20px;
  }

  .menu-button,
  #mobile-bar .menu-button {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 8px;
    left: 12px;
    background: url("assets/images/menu.png") center center no-repeat;
    background-size: 24px;
  }
  .path-home .menu-button {
    display: none;
  }
  .path-home #mobile-bar .menu-button {
    display: block;
  }

  #mobile-bar .logo {
    position: absolute;
    width: 30px;
    height: 30px;
    background: url("assets/images/vue-custom-element-logo.png") center center no-repeat;
    top: 5px;
    left: 50%;
    margin-left: -15px;
    background-size: 30px;
  }

  .path-home #mobile-bar .logo {
    display: none;
  }

  #logo {
    display: block;
    text-align: center;
    font-size: 1.2em;
    line-height: 40px;
    color: #2c3e50;
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 500;
  }

  .path-home #logo {
    font-size: 2em;
    padding-top: 50px;
  }

  .logo {
    height: 215px;
    background: url("assets/images/vue-custom-element-logo.png") no-repeat center;
    background-size: contain;
  }
  #logo span {
    font-size: 1.3em;
  }
  #logo img {
    display: none;
  }
  .sidebar {
    display: none;
  }
  .sidebar {
    position: absolute;
    z-index: 1;
    top: 61px;
    left: 0;
    bottom: 0;
    padding: 40px 0 30px 60px;
    width: 260px;
    margin-right: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    box-sizing: border-box;


    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
    -webkit-transform: translate(-280px, 0);
    transform: translate(-280px, 0);
  }
  .sidebar h2 {
    margin-top: 0.2em;
  }
  .sidebar ul {
    list-style-type: none;
    margin: 0;
    line-height: 1.8em;
    padding-left: 1em;
  }
  .sidebar .version-select {
    vertical-align: middle;
    margin-left: 5px;
  }
  .sidebar .menu-root {
    padding-left: 0;
  }
  .sidebar .menu-sub {
    font-size: 0.85em;
  }
  .sidebar .sidebar-link {
    color: #7f8c8d;
  }
  .sidebar .sidebar-link.current {
    font-weight: 600;
    color: #42b983;
  }
  .sidebar .sidebar-link.new:after {
    content: "NEW";
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    color: #fff;
    background-color: #42b983;
    line-height: 14px;
    padding: 0 4px;
    border-radius: 3px;
    margin-left: 5px;
    vertical-align: middle;
    position: relative;
    top: -1px;
  }
  .sidebar .sidebar-link:hover {
    border-bottom: 2px solid #42b983;
  }
  .sidebar .section-link.active {
    font-weight: bold;
    color: #42b983;
  }
  .sidebar .main-menu {
    margin-bottom: 20px;
    display: block;
    padding-left: 0;
  }
  .sidebar h4 {
    margin: .2em 0;
  }
  .sidebar .nav-dropdown h4 {
    font-weight: normal;
    margin: 0;
  }
  .sidebar.open {
    display: block;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  .path-home .sidebar.open {
    display: none;
  }
  @media screen and (max-width: 900px) {
    .sidebar {
      position: fixed;
      z-index: 8;
      height: 100%;
      top: 0;
      left: 0;
      padding: 60px 30px 20px;
    }
    .sidebar.open {
      display: block;
    }
    .path-home .sidebar.open {
      display: block;
    }
  }
  #hero {
    padding: 150px 40px 50px 40px;
    background-color: #fff;
  }
  .demos.inner {
    padding: 0 20px;
  }
  #hero .inner {
    max-width: 900px;
    margin: 0 auto;
  }
  #hero .left,
  #hero .right {
    display: inline-block;
    vertical-align: top;
  }
  #hero .left {
    width: 39%;
  }
  #hero .right {
    width: 61%;
  }
  #hero .hero-logo {
    width: 215px;
    height: 215px;
    float: right;
    margin-right: 60px;
  }
  #hero h1 {
    font-weight: 300;
    margin: 0;
    font-size: 4.4em;
    margin-top: 4px;
  }
  #hero .subtext {
    font-size: .465em;
  }
  #hero h2 {
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 500;
    font-size: 2.4em;
    margin: 0 0 10px;
    display: none;
  }
  #hero .button {
    margin: 0;
    margin-top: .3em;
    font-size: 1.05em;
    font-weight: 600;
    letter-spacing: 0.1em;
  }
  #hero .button:first-child {
    margin-right: 1em;
  }
  #hero .social-buttons {
    list-style-type: none;
    padding: 0;
  }
  #hero .social-buttons li {
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
  }
  #highlights {
    background-color: #fff;
    padding-bottom: 70px;
  }
  .demos.inner,
  #highlights .inner {
    max-width: 900px;
    margin: 0 auto;
  }
  #highlights .inner {
    text-align: center;
  }
  #highlights .point {
    width: 33%;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 2em;
  }
  #highlights .point h2 {
    color: #42b983;
    font-size: 1.5em;
    font-weight: 400;
    margin: 0;
    padding: 0.5em 0;
  }
  #highlights .point p {
    color: #7f8c8d;
  }
  #demos {
    text-align: center;
    padding: 35px 40px 45px;
    background-color: #f6f6f6;
  }
  #demos .inner {
    max-width: 700px;
    margin: 0px auto;
  }
  #demos h3 {
    color: #3ab882;
    font-size: 1.8em;
    margin: 0 0 10px;
  }
  #demos ul,
  #demos li {
    padding: 0;
    margin: 0;
  }
  #demos li {
    display: inline-block;
    width: 33%;
  }
  #demos li a {
    display: block;
    margin: .6em 0 0;
    position: relative;
    font-size: 1.4em;
  }
  #demos img {
    transition: all 0.3s ease;
    filter: contrast(0%);
  }
  #demos img:hover {
    filter: none;
  }
  #footer {
    padding: 50px 0;
    color: #fff;
    text-align: center;
  }
  #footer a {
    font-weight: 700;
    color: #fff;
  }
  @media screen and (max-width: 900px) {
    body {
      -webkit-text-size-adjust: none;
      font-size: 14px;
      padding-top: 40px;
    }
    #header {
      display: none;
    }
    #mobile-bar {
      display: block;
    }
    #hero {
      padding: 50px 40px 30px;
    }
    #hero .hero-logo {
      float: none;
      margin: 30px 0 15px;
      width: 140px;
      height: 140px;
    }
    #hero .left,
    #hero .right {
      text-align: center;
      width: 100%;
    }
    #hero h1 {
      font-size: 2em;
    }
    #hero h2 {
      display: block;
    }
    #hero .button {
      font-size: 0.9em;
    }
    #hero .logo-vue {
      display: none;
    }
    #hero .subtext {
      font-size: .7em;
    }
    #highlights .point {
      display: block;
      margin: 0 auto;
      width: 300px;
      padding: 0 40px 30px;
    }
    #highlights .point:before {
      content: "—";
      color: #42b983;
    }

    .logo {
      margin-bottom: 2em;
    }

    #demos li {
      width: 100%;
    }
  }
  /* standalone - .bttn-stretch */
  .bttn-default {
    color: #34495d;
  }
  .bttn-primary,
  .bttn,
  .bttn-lg,
  .bttn-md,
  .bttn-sm,
  .bttn-xs {
    color: #3ab882;
  }
  .bttn-warning {
    color: #fcb738;
  }
  .bttn-danger {
    color: #da5961;
  }
  .bttn-success {
    color: #3ab882;
  }
  .bttn,
  .bttn-lg,
  .bttn-md,
  .bttn-sm,
  .bttn-xs {
    margin: 0;
    padding: 0;
    border-width: 0;
    border-color: transparent;
    background: transparent;
    font-weight: 400;
    cursor: pointer;
    position: relative;
  }

  .bttn-jelly {
    margin: 0;
    border-width: 0;
    border-color: transparent;
    background: transparent;
    font-weight: 400;
    cursor: pointer;
    position: relative;
    font-size: 20px;
    font-family: inherit;
    padding: 5px 12px;
    border-radius: 50px;
    -webkit-transition: all 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: all 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
  }
  .bttn-jelly:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    /*background: #3ab882;*/
    border: 1px solid #3ab882;
    content: '';
    z-index: -1;
    opacity: 0;
    -webkit-transition: all 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: all 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  .bttn-jelly:hover,
  .bttn-jelly:focus {
    color: #3ab882;
    /*box-shadow: 0 1px 8px rgba(58,51,53,0.4);*/
    -webkit-transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .bttn-jelly:hover:before,
  .bttn-jelly:focus:before {
    opacity: 1;
    -webkit-transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background-color: transparent;
    font-size: .95em;
  }

  .el-collapse pre[class*="language-"] {
    margin: 0;
  }

</style>
