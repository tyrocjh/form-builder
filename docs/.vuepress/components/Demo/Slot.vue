<template>
  <div class="demo-box">
    <form-builder ref="formBuilder" :form-data="formData">
      <el-form-item slot="$model:name" label="后置插槽">
        <el-input v-model="slot1" />
      </el-form-item>
      <el-form-item slot="model:address" label="前置插槽">
        <el-input v-model="slot2" />
      </el-form-item>

      <template slot="actions">
        <el-button type="primary" icon="el-icon-search" @click="handleSubmit">提交</el-button>
        <el-button icon="el-icon-refresh" @click="handleReset">重置</el-button>
      </template>
    </form-builder>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slot1: '',
      slot2: '',
      formData: {
        list: [{
          type: 'input',
          label: '名字',
          model: 'name'
        }, {
          type: 'input',
          label: '地址',
          model: 'address'
        }]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.formBuilder.getModel().then(res => {
        console.log(res)
      })
    },
    handleReset() {
      this.$refs.formBuilder.resetFields()
    }
  }
}
</script>
