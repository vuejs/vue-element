# Vue.element plugin

Register a real Custom Element using Vue.js.

## Requirements

- Work with Vue 1.x and 2.x
- The browser must support the Custom Element API (currently Chrome only), or you need to include the [Web Components polyfill](https://github.com/WebReflection/document-register-element/blob/master/build/document-register-element.js).

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

- Nested Vue custom elements are not supported - it is recommended to use Vue's own component system inside a custom element; The custom element interface is intended for inter-op with other libraries (e.g. Polymer).

- You don't need to manually instantiate a root level Vue instance. Custom Elements get auto-promoted when `document.registerElement` is called. You can also freely define the element before or after the markup.

- Real custom elements **must** contain a hyphen in its tag name. For example, `my-element` is valid, but `myelement` is not.

## Examples

``` html
<widget-vue prop1="1", prop2="string" prop3="true"></widget-test>
```

``` js
Vue.element('widget-vue', {
  props: [
    'prop1',
    'prop2',
    'prop3'
  ],
  data: {
    message: 'Hello Vue!'
  },
  template: '<p>{{ message }}, {{ prop1  }}, {{prop2}}, {{prop3}}</p>'
});

document.querySelector('widget-vue').prop2 // get prop value
document.querySelector('widget-vue').prop2 = 'another string' // set prop value
```

You can also change <widget-vue> attributes and changes will be instantly applied.

## License

[MIT](http://opensource.org/licenses/MIT)
