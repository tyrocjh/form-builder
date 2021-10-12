<template>
  <el-form-item 
    v-if="show"
    :label="widget.label"
    :prop="widget.model"
    :style="widget.formItemStyles">

    <!-- 组件头部slot -->
    <template v-if="widget.slot && widget.slot.prefix">
      <v-node :content="widget.slot.prefix" />
    </template>

    <custom-component
      v-if="widget.component || widget.type"
      v-model="model[widget.model]"
      v-bind="widget.attrs"
      :component="widget.component || `el-${widget.type || 'input'}`"
      :style="widget.styles"
      v-on="listeners"
      v-on:keyup.enter.native="keyupEnterNative">

      <!-- 组件选项 -->
      <template v-for="item in (widget.remoteOptions || widget.options)">
        <el-option
          v-if="widget.type === 'select'"
          :label="item.label" :value="item.value" :key="item.key">
        </el-option>

        <el-radio
          v-else-if="widget.type === 'radio-group'"
          :label="item.value" :key="item.key">
          {{ item.label }}
        </el-radio>

        <el-checkbox
          v-else-if="widget.type === 'checkbox-group'"
          :label="item.label" :key="item.key">
        </el-checkbox>
      </template>

      <!-- 组件内容 -->
      <template v-if="widget.content">
        <v-node :content="widget.content" />
      </template>
    </custom-component>

    <!-- 组件尾部slot -->
    <template v-if="widget.slot && widget.slot.suffix">
      <v-node :content="widget.slot.suffix" />
    </template>

  </el-form-item>
</template>

<script>
import { isFunction } from '../utils'

const formValidator = (data) => {
  if (!data) {
    throw new Error('form data widget must be an Object.')
  } else if (!data.model && !data.component) {
    throw new Error('\'model\' is unvalidated.')
  } else if (!data.type && !data.component) {
    throw new Error('\'type\' and \'component\' cannot both be null.')
  }
}

export default {
  name: 'FormItem',
  components: {
    customComponent: {
      functional: true,
      render: (h, ctx) => {
        return h(ctx.props.component, ctx.data, ctx.children)
      }
    },
    VNode: {
      functional: true,
      render: (h, ctx) => ctx.props.content
    }
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    widget: {
      type: Object,
      default: () => {}
    },
    remoteData: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    show() {
      const { hidden } = this.widget
      if (!hidden) return true
      return !hidden(this.model)
    },
    listeners() {
      return this.widget.events || {}
    }
  },
  data() {
    return {
    }
  },
  watch: {
    widget: {
      handler(data) {
        formValidator(data)
      },
      immediate: true
    },
    remoteData: {
      handler() {
        this.setRemoteOption()
      },
      deep: true
    }
  },
  created() {
    this.setRemoteOption()
  },
  methods: {
    // 设置remote option数据
    setRemoteOption() {
      if (!this.remoteData) return

      const options = this.remoteData[this.widget.remoteOptionsName]
      if (options) {
        this.widget.remoteOptions = options.map(item => {
          // 特殊处理‘全部’选项
          if (item.propsForAllOption) {
            return {
              key: item[this.widget.propsForAllOption.key || this.widget.propsForAllOption.value],
              value: item[this.widget.propsForAllOption.value],
              label: item[this.widget.propsForAllOption.label]
            }
          }
          // 没有使用props设置别名
          if (!this.widget.props) {
            return {
              key: item.key || item.value,
              value: item.value,
              label: item.label
            }
          }
          return {
            key: item[this.widget.props.key || this.widget.props.value || this.widget.props.label],
            value: (this.widget.attrs && this.widget.attrs.valueKey) ? item : (item[this.widget.props.value || this.widget.props.key]),
            label: this.getLabel(this.widget.props.label, item)
          }
        })
      }
    },
    // 获取label
    getLabel(param, item) {
      if (isFunction(param)) {
        return param(item)
      }
      return item[param]
    },
    // 原生回车事件
    keyupEnterNative() {
      this.widget.nativeEvents && this.widget.nativeEvents['keyup.enter'] && this.widget.nativeEvents['keyup.enter']()
    }
  }
}
</script>
