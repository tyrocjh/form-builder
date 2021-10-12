<template>
  <div class="demo-box">
    <form-builder :form-data="formData">
      <template slot="actions">
        <el-button type="primary" @click="disableName = !disableName">
          点击{{ disableName ? '启用' : '禁用' }}名字
        </el-button>
        <el-button type="primary" @click="readonlyAddr = !readonlyAddr">
          点击{{ readonlyAddr ? '编辑' : '禁止编辑' }}地址
        </el-button>
      </template>
    </form-builder>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disableName: false,
      readonlyAddr: false,
      formData: {
        list: [{
          type: 'input',
          label: '名字',
          model: 'name',
          attrs: {
            disabled: false
          }
        }, {
          type: 'input',
          label: '地址',
          model: 'address',
          attrs: {
            readonly: false
          }
        }]
      }
    }
  },
  watch: {
    disableName(val) {
      this.formData.list[0].attrs.disabled = val
    },
    readonlyAddr(val) {
      this.formData.list[1].attrs.readonly = val
    }
  },
  methods: {
  }
}
</script>
