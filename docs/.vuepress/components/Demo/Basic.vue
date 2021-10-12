<template>
  <div class="demo-box">
    <form-builder ref="formBuilder" :form-data="formData">
      <template slot="actions">
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="handleSubmit">提交</el-button>
          <el-button icon="el-icon-refresh" @click="handleReset">重置</el-button>
        </el-form-item>
      </template>
    </form-builder>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        config: {
          labelWidth: '50px',
          rules: {
            name: [
              { required: true, message: '请填写名字' }
            ],
            area: [
              { required: true, message: '请选择区域' }
            ],
            description: [
              { required: true, message: '请填写描述信息', trigger: 'blur' },
              { max: 20, message: '描述不能超过20个字', trigger: 'blur' }
            ]
          }
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
          type: 'switch',
          model: 'switch',
          label: '开关',
          attrs: {
            activeText: '开',
            inactiveText: '关'
          },
          slot: {
            suffix: <span style="margin-left: 10px; font-size: 12px; color: #999;">注意：我是提示信息~</span>
          }
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
    handleSubmit() {
      this.$refs.formBuilder.getModel().then(data => {
        this.$message.success('提交成功，打开DevTools查看model信息')
        console.log('model: ', data)
      }).catch(() => {
      })
    },
    handleReset() {
      this.$refs.formBuilder.resetFields()
    }
  }
}
</script>
