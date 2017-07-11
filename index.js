import TextInputDialog from './src/main.js'

TextInputDialog.install = function(Vue) {
  Vue.component(TextInputDialog.name, TextInputDialog);
}

export default TextInputDialog
