<template>
  <div class="demo-box">
    <form-builder ref="formBuilder" v-model="formModel" :form-data="formData">
      <template slot="actions">
        <el-form-item>
          <pre>{{ formModel }}</pre>
        </el-form-item>
      </template>
    </form-builder>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        name: '',
        area: '',
        date: '',
        switch: 0,
        multi: [],
        single: '',
        description: ''
      },
      formData: {
        config: {
          labelWidth: '50px'
        },
        list: [{
          type: 'input',
          model: 'name',
          label: '名字',
          attrs: {
            placeholder: '请填写名字',
            clearable: true
          }
        }, {
          type: 'select',
          model: 'area',
          label: '区域',
          options: [{
            value: 'AREA1',
            label: '区域一'
          }, {
            value: 'AREA2',
            label: '区域二'
          }]
        }, {
          type: 'date-picker',
          model: 'date',
          label: '日期',
          attrs: {
            type: 'date',
            placeholder: '请选择日期'
          }
        }, {
          type: 'switch',
          model: 'switch',
          label: '开关'
        }, {
          type: 'checkbox-group',
          model: 'multi',
          label: '多选',
          options: [{
            label: '多选A'
          }, {
            label: '多选B'
          }, {
            label: '多选C'
          }]
        }, {
          type: 'radio-group',
          model: 'single',
          label: '单选',
          options: [{
            value: 'A',
            label: '单选A'
          }, {
            value: 'B',
            label: '单选B'
          }]
        }, {
          type: 'input',
          label: '描述',
          model: 'description',
          attrs: {
            type: 'textarea',
            rows: 3
          }
        }]
      }
    }
  }
}
</script>
