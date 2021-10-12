<template>
  <div class="demo-box">
    <el-button @click="dlgVisible=true">打开弹窗</el-button>
    <el-button @click="openWithData">打开弹窗（带数据）</el-button>

    <el-dialog :visible.sync="dlgVisible" @open="handleOpen" @close="handleClose">
      <form-builder ref="formBuilder" :form-data="formData" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dlgVisible: false,
      formData: {
        list: [{
          type: 'input',
          label: '名字',
          model: 'name'
        }]
      }
    }
  },
  methods: {
    openWithData() {
      this.dlgVisible = true
      this.$nextTick(() => {
        this.$refs.formBuilder.updateModel({
          name: 'TyroCCC'
        })
      })
    },
    handleOpen() {
      console.log(this.$refs.formBuilder) // 第一次打开时为 undefined
      this.$nextTick(() => {
        console.log(this.$refs.formBuilder) // VueComponent
      })
    },
    handleClose() {
      this.$refs.formBuilder.resetFields()
    }
  }
}
</script>
