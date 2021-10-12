import FormBuilder from './components/FormBuilder.vue'

FormBuilder.install = Vue => {
  Vue.component(FormBuilder.name, FormBuilder)
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(FormBuilder)
}

export default FormBuilder
