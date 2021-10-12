<template>
  <div class="demo-box">
    <form-builder ref="formBuilder" v-model="formModel" :form-data="formData">
      <template slot="actions">
        <el-form-item>
          <pre style="background: none;">{{ formModel }}</pre>
        </el-form-item>

        <el-button type="primary" @click="updateModel1">更新模型（直接更新formModel）</el-button>
        <el-button type="primary" @click="updateModel2">更新模型（调用方法updateModel）</el-button>
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
        switch: '',
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
  },
  methods: {
    updateModel1() {
      this.formModel = {
        name: 'TyroCCC',
        area: 'AREA1',
        date: '2020-5-20',
        switch: true,
        multi: ['多选B', '多选C'],
        single: 'A',
        description: '你好，世界！'
      }
    },
    updateModel2() {
      this.$refs.formBuilder.updateModel({
        name: 'Nash',
        area: 'AREA2',
        date: '2010-10-10',
        switch: false,
        multi: ['多选A'],
        single: 'B',
        description: 'Hello World!'
      })
    },
  }
}
</script>
