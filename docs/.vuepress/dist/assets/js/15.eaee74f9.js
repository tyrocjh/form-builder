(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{471:function(e,t,n){"use strict";n.r(t);n(88);var l={data:function(){var e=this;return{formModel:{name:"",display:""},formData:{list:[{type:"input",label:"名字",model:"name",attrs:{placeholder:"input | focus | blur | keyup.enter"},events:{input:this.handleChange,focus:this.handleFocus,blur:this.handleBlur},nativeEvents:{"keyup.enter":function(){e.handleEnter()}}},{type:"input",label:"事件展示",model:"display",attrs:{readonly:!0}}]}}},methods:{handleChange:function(){this.formModel.display="input: ".concat(this.formModel.name)},handleFocus:function(){this.formModel.display="focus"},handleBlur:function(){this.formModel.display="blur"},handleEnter:function(){this.formModel.display="native event 'keyup.enter'"}}},o=n(47),a=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-box"},[n("form-builder",{attrs:{"form-data":e.formData},model:{value:e.formModel,callback:function(t){e.formModel=t},expression:"formModel"}})],1)}),[],!1,null,null,null);t.default=a.exports}}]);