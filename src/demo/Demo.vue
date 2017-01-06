<template>
  <div>
    <div id="header">
      <a id="logo" href="/">
        <span>Vue-element</span>
      </a>
    </div>

    <div id="hero">

      <demo-basic></demo-basic>

      <div class="inner">
        <div class="left">
          <div class="logo"></div>
        </div><div class="right">
        <h2 class="vue">Vue-element</h2>
        <h1>
          Custom Elements<br>for Vue.js
        </h1>
        <p>
          <!--<a class="button" href="/v2/guide/">GET STARTED</a>-->
          <a class="button white" href="https://github.com/vuejs/vue-element" target="_blank">GITHUB</a>
        </p>
      </div>
      </div>
    </div>

      <div id="highlights">
        <div class="inner">
          <div class="point">
            <h2>Custom Elements v1</h2>
            <p>Compatible with latest specification. Vue-element will use native implementation if supported.</p>
          </div>

          <div class="point">
            <h2>Compatibility</h2>
            <p>Using polyfill we can support wide range of browsers, including IE9+, Android and IOS.</p>
          </div>

          <div class="point">
            <h2>Full featured</h2>
            <p>
              You can use nesting, HMR, default slots, lazy-loading, native Custom Elements callbacks.
            </p>
          </div>
        </div>
      </div>

    <div id="demos">
      <div class="inner">
        <h3>Demos</h3>

        <ul>
          <li><a href="#">Basic demo</a></li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  import DemoBasic from './components/DemoBasic';

  export default {
    name: 'demo',
    components: {
      DemoBasic
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
  body {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #34495e;
    background-color: #fff;
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
  #ad {
    width: 125px;
    position: fixed;
    z-index: 99;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 3px;
    font-size: 13px;
  }
  #ad a {
    display: inline-block;
    color: #7f8c8d;
    font-weight: normal;
  }
  #ad span {
    color: #7f8c8d;
    display: inline-block;
    margin-bottom: 5px;
  }
  #ad img {
    width: 125px;
  }
  #ad .carbon-img,
  #ad .carbon-text {
    display: block;
    margin-bottom: 6px;
    font-weight: normal;
    color: #34495e;
  }
  #ad .carbon-poweredby {
    color: #aaa;
    font-weight: normal;
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
    height: $heading-inner-height;
    padding: 10px 60px;
    position: relative;
    z-index: 2;
  }
  body.docs #header {
    position: fixed;
    width: 100%;
    top: 0;
  }
  body.docs #nav {
    position: fixed;
  }
  #nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 60px;
    top: 10px;
    height: 40px;
    line-height: 40px;
  }
  #nav .break {
    display: none;
  }
  #nav li {
    display: inline-block;
    position: relative;
    margin: 0 0.6em;
  }
  .nav-link {
    padding-bottom: 3px;
  }
  .nav-link:hover,
  .nav-link.current {
    border-bottom: 3px solid #42b983;
  }
  #logo {
    display: inline-block;
    font-size: 1.5em;
    line-height: 40px;
    color: #2c3e50;
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 500;
  }
  .logo {
    height: 215px;
    background: url(assets/images/vue-element-logo.png) no-repeat center;
    background-size: contain;

  }
  body {
    background-color: #fff;
  }
  #logo span {
    font-size: 1.2em;
  }
  #logo img {
    display: none;
  }
  .sidebar {
    display: none;
  }
  #hero {
    padding: 50px 40px;
    background-color: #fff;
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
    font-size: 3.2em;
  }
  #hero h2 {
    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 500;
    font-size: 2.4em;
    margin: 0 0 10px;
    display: none;
  }
  #hero .button {
    margin: 1em 0;
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
  #highlights .inner {
    max-width: 900px;
    margin: 0 auto;
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
    color: #999;
    font-size: 1.6em;
    margin: 0 0 10px;
  }
  #demos a {
    margin: 20px 15px 0;
    position: relative;
  }
  #demos a,
  #demos img {
    width: 100px;
    display: inline-block;
    vertical-align: middle;
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
    }
    #header {
      display: none;
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
  }
</style>
