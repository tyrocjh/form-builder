<template>
  <div :style="widget.styles">
    <template v-for="(item, idx) in widget.items">
      <form-item :model="model" :widget="item" :remote-data="remoteData" :key="idx"></form-item>
    </template>
  </div>
</template>

<script>
import FormItem from './FormItem.vue'

export default {
  name: 'FormGroup',
  components: {
    FormItem
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
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
