(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{476:function(e,t,l){"use strict";l.r(t);var a={data:function(){return{formData:{config:{labelWidth:"50px",rules:{name:[{required:!0,message:"请填写名字"}],area:[{required:!0,message:"请选择区域"}],description:[{required:!0,message:"请填写描述信息",trigger:"blur"},{max:20,message:"描述不能超过20个字",trigger:"blur"}]}},list:[{type:"input",model:"name",label:"名字",attrs:{placeholder:"请填写名字",clearable:!0}},{type:"select",model:"area",label:"区域",options:[{value:"AREA1",label:"区域一"},{value:"AREA2",label:"区域二"}]},{type:"date-picker",model:"date",label:"日期",attrs:{type:"date",placeholder:"请选择日期"}},{type:"checkbox-group",model:"multi",label:"多选",options:[{label:"多选A"},{label:"多选B"},{label:"多选C"}]},{type:"radio-group",model:"single",label:"单选",options:[{value:"A",label:"单选A"},{value:"B",label:"单选B"}]},{type:"switch",model:"switch",label:"开关",attrs:{activeText:"开",inactiveText:"关"},slot:{suffix:(0,this.$createElement)("span",{style:"margin-left: 10px; font-size: 12px; color: #999;"},["注意：我是提示信息~"])}},{type:"input",label:"描述",model:"description",attrs:{type:"textarea",rows:3}}]}}},methods:{handleSubmit:function(){var e=this;this.$refs.formBuilder.getModel().then((function(t){e.$message.success("提交成功，打开DevTools查看model信息"),console.log("model: ",t)})).catch((function(){}))},handleReset:function(){this.$refs.formBuilder.resetFields()}}},s=l(47),i=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"demo-box"},[t("form-builder",{ref:"formBuilder",attrs:{"form-data":this.formData}},[t("template",{slot:"actions"},[t("el-form-item",[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:this.handleSubmit}},[this._v("提交")]),this._v(" "),t("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:this.handleReset}},[this._v("重置")])],1)],1)],2)],1)}),[],!1,null,null,null);t.default=i.exports}}]);