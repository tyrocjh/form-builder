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
          labelWidth: '80px'
        },
        list: [{
          type: 'grid',
          attrs: {
            gutter: 40
          },
          columns: [{
            attrs: {
              lg: 12,
              sm: 12
            },
            list: [{
              type: 'input',
              label: '名字',
              model: 'name'
            }]
          }, {
            attrs: {
              lg: 12,
              sm: 12
            },
            list: [{
              type: 'input',
              label: '年龄',
              model: 'age'
            }]
          }, {
            attrs: {
              lg: 12,
              sm: 12
            },
            list: [{
              type: 'input',
              label: '性别',
              model: 'gender'
            }]
          }, {
            attrs: {
              lg: 12,
              sm: 12
            },
            list: [{
              type: 'select',
              label: '状态',
              model: 'status',
              options: [{
                value: 1,
                label: '启用'
              }, {
                value: 0,
                label: '停用'
              }],
              styles: {
                width: '100%'
              }
            }]
          }]
        }]
      }
    }
  }
}
</script>
