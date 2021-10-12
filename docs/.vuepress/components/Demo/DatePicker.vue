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
        pickerTime: ['', '']
      },
      formData: {
        list: [{
          type: 'DatePicker',
          label: '操作时间',
          model: 'pickerTime',
          attrs: {
            valueFormat: 'yyyy-MM-dd',
            type: 'daterange',
            rangeSeparator: '至',
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间'
          }
        }]
      }
    }
  }
}
</script>
