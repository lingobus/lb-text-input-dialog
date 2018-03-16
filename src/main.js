import Vue from 'vue'
import options from './main.vue'
let TextInputConstructor = Vue.extend(options)

var TextInput = function(options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  if (typeof options === 'string') {
    options = {
      TextInput: options
    }
  }
  let id = 'TextInput'

  var instance = new TextInputConstructor({
    el: document.createElement('div'),
    data: options
  })
  instance.id = id
  document.body.appendChild(instance.$el)

  instance.promise = new Promise((resolve, reject) => {
    instance.onAction = (positive) => {
      instance.visible = false
      if (positive) {
        resolve(instance.input)
      } else {
        reject()
      }
      instance.$el.parentNode.removeChild(instance.$el)
    }
  })
  return instance
}


TextInput.open = function(title, text) {
  var instance = new TextInput()
  const vm = instance
  vm.dlgTitle = title || 'Please enter text'
  vm.input = text || ''
  vm.visible = true
  return instance.promise
}

export default TextInput
