<template>
  <div class="form-builder-container">
    <el-form ref="elForm" :model="model" v-bind="formConfig">
      <template v-for="(formItem, idx) in formItemList">

        <!-- 栅格 -->
        <template v-if="formItem.type === GRID">
          <el-row v-bind="formItem.attrs" :key="idx">
            <template v-for="(column, colIndex) in formItem.columns">

              <!-- formItem -->
              <slot :name="`column:${column.columnName}`" />
              <el-col v-bind="column.attrs" :key="colIndex">
                <template v-for="item in column.list">
                  <component
                    :is="item.type === GROUP ? 'form-group' : 'form-item'" :key="item.model"
                    :model="model" :widget="item" :remote-data="remoteData"
                  />
                </template>
              </el-col>
              <slot :name="`$column:${column.columnName}`" />

            </template>
          </el-row>
        </template>

        <!-- formItem -->
        <template v-else>
          <slot :name="`model:${formItem.model}`" />
          <component
            :is="formItem.type === GROUP ? 'form-group' : 'form-item'" :key="formItem.model"
            :model="model" :widget="formItem" :remote-data="remoteData"
          />
          <slot :name="`$model:${formItem.model}`" />
        </template>
      </template>

      <slot name="actions" />
    </el-form>
  </div>
</template>

<script>
import FormGroup from './FormGroup.vue'
import FormItem from './FormItem.vue'

const GRID = 'grid'
const GROUP = 'group'

export default {
  name: 'FormBuilder',
  components: {
    FormGroup,
    FormItem
  },
  model: {
    prop: 'formModel',
    event: 'input'
  },
  props: {
    formModel: {
      type: Object,
      default: () => null
    },
    formData: {
      type: Object,
      default: () => {}
    },
    remoteData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      GRID,
      GROUP,
      formConfig: {},
      formItemList: [],
      model: {}
    }
  },
  watch: {
    formModel: {
      handler(val) {
        if (!val) return
        this.setValueFromModel()
      },
      deep: true
    },
    model: {
      handler(val) {
        if (!val) return
        this.$emit('input', val)
      },
      deep: true
    }
  },
  created() {
    this.setElFormEvents()
    this.setData()
  },
  methods: {
    // 初始化数据
    setData() {
      this.formConfig = this.formData.config || {}
      this.formItemList = this.formData.list || []
      this.generateModel()
    },
    // 生成model
    generateModel() {
      const transformlist = (list) => {
        list.map(item => {
          if (item.type === GROUP) {
            transformlist(item.items)
          } else {
            this.$set(this.model, item.model, this.getModelType(item.type))
          }
        })
      }
      transformlist(this.formItemList)
      this.model = this.formModel || this.model
    },
    // 获取model默认类型
    getModelType(type) {
      const arrTypes = ['checkbox-group']
      if (arrTypes.includes(type)) return []
      return ''
    },
    // 获取model
    getModel() {
      return new Promise((resolve, reject) => {
        this.$refs.elForm.validate(valid => {
          if (valid) {
            resolve(this.model)
          } else {
            reject()
          }
        })
      })
    },
    // 获取model value
    getModelValue(modelName) {
      return this.model[modelName]
    },
    // 更新model
    updateModel(formData) {
      let newFormData = Object.assign({}, this.model, formData)
      this.model = newFormData
    },
    // 设置model的值
    setValueFromModel() {
      this.model = this.formModel
    },
    // 重置表单
    resetFields() {
      this.$refs.elForm.resetFields()
    },
    // 设置el-form默认事件
    setElFormEvents() {
      this.$nextTick(() => {
        Object.keys(this.$refs.elForm.$options.methods).forEach(item => {
          if (item in this) return
          this[item] = this.$refs.elForm[item]
        })
      })
    }
  }
}
</script>
