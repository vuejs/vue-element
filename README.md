# Vue.element plugin

Register a real Custom Element using Vue.js.

## Requirements

- Only works with Vue ^0.11.0
- The browser must support the Custom Element API (currently Chrome only), or you need to include the [Web Components polyfill](https://github.com/webcomponents/webcomponentsjs).

## Installation

Available through npm, Component, Duo or Bower.

### Direct include

If you are using Vue globally, just include `vue-element.js` and it will automatically install the `Vue.element` method.

### CommonJS

``` js
Vue.use(require('vue-element')) // installed
Vue.element('my-element', { /* ... */ })
```

## Usage

Usage is the same as `Vue.component()` - you pass in exactly the same options as if you are defining a Vue component. A few things to note:

- You don't need to manually instantiate a root level Vue instance. Custom Elements get auto-promoted when `document.registerElement` is called. You can also freely define the element before or after the markup.

- You can expose attributes with Vue's `props` (0.12) or `paramAttributes` (0.11) option. See the example folder to see it in action.

- By default the element does not use Shadow DOM. If you want to enable Shadow DOM encapsulation, pass in `shadow: true` in your component options.