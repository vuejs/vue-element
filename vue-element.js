(function () {

  function install (Vue) {
    Vue.element = function (tag, options) {
      var p = Object.create(HTMLElement.prototype)
      // Handle attached/detached callbacks
      p.attachedCallback = options.attached
      p.detachedCallback = options.detached
      // disable Vue's own attached/detached detection
      // so we don't fire the callback twice
      options.attached = null
      options.detached = null
      // Handle param attributes
      var props = options.props || options.paramAttributes || []
      var propsHash = Object.create(null)
      props.forEach(function (name) {
        propsHash[name] = true
        Object.defineProperty(p, name, {
          get: function () {
            return this.__vue__[name]
          },
          set: function (val) {
            this.setAttribute(name, val)
          }
        })
      })
      p.attributeChangedCallback = function (name, oldVal, newVal) {
        if (propsHash[name]) {
          this.__vue__[name] = newVal
        }
      }
      // Define the Vue constructor to manage the element
      var VM = Vue.extend(options)
      p.createdCallback = function () {
        var vm = new VM({
          el: this
        })
        if (options.shadow) {
          var shadow = this.createShadowRoot()
          while (this.firstChild) {
            shadow.appendChild(this.firstChild)
          }
        }
      }
      // register element
      document.registerElement(tag, {
        prototype: p
      })
    }
  }

  if (typeof exports == "object") {
    module.exports = install
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return install })
  } else if (window.Vue) {
    Vue.use(install)
  }

})()