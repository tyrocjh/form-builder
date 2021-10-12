<template>
  <div class="custom-widget" style="display: block;">
    <el-form-item style="margin: 0; display: inline-block;">
      <el-select v-model="day" style="width: 200px;" @change="handleChange">
        <el-option v-for="item in dayOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <span>天</span>
    <el-form-item prop="mankind" style="margin: 0; display: inline-block;">
      <el-input v-model="mankind" style="width: 200px;" @input="handleChange" />
    </el-form-item>
    <span>人</span>
  </div>
</template>

<script>
export default {
  name: 'CustomWidget',
  props: {
    defaultDay: {
      type: Number,
      default: 30
    },
    defaultMankind: {
      type: Number,
      default: 10
    },
    dayOptions: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    defaultDay: {
      handler(val) {
        this.day = val
        this.handleChange()
      },
      immediate: true
    },
    defaultMankind: {
      handler(val) {
        this.mankind = val
        this.handleChange()
      },
      immediate: true
    }
  },
  data() {
    return {
      day: '',
      mankind: ''
    }
  },
  methods: {
    handleChange() {
      this.$emit('change', {
        day: this.day,
        mankind: this.mankind
      })
    }
  }
}
</script>
