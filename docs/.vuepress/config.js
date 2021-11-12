module.exports = {
  title: '表单生成器 Form Builder',
  description: '根据配置生成表单',
  themeConfig: {
    sidebar: [
      {
        title: '示例 DEMO',
        path: '/demo/basic',
        collapsable: false,
        children: [
          '../demo/basic/',
          '../demo/grid/',
          '../demo/group/',
          '../demo/model/',
          '../demo/button/',
          '../demo/default/',
          '../demo/update-model/',
          '../demo/update-attribute/',
          '../demo/event/',
          '../demo/remote/',
          '../demo/interact/',
          '../demo/component/',
          '../demo/slot-label/',
          '../demo/slot/',
          '../demo/date-picker/',
          '../demo/next-tick/',
          '../demo/hidden/',
          '../demo/upload/',
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}
