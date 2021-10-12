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
          type: 'group',
          items: [{
            type: 'input',
            model: 'name',
            label: '名字'
          }]
        }, {
          type: 'group',
          items: [{
            type: 'input',
            label: '地址',
            model: 'province',
            attrs: {
              placeholder: '省份'
            }
          }, {
            type: 'input',
            model: 'city',
            attrs: {
              placeholder: '城市'
            }
          }, {
            type: 'input',
            model: 'region',
            attrs: {
              placeholder: '区'
            }
          }]
        }, {
          type: 'group',
          items: [{
            type: 'select',
            model: 'gender',
            label: '性别',
            options: [{
              value: 'male',
              label: '男'
            }, {
              value: 'female',
              label: '女'
            }]
          }]
        }, {
          type: 'group',
          items: [{
            type: 'input',
            model: 'age',
            label: '年龄'
          }]
        }]
      }
    }
  }
}
</script>
