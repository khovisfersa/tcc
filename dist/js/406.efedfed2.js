"use strict";(self["webpackChunktcc"]=self["webpackChunktcc"]||[]).push([[406],{8406:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var a=function(){var e=this,t=e._self._c;return t("v-container",[t("div",[t("h1",{staticClass:"text--secondary"},[e._v("Cadastro")]),t("div",{staticClass:"px-4"},[t("v-card-text",[t("v-form",{ref:"registerForm",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t("v-text-field",{attrs:{rules:[e.rules.required],label:"First Name",maxlength:"20",required:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1),t("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[t("v-text-field",{attrs:{rules:[e.rules.required],label:"Last Name",maxlength:"20",required:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show1?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{block:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.passwordMatch],type:e.show1?"text":"password",name:"input-10-1",label:"Confirm Password",counter:""},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.verify,callback:function(t){e.verify=t},expression:"verify"}})],1),t("v-spacer"),t("v-col",{staticClass:"d-flex ml-auto",attrs:{cols:"12",sm:"3",xsm:"12"}},[t("v-btn",{attrs:{"x-large":"",block:"",disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v("Register")])],1)],1)],1)],1)],1)])])},i=[],r={computed:{passwordMatch(){return()=>this.password===this.verify||"Password must match"}},methods:{validate(){this.$refs.loginForm.validate()},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()},register(){}},data:()=>({dialog:!0,tab:0,tabs:[{name:"Login",icon:"mdi-account"},{name:"Register",icon:"mdi-account-outline"}],valid:!0,firstName:"",lastName:"",email:"",password:"",verify:"",loginPassword:"",loginEmail:"",loginEmailRules:[e=>!!e||"Required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],emailRules:[e=>!!e||"Required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],show1:!1,rules:{required:e=>!!e||"Required.",min:e=>e&&e.length>=8||"Min 8 characters"}})},l=r,o=s(1001),n=s(3453),d=s.n(n),u=s(3381),c=s(5255),h=s(7024),m=s(6530),v=s(3240),f=s(7894),p=s(2515),w=s(9007),g=(0,o.Z)(l,a,i,!1,null,null,null),b=g.exports;d()(g,{VBtn:u.Z,VCardText:c.ZB,VCol:h.Z,VContainer:m.Z,VForm:v.Z,VRow:f.Z,VSpacer:p.Z,VTextField:w.Z})},3240:function(e,t,s){var a=s(5530),i=s(6141),r=s(950);t["Z"]=(0,a.Z)(i.Z,(0,r.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",(a=>{a&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))})):s.valid=t(e),s},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const s=this.watchers.find((e=>e._uid===t._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})}}]);
//# sourceMappingURL=406.efedfed2.js.map