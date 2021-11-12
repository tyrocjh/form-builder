<template>
  <div class="demo-box">
    <div class="title">基本用法：</div>
    <form-builder
      ref="formBuilder" :form-data="formData" :form-action="formAction"
      @handle-submit="handleSubmit" @handle-reset="handleReset"
    />

    <div class="title mt">覆盖默认提交/重置方法：</div>
    <form-builder
      ref="formBuilder2" :form-data="formData2" :form-action="formAction2"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        config: {
          inline: true
        },
        list: [{
          type: 'input',
          model: 'name',
          label: '名字'
        }, {
          type: 'input',
          model: 'address',
          label: '地址'
        }]
      },
      formAction: {
        apiCall: this.submitData,
        showButtonGroup: true
      },
      formData2: {
        config: {
          inline: true
        },
        list: [{
          type: 'input',
          model: 'name',
          label: '名字'
        }, {
          type: 'input',
          model: 'address',
          label: '地址'
        }]
      },
      formAction2: {
        showButtonGroup: true,
        submitButtonText: '提交2',
        resetButtonText: '重置2',
        submitHandler: this.handleSubmit2,
        resetHandler: this.handleReset2
      }
    }
  },
  methods: {
    handleSubmit(data) {
      this.$message.success('提交成功，打开DevTools查看model信息')
      console.log('model: ', data)
    },
    handleReset() {
      this.$message.success('重置回调')
    },
    handleSubmit2() {
      this.$refs.formBuilder2.getModel().then(data => {
        this.$message.success('提交成功，打开DevTools查看model信息')
        console.log('model: ', data)
      }).catch(() => {
      })
    },
    handleReset2() {
      this.$message.success('重置覆盖')
      this.$refs.formBuilder2.resetFields()
    },
    submitData(data) {
      console.log('submitData: ', data)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            code: 0,
            msg: 'success'
          })
        }, 2000);
      })
    }
  }
}
</script>

<style scoped>
.mt {
  margin-top: 10px;
}
.title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}
</style>
