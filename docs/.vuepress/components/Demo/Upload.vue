<template>
  <div class="demo-box">
    <form-builder :form-data="formData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        list: [{
          type: 'upload',
          model: 'upload',
          label: '上传',
          attrs: {
            class: 'avatar-uploader',
            action: ''
          },
          content: <i class="el-icon-plus avatar-uploader-icon"></i>
        }]
      }
    }
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
</style>
