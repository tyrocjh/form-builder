<template>
  <div>
    <el-input v-model="descript" v-positiveNumber v-bind="$attrs" @input="handleInput" style="width: 200px;" />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  directives: {
    positiveNumber: {
      bind(el) {
        const element = el.getElementsByTagName('input')[0]
        element.handler = function() {
          element.value = element.value.replace(/[^\d.]/g, '').replace(/(^\d*\.\d*)(\.\d*)/g, '$1')
        }
        element.addEventListener('input', element.handler)
      },
      unbind(el) {
        const element = el.getElementsByTagName('input')[0]
        element.removeEventListener('input', element.handler)
      }
    }
  },
  data() {
    return {
      descript: ''
    }
  },
  methods: {
    handleInput(val) {
      this.$emit('change', val)
    }
  }
}
</script>
