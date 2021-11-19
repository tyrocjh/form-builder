## 介绍

基于element-ui实现，通过配置生成的表单，支持多种场景

## 快速使用

#### npm方式

```sh
# 请先确保正确安装并使用了 element-ui
npm install --save tyro-form-builder
```

```html
<template>
  <form-builder :form-data="formData" />
</template>

<script>
  import FormBuilder from 'tyro-form-builder'

  export default {
    components: {
      FormBuilder,
    },
    data() {
      return {
        formData: {
          list: [{
            type: 'input',
            model: 'name',
            label: '名字'
          }]
        }
      }
    }
  }
</script>
```

#### script标签方式

```html
<!-- 请先确保正确安装并使用了 element-ui -->
<script src="/dist/FormBuilder.umd.js"></script>
```

```html
<template>
  <form-builder :form-data="formData" />
</template>

<script>
  export default {
    components: {
      FormBuilder: window.FormBuilder.default
    },
    data() {
      return {
        formData: {
          list: [{
            type: 'input',
            model: 'name',
            label: '名字'
          }]
        }
      }
    }
  }
</script>
```

## 开发

#### 开发组件

```sh
# 开发
npm run dev

# 打包
npm run build

# 发布npm
npm run build
npm login
npm publish
```

#### 开发文档

```sh
# 开发
npm run docs:dev

# 打包
npm run docs:build
```
