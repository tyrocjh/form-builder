(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{459:function(e,t,a){"use strict";a.r(t);var o={data:function(){return{loading:!1,formModel:{loacalData:"",remoteData1:"",remoteData2:"",remoteData3:"",remoteData4:""},formData:{list:[{type:"select",label:"本地数据",model:"loacalData",options:[{value:"local1",label:"本地1"},{value:"local2",label:"本地2"}]},{type:"select",label:"远程数据",model:"remoteData1",remoteOptionsName:"remoteList1",remoteOptions:[]},{type:"select",label:"远程数据（props别名）",model:"remoteData2",props:{value:"newValue",label:"newLabel"},remoteOptionsName:"remoteList2",remoteOptions:[]},{type:"select",label:"远程数据（搜索时加载）",model:"remoteData3",attrs:{loading:!1,filterable:!0,remote:!0,remoteMethod:this.getRemoteData3,placeholder:"请输入搜索条件"},props:{value:"newNewValue",label:"newNewLabel"},remoteOptionsName:"remoteList3",remoteOptions:[]},{type:"select",label:"远程数据（构造label）",model:"remoteData4",props:{value:"employeeId",label:function(e){return e.realName+(e.employeeId?"（"+e.employeeId+")":"")}},remoteOptionsName:"remoteList4",remoteOptions:[]}]},remoteData:{remoteList1:[],remoteList2:[],remoteList3:[],remoteList4:[]}}},watch:{loading:function(e){this.formData.list[3].attrs.loading=e}},created:function(){this.getRemoteData1(),this.getRemoteData2(),this.getRemoteData4()},methods:{getRemoteData1:function(){var e=this;setTimeout((function(){e.remoteData.remoteList1=[{value:"remote1",label:"远程1"},{value:"remote2",label:"远程2"}]}),1e3)},getRemoteData2:function(){var e=this;setTimeout((function(){e.remoteData.remoteList2=[{newValue:"remote3",newLabel:"远程3"},{newValue:"remote4",newLabel:"远程4"}]}),1e3)},getRemoteData3:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1,e.remoteData.remoteList3=[{newNewValue:"remote3",newNewLabel:"远程5"},{newNewValue:"remote4",newNewLabel:"远程6"}]}),1e3)},getRemoteData4:function(){var e=this;setTimeout((function(){e.remoteData.remoteList4=[{employeeId:"000000",realName:"Tyro"},{employeeId:"111111",realName:"Nash"}]}),1e3)}}},l=a(47),m=Object(l.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-box"},[a("form-builder",{attrs:{"form-data":e.formData,"remote-data":e.remoteData},model:{value:e.formModel,callback:function(t){e.formModel=t},expression:"formModel"}})],1)}),[],!1,null,null,null);t.default=m.exports}}]);