import Vue from 'vue'
let TextInputConstructor = Vue.extend(require('./main.vue'))

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
    data: options
  })
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  const vm = instance.vm

  vm.promise = new Promise((resolve, reject) => {
    vm.onAction = (act) => {
      resolve(vm.input)
      vm.visible = false
      vm.$el.parentNode.removeChild(vm.$el)
    }
  })
  instance.dom = instance.vm.$el
  return instance
}

/*
 * title, text => not neccessary
 */
TextInput.open = function(title, text) {
  var instance = new TextInput()
  const vm = instance.vm
  vm.dlgTitle = title || 'Please enter text'
  vm.input = text || ''
  vm.visible = true
  return instance.promise
}

export default TextInput
