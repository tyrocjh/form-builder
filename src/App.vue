<template>
  <div id="app">
    <form-builder 
      ref="formBuilder" v-model="formModel" 
      :form-data="formData" :remote-data="remoteData" 
    />
  </div>
</template>

<script>
import FormBuilder from './index'

export default {
  name: 'App',
  components: {
    FormBuilder
  },
  data() {
    return {
      formModel: {},
      formData: {
        config: {},
        list: [{
          type: 'input',
          label: '输入框'
        }]
      },
      remoteData: {}
    }
  }
}
</script>

<style>
</style>
