<template>
  <div class="demo-box">
    <form-builder v-model="formModel" :form-data="formData" :remote-data="remoteData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        data1: '',
        data2: '',
        data3: ''
      },
      formData: {
        list: [{
          type: 'select',
          label: '联动数据1',
          model: 'data1',
          props: {
            value: 'customerValue1',
            label: 'customerLabel1'
          },
          remoteOptionsName: 'data1List',
          remoteOptions: [],
          events: {
            change: this.changeData1
          }
        }, {
          type: 'select',
          label: '联动数据2',
          model: 'data2',
          attrs: {
            disabled: false,
          },
          props: {
            value: 'customerValue2',
            label: 'customerLabel2'
          },
          remoteOptionsName: 'data2List',
          remoteOptions: [],
          events: {
            change: this.changeData2
          }
        }, {
          type: 'select',
          label: '联动数据3',
          model: 'data3',
          attrs: {
            disabled: false,
          },
          props: {
            value: 'customerValue3',
            label: 'customerLabel3'
          },
          remoteOptionsName: 'data3List',
          remoteOptions: []
        }]
      },
      remoteData: {
        data1List: [],
        data2List: [],
        data3List: []
      }
    }
  },
  watch: {
    'formModel.data1': {
      handler(val) {
        this.formData.list[1].attrs.disabled = !val
      },
      immediate: true
    },
    'formModel.data2': {
      handler(val) {
        this.formData.list[2].attrs.disabled = !val
      },
      immediate: true
    }
  },
  created() {
    this.getData1List()
  },
  methods: {
    getData1List() {
      setTimeout(() => {
        for (let i=1; i<=3; i++) {
          this.remoteData.data1List.push({
            customerValue1: i,
            customerLabel1: `数据${i}`
          })
        }
      }, 200);
    },
    getData2List() {
      setTimeout(() => {
        for (let i=1; i<=3; i++) {
          this.remoteData.data2List.push({
            customerValue2: `${this.formModel.data1}-${i}`,
            customerLabel2: `数据${this.formModel.data1}-${i}`
          })
        }
      }, 200);
    },
    getData3List() {
      setTimeout(() => {
        for (let i=1; i<=3; i++) {
          this.remoteData.data3List.push({
            customerValue3: `${this.formModel.data2}-${i}`,
            customerLabel3: `数据${this.formModel.data2}-${i}`
          })
        }
      }, 200);
    },
    changeData1() {
      this.formModel.data2 = ''
      this.formModel.data3 = ''
      this.remoteData.data2List = []
      this.remoteData.data3List = []
      this.getData2List()
    },
    changeData2() {
      this.formModel.data3 = ''
      this.remoteData.data3List = []
      this.getData3List()
    }
  }
}
</script>
