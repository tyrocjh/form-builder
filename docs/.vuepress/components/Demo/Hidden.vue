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
        control: '',
        field1: '',
        field2: ''
      },
      formData: {
        config: {
          labelWidth: '100px'
        },
        list: [{
          type: 'select',
          label: '控制字段展示',
          model: 'control',
          options: [{
            label: '显示',
            value: 1
          }, {
            label: '隐藏',
            value: 0
          }]
        }, {
          type: 'input',
          label: '字段一',
          model: 'field1',
          hidden: model => model.control === 0
        }, {
          type: 'input',
          label: '字段二',
          model: 'field2'
        }]
      }
    }
  }
}
</script>
