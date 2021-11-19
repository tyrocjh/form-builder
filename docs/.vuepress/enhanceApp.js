import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import FormBuilder from '../../src/components/FormBuilder.vue'
import FormGroup from '../../src/components/FormGroup.vue'
import FormItem from '../../src/components/FormItem.vue'

Vue.component('FormBuilder', FormBuilder)
Vue.component('FormGroup', FormGroup)
Vue.component('FormItem', FormItem)

Vue.use(ElementUI, {
  size: 'small'
})
