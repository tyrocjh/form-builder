<template>
  <div class="demo-box">
    <form-builder v-model="formModel" :form-data="formData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        name: '',
        display: ''
      },
      formData: {
        list: [{
          type: 'input',
          label: '名字',
          model: 'name',
          attrs: {
            placeholder: 'input | focus | blur | keyup.enter'
          },
          events: {
            input: this.handleChange,
            focus: this.handleFocus,
            blur: this.handleBlur
          },
          nativeEvents: {
            'keyup.enter': () => {
              this.handleEnter()
            }
          }
        }, {
          type: 'input',
          label: '事件展示',
          model: 'display',
          attrs: {
            readonly: true
          }
        }]
      }
    }
  },
  methods: {
    handleChange() {
      this.formModel.display = `input: ${this.formModel.name}`
    },
    handleFocus() {
      this.formModel.display = 'focus'
    },
    handleBlur() {
      this.formModel.display = 'blur'
    },
    handleEnter() {
      this.formModel.display = `native event 'keyup.enter'`
    }
  }
}
</script>
