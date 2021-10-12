<template>
  <div class="demo-box">
    <form-builder v-model="formModel" :form-data="formData" :remote-data="remoteData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      formModel: {
        loacalData: '',
        remoteData1: '',
        remoteData2: '',
        remoteData3: '',
        remoteData4: ''
      },
      formData: {
        list: [{
          type: 'select',
          label: '本地数据',
          model: 'loacalData',
          options: [{
            value: 'local1',
            label: '本地1'
          }, {
            value: 'local2',
            label: '本地2'
          }]
        }, {
          type: 'select',
          label: '远程数据',
          model: 'remoteData1',
          remoteOptionsName: 'remoteList1',
          remoteOptions: [],
        }, {
          type: 'select',
          label: '远程数据（props别名）',
          model: 'remoteData2',
          props: {
            value: 'newValue',
            label: 'newLabel'
          },
          remoteOptionsName: 'remoteList2',
          remoteOptions: [],
        }, {
          type: 'select',
          label: '远程数据（搜索时加载）',
          model: 'remoteData3',
          attrs: {
            loading: false,
            filterable: true,
            remote: true,
            remoteMethod: this.getRemoteData3,
            placeholder: '请输入搜索条件'
          },
          props: {
            value: 'newNewValue',
            label: 'newNewLabel'
          },
          remoteOptionsName: 'remoteList3',
          remoteOptions: [],
        }, {
          type: 'select',
          label: '远程数据（构造label）',
          model: 'remoteData4',
          props: {
            value: 'employeeId',
            label: (item) => {
              return item.realName + (item.employeeId ? ('（' + item.employeeId + ')') : '')
            }
          },
          remoteOptionsName: 'remoteList4',
          remoteOptions: [],
        }]
      },
      remoteData: {
        remoteList1: [],
        remoteList2: [],
        remoteList3: [],
        remoteList4: []
      }
    }
  },
  watch: {
    loading(val) {
      this.formData.list[3].attrs['loading'] = val
    }
  },
  created() {
    this.getRemoteData1()
    this.getRemoteData2()
    this.getRemoteData4()
  },
  methods: {
    getRemoteData1() {
      setTimeout(() => {
        this.remoteData.remoteList1 = [{
          value: 'remote1',
          label: '远程1'
        }, {
          value: 'remote2',
          label: '远程2'
        }]
      }, 1000);
    },
    getRemoteData2() {
      setTimeout(() => {
        this.remoteData.remoteList2 = [{
          newValue: 'remote3',
          newLabel: '远程3'
        }, {
          newValue: 'remote4',
          newLabel: '远程4'
        }]
      }, 1000);
    },
    getRemoteData3() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.remoteData.remoteList3 = [{
          newNewValue: 'remote3',
          newNewLabel: '远程5'
        }, {
          newNewValue: 'remote4',
          newNewLabel: '远程6'
        }]
      }, 1000);
    },
    getRemoteData4() {
      setTimeout(() => {
        this.remoteData.remoteList4 = [{
          employeeId: '000000',
          realName: 'Tyro'
        }, {
          employeeId: '111111',
          realName: 'Nash'
        }]
      }, 1000);
    }
  }
}
</script>
