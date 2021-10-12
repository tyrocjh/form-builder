<template>
  <div class="demo-box">
    <form-builder ref="formBuilder" v-model="formModel" :form-data="formData">
      <template slot="actions">
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
        <pre>{{ formModel }}</pre>
      </template>
    </form-builder>
  </div>
</template>

<script>
import CustomInput from '../CustomInput'
import CustomWidget from '../CustomWidget'

export default {
  components: {
    CustomInput,
    CustomWidget
  },
  data() {
    return {
      formModel: {
        customInput: '',
        day: '',
        mankind: ''
      },
      formData: {
        config: {
          labelWidth: '120px',
          rules: {
            customInput: [
              { required: true, message: '请输入正数' }
            ],
            mankind: [
              { required: true, message: '请输入人数' }
            ],
            day: [
              { required: true }
            ]
          }
        },
        list: [{
          component: CustomInput,
          label: '自定义输入框',
          model: 'customInput',
          attrs: {
            placeholder: '只能输入正数'
          },
          events: {
            change: data => {
              this.formModel.customInput = data
            }
          }
        }, {
          component: CustomWidget,
          label: '自定义组合',
          model: 'day',
          attrs: {
            defaultDay: 60,
            defaultMankind: 20,
            dayOptions: [{
              value: 30,
              label: 30
            } ,{
              value: 60,
              label: 60
            }, {
              value: 90,
              label: 90
            }]
          },
          events: {
            change: data => {
              this.formModel.day = data.day
              this.formModel.mankind = data.mankind
            }
          }
        }]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.formBuilder.getModel().then(model => {
        console.log(model)
      })
    }
  }
}
</script>
