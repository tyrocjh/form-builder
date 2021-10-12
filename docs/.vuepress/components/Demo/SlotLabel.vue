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
        config: {
          inline: true
        },
        list: [{
          type: 'input',
          label: '名字',
          model: 'name',
          styles: {
            width: '200px'
          },
          slot: {
            suffix:
              <el-tooltip class="item" effect="dark" content="我是名字啊~" placement="top">
                <i class="el-icon-question" style="padding-left:2px; font-size:16px; color: #409EFF;"></i>
              </el-tooltip>
          }
        }, {
          type: 'input',
          label: '手机',
          model: 'mobile',
          styles: {
            width: '200px'
          },
          slot: {
            prefix:
              <i class="el-icon-mobile"></i>
          }
        }]
      }
    }
  }
}
</script>
