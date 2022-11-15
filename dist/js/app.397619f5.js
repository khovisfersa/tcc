(function(){"use strict";var t={8608:function(t,e,a){var o=a(144),r=a(9669),s=a.n(r);let i={};const n=s().create(i);n.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),n.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=n,window.axios=n,Object.defineProperties(t.prototype,{axios:{get(){return n}},$axios:{get(){return n}}})},o.ZP.use(Plugin);Plugin;var l=function(){var t=this,e=t._self._c;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex justify-center"},[e("v-btn",{attrs:{color:"secondary",to:"/home"}},[t._v("Inicial")])],1),e("v-spacer"),e("div",{staticClass:"d-flex justify-center"},[t.isLoggedIn?e("v-row"):e("v-row",[e("v-col",[t.getIsLoggedIn?t._e():e("v-btn",{attrs:{rounded:"",justify:"space-bewteen",color:"secondary"},on:{click:t.toLogin}},[t._v("Login")]),t.getIsLoggedIn?e("v-btn",{attrs:{rounded:"",justify:"space-bewteen",color:"secondary"},on:{click:t.toUserHome}},[t._v(t._s(t.getUser))]):t._e()],1),e("v-col",[t.getIsLoggedIn?t._e():e("v-btn",{attrs:{rounded:"",justify:"space-bewteen",color:"secondary"},on:{click:t.toCadastro}},[t._v("Cadastro")]),t.getIsLoggedIn?e("v-btn",{attrs:{rounded:"",justify:"space-bewteen",color:"secondary"},on:{click:t.toUserGroup}},[t._v(" Grupo")]):t._e()],1)],1)],1)],1),e("v-main",[e("router-view")],1)],1)},c=[],u=a(629),d={name:"App",data:()=>({isLoggedIn:!1,username:null,grupo_id:null}),methods:{toLogin(){this.$router.push({name:"login"})},toCadastro(){this.$router.push({name:"cadastro"})},toUserHome(){this.$router.push({path:"/"})},toUserGroup(){this.$router.push({path:"/grupo/"+this.$store.getters.getGrupoId})}},computed:{...(0,u.Se)(["getIsLoggedIn","getUser","getGrupoId"]),loggedIn(){this.isLoggedIn=getIsLoggedIn},getUsername(){this.username=getUsername},GrupoId(){return this.$store.getters.getGrupoId}}},p=d,v=a(1001),m=a(3453),f=a.n(m),g=a(3726),h=a(1473),_=a(3381),x=a(7024),b=a(3102),C=a(7894),y=a(2515),w=(0,v.Z)(p,l,c,!1,null,null,null),V=w.exports;f()(w,{VApp:g.Z,VAppBar:h.Z,VBtn:_.Z,VCol:x.Z,VMain:b.Z,VRow:C.Z,VSpacer:y.Z}),o.ZP.use(u.ZP);var Z=new u.ZP.Store({state:{token:null,user:null,isLoggedIn:!1,isAdmin:!1,isConteudista:!1,user_id:null,grupo_id:null},getters:{getUserToken(t){return t.token},getIsLoggedIn(t,e){return t.isLoggedIn},getUser(t,e){return t.user},getIsAdmin(t,e){return t.isAdmin},getIsConteudista(t,e){return t.isConteudista},getUserId(t,e){return t.user_id},getGrupoId(t,e){return t.grupo_id}},mutations:{setLogin(t){t.isLoggedIn=!0},setToken(t,e){t.token=e,t.isLoggedIn=!0},setUser(t,e){t.user=e},setIsAdmin(t,e){t.isAdmin=e},setIsConteudista(t,e){t.isConteudista=e},setUserId(t,e){t.user_id=e},setGrupoId(t,e){t.grupo_id=e}},actions:{async actionLogin({commit:t,state:e},a,o){}},modules:{}});let k="https://lfstcc.click";async function A(t){let e={headers:{"Content-Type":"multipart/form-data","x-access-token":t}};await s().get(k+"/user_info",e).then((t=>{Z.commit("setToken",t.data.token),Z.commit("setUser",t.data.username),Z.commit("setIsAdmin",t.data.isadmin),Z.commit("setIsConteudista",t.data.isconteudista),Z.commit("setUserId",t.data.user_id),Z.commit("setGrupoId",t.data.grupo_id)})).catch((t=>{console.log(t)}))}async function T(t){let e={header:{"Content-Type":"multipart/form-data","x-access-token":t}};console.log(e),s().get("/user_id",e).then(((t,e)=>e.data.user_id)).catch((t=>{console.log(t)}))}var I=a(8345),j=function(){var t=this,e=t._self._c;return e("div",[e("initial")],1)},E=[],S=function(){var t=this,e=t._self._c;return e("v-container",{staticClass:"d-flex justify-center"},[e("div",{},[e("v-card",{attrs:{elevation:"0"}},[e("v-card-title",{attrs:{color:"text--secondary"}},[t._v("Aplicação de TCC")]),e("div",[e("v-card-text",[e("v-row",[t._v(" Aqui temos uma aplicação web para aprendizagem colaborativa de idiomas.")]),e("v-row",{staticClass:"mt-10"},[t._v(" Você pode procurar por um grupo do idioma que você deseja aprender.")]),e("v-row",{staticClass:"mt-10"},[t._v(" Depois de entrar em um grupo, Você e seu grupo receberão tarefas no idioma a ser aprendido. Essas tarefas lhe farão aprender mais sobre o idioma.")])],1)],1)],1)],1)])},L=[],B={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},P=B,q=a(3816),U=a(5255),$=a(6530),N=(0,v.Z)(P,S,L,!1,null,null,null),R=N.exports;f()(N,{VCard:q.Z,VCardText:U.ZB,VCardTitle:U.EB,VContainer:$.Z,VRow:C.Z});var G={name:"Home",components:{Initial:R}},O=G,D=(0,v.Z)(O,j,E,!1,null,null,null),F=D.exports,M=function(){var t=this,e=t._self._c;return e("v-app",[e("v-content",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-start":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("div",{staticClass:"elevation-0 border-radius-5"},[e("p",{staticClass:"text--secondary font-weight-bold"},[t._v("Login")]),e("div",[e("v-form",[e("v-text-field",{attrs:{"prepend-icon":"mdi-account",name:"login",label:"Login",type:"text"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e("v-text-field",{attrs:{id:"password","prepend-icon":"mdi-lock",name:"password",label:"Password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),e("div",{staticClass:"d-flex justify-center pt-10"},[e("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.login()}}},[t._v("Login")])],1)])])],1)],1)],1)],1)},H=[],Q={name:"Login",props:{source:String},data:()=>({username:"",password:""}),computed:{...(0,u.Se)(["getUserToken","getUser"])},methods:{...(0,u.OI)(["setToken","setUser","setIsAdmin","setIsConteudista"]),async login(){let t={username:this.username,password:this.password};await s().post(this.$api+"/login",t).then((t=>{localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),localStorage.setItem("usuario_id",t.data.usuario_id),localStorage.setItem("grupo_id",t.data.grupo_id),this.setToken(t.data.token),this.setUser(t.data.username),this.setIsAdmin(t.data.isadmin),this.setIsConteudista(t.data.isconteudista),this.$router.push("/")})).catch((t=>{console.log(t),alert("Credenciais inválidas")}))}}},z=Q,W=a(2903),J=a(683),K=a(3240),X=a(9456),Y=a(9007),tt=(0,v.Z)(z,M,H,!1,null,null,null),et=tt.exports;f()(tt,{VApp:g.Z,VBtn:_.Z,VContainer:$.Z,VContent:W.Z,VFlex:J.Z,VForm:K.Z,VLayout:X.Z,VTextField:Y.Z});var at=function(){var t=this,e=t._self._c;return e("v-container",[e("div",[e("h1",{staticClass:"text--secondary"},[t._v("Cadastro")]),e("div",{staticClass:"px-4"},[e("v-card-text",[e("v-form",{ref:"registerForm",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{rules:[t.rules.required],label:"Nome",maxlength:"20",required:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{rules:[t.rules.required],label:"Sobrenome",maxlength:"20",required:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{rules:[t.rules.required],label:"user name",required:""},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password",name:"input-10-1",label:"Password",hint:"Pelo menos 8 caracteres",counter:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{block:"","append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.passwordMatch],type:t.show1?"text":"password",name:"input-10-1",label:"Confirm Password",counter:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.verify,callback:function(e){t.verify=e},expression:"verify"}})],1),e("v-spacer"),e("v-col",{staticClass:"d-flex ml-auto",attrs:{cols:"12",sm:"3",xsm:"12"}},[e("v-btn",{attrs:{"x-large":"",block:"",disabled:!t.valid,color:"success"},on:{click:function(e){t.validate&&t.register(t.firstName,t.lastName,t.email,t.password,t.login)}}},[t._v("Cadastrar")])],1)],1)],1)],1)],1)])])},ot=[],rt={computed:{passwordMatch(){return()=>this.password===this.verify||"Password must match"}},methods:{validate(){this.$refs.loginForm.validate()},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()},async register(t,e,a,o,r){let i={nome:t,sobrenome:e,email:a,username:r,password:o};await s().post(this.$api+"/cadastro",i).then(((t,e)=>{this.firstName="",this.lastName="",this.email="",this.password="",this.verify="",this.$router.push("/")})).catch((t=>{console.log("Deu ruim"),console.log(t)}))}},data:()=>({dialog:!0,tab:0,tabs:[{name:"Login",icon:"mdi-account"},{name:"Register",icon:"mdi-account-outline"}],valid:!0,firstName:"",lastName:"",email:"",password:"",verify:"",loginPassword:"",loginEmail:"",loginEmailRules:[t=>!!t||"Required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],emailRules:[t=>!!t||"Required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],show1:!1,rules:{required:t=>!!t||"Required.",min:t=>t&&t.length>=8||"Min 8 characters"}})},st=rt,it=(0,v.Z)(st,at,ot,!1,null,null,null),nt=it.exports;f()(it,{VBtn:_.Z,VCardText:U.ZB,VCol:x.Z,VContainer:$.Z,VForm:K.Z,VRow:C.Z,VSpacer:y.Z,VTextField:Y.Z});var lt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-row",[e("v-col",{attrs:{cols:4}},[e("v-autocomplete",{attrs:{clearable:"",items:t.idiomas,label:"Idioma"}})],1),e("v-col",{attrs:{cols:4}},[e("v-autocomplete",{attrs:{items:t.niveis,label:"Nível"}})],1)],1),e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},t._l(t.grupos,(function(a){return e("v-col",{key:a.title,attrs:{cols:4}},[e("v-card",{attrs:{elevation:"10"}},[e("v-card-title",{domProps:{textContent:t._s(a.nome)}}),e("v-card-subtitle",{domProps:{textContent:t._s(a.idioma+" - "+a.nivel)}}),e("v-card-text",[e("p",[t._v(" Participantes: "+t._s(a.partic)+"/10 "),e("br"),t._v(" Atividades Resolvidas: "+t._s(a.resolv)+" ")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.goToGroup(a.id)}}},[t._v(" Ver grupo ")])],1)],1)],1)})),1)],1)],1)},ct=[],ut={name:"buscaDeGrupos",data(){return{idioma:null,idiomas:["inglês","japones"],niveis:["A1","A2","B1","B2","C1","C2"],grupos:[{id:1,nome:"grupo 1",idioma:"Inglês",nivel:"A1",partic:5,resolv:10},{id:2,nome:"grupo 2",idioma:"Inglês",nivel:"A2",partic:5,resolv:10},{id:3,nome:"grupo 3",idioma:"Inglês",nivel:"B2",partic:5,resolv:10},{id:4,nome:"grupo 4",idioma:"Inglês",nivel:"C1",partic:5,resolv:10}]}},methods:{async getIdiomas(){},async getGrupos(t){},goToGroup(t){console.log(t),this.$router.go({path:"/grupos/:id",params:{id:t}})}}},dt=ut,pt=a(2689),vt=(0,v.Z)(dt,lt,ct,!1,null,null,null),mt=vt.exports;f()(vt,{VAutocomplete:pt.Z,VBtn:_.Z,VCard:q.Z,VCardActions:U.h7,VCardSubtitle:U.Qq,VCardText:U.ZB,VCardTitle:U.EB,VCol:x.Z,VContainer:$.Z,VRow:C.Z,VSpacer:y.Z});var ft=function(){var t=this,e=t._self._c;return e("v-container",[e("v-row",[e("h1",[t._v(t._s(t.grupo.nome)+" - "+t._s(t.grupo.nivel))])]),e("v-container",[e("h2",[t._v("Tarefas completas")]),e("v-row",[e("v-col",{attrs:{cols:"8"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},t._l(t.feitas,(function(a){return e("v-col",{key:a.titulo,attrs:{cols:4}},[e("v-card",{attrs:{elevation:"10"}},[e("v-card-title",{domProps:{textContent:t._s(a.titulo)}}),e("v-card-text",[e("p",[t._v(" nivel: "+t._s(a.nivel)+" ")]),e("p",[t._v(" nota: "+t._s(a.nota)+" ")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.goToGroup(a.id)}}},[t._v(" Ver resposta ")])],1)],1)],1)})),1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-card",{staticClass:"mx-auto",attrs:{height:"400",width:"256"}},[e("v-navigation-drawer",{attrs:{permanent:""}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-h6"},[t._v(" Tarefa em aberto ")]),e("v-list-item-subtitle",[e("v-btn",{on:{click:t.goToTarefaAtiva}},[t._v(t._s(t.ativa.titulo))])],1)],1)],1),e("v-divider")],1)],1)],1)],1)],1)],1)},gt=[],ht={name:"grupo",data(){return{grupo:{nome:"Senatus Deorum",partic:5,nivel:"C1",tarefas_recebidas:5,tarefas_completas:3},ativa:{titulo:"teste",partes:{abertas:["Domingo","Alberto","Niméia"],feitas:["Asmodeus","Valak"]}},feitas:[{titulo:"Primeira",nivel:"B1",nota:10},{titulo:"Segudna",nivel:"B2",nota:10},{titulo:"Terceira",nivel:"C1",nota:10},{titulo:"Quarta",nivel:"C2",nota:10}],usuarios:[]}},created(){this.getGroupInfo(this.$route.params.id)},methods:{async getGroupInfo(t){await this.axios.get(this.$api+"/get_grupo_by_id/"+t).then((t=>{console.log("TESTEEEEEEEEEEEEE"),console.log(t),this.grupo=t.data.grupo_info,this.feitas=t.data.feitos,this.ativa=t.data.aberto,this.usuarios=t.data.users})).catch((t=>{console.log(t)}))},async getTarefaAtiva(){return 0},goToTarefaAtiva(){this.$router.push({name:"tarefa_ativa"})}}},_t=ht,xt=a(7690),bt=a(1667),Ct=a(1543),yt=a(7657),wt=(0,v.Z)(_t,ft,gt,!1,null,null,null),Vt=wt.exports;f()(wt,{VBtn:_.Z,VCard:q.Z,VCardActions:U.h7,VCardText:U.ZB,VCardTitle:U.EB,VCol:x.Z,VContainer:$.Z,VDivider:xt.Z,VListItem:bt.Z,VListItemContent:Ct.km,VListItemSubtitle:Ct.oZ,VListItemTitle:Ct.V9,VNavigationDrawer:yt.Z,VRow:C.Z,VSpacer:y.Z});var Zt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-card",{staticClass:"mx-auto px-5 py-5"},[e("v-card-title",[t._v(t._s(t.tarefa1.title))]),e("v-card-subtitle",[t._v(t._s(t.tarefa1.nivel))]),e("v-divider"),e("v-card-text",[e("v-container",[t._v(" "+t._s(t.tarefa1.text)+" ")]),e("v-divider"),e("v-container",[e("h3",[t._v(" Partes em aberto: "+t._s(t.mostrar_card_resposta)+" ")]),e("v-row",[e("v-col",{attrs:{cols:"3"}},[e("v-list",t._l(t.total_partes,(function(a){return e("v-list-item",{key:a},[t.resposta1.includes(a)?e("v-list-item-title",[e("v-btn",{attrs:{disabled:""}},[t._v(t._s(a))])],1):e("v-list-item-title",[e("v-btn",{staticClass:"secondary",on:{click:function(e){return t.responder(a)}}},[t._v(t._s(a))])],1)],1)})),1)],1),e("v-col",{attrs:{cols:"9"}},[t.mostrar_card_resposta?e("v-card",[e("v-card-title",[t._v("Responder item "+t._s(t.identificador))]),"texto"===t.tarefa1.tipo?e("v-card-text",[e("v-textarea",{staticClass:"px-5",attrs:{label:"resposta ao item "+t.nova_resposta.identificador,"auto-grow":"",outlined:"",name:"resposta_texto"},model:{value:t.texto,callback:function(e){t.texto=e},expression:"texto"}})],1):t._e(),"audio"===t.tarefa1.tipo?e("v-card-text",[e("v-card-subtitle",[e("a",{attrs:{href:"https://online-voice-recorder.com/pt/",target:"_blank"}},[t._v("Link para um lugar para gravar os audios")])]),e("v-form",[e("v-file-input",{attrs:{accept:".mp3","show-size":"",label:"Selecione o arquivo"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1):t._e(),e("v-card-actions",["texto"==this.tarefa1.tipo?e("v-btn",{staticClass:"accent",on:{click:function(e){return t.enviarResposta(t.nova_resposta.texto)}}},[t._v("Enviar")]):e("v-btn",{staticClass:"accent",on:{click:function(e){return t.onAccept()}}},[t._v("Enviar")])],1)],1):t._e()],1)],1)],1)],1)],1),e("router-view")],1)},kt=[],At={name:"tarefa_ativa",data(){return{faltantes:[],tarefa_id:null,texto:"",nova_resposta:{},data:null,file:null,identificador:null,mostrar_card_resposta:!1,total_partes:[1,2,3,4,5],showDialog:!1,tarefa1:{},resposta1:{}}},created(){},mounted(){this.getTarefaInformation(localStorage.grupo_id),this.getDone(resposta1)},computed:{...(0,u.Se)(["getToken"])},methods:{...(0,u.OI)(["setToken"]),async getTarefaInformation(t){await s().get("/tarefa_ativa/"+t).then((t=>{this.tarefa1=t.data.tarefa_info,console.log(this.tarefa1),this.resposta1=t.data.identificadores})),this.getTarefaBase(this.tarefa1.tarefa_id)},async getTarefaBase(t){localStorage.token;await s().get(this.$api+"/tarefa/"+t).then((t=>{this.tarefa1.titulo=t.data.title,this.tarefa1.nivel=t.data.nivel,this.tarefa1.texto=t.data.text,this.tarefa1.rubrica=t.data.rubrica,this.tarefa1.tipo=t.data.tipo})).catch((t=>{console.log(t)}))},getDone(t){console.log("get done");let e=[1,2,3,4,5];alert(t),t.forEach((t=>{console.log("entrou no loop"),e.splice(e.indexOf(t),1)})),this.faltantes=e},responder(t){this.identificador=t,this.mostrar_card_resposta=!0,this.nova_resposta.identificador=t,"texto"===this.tarefa1.tipo&&(this.nova_resposta.texto="")},async enviarResposta(t){let e={tarefa_id:this.tarefa1.tarefa_id,grupo_id:localStorage.grupo_id,usuario_id:localStorage.usuario_id,identificador:this.identificador,text:this.texto};console.log(e),await s().post(this.$api+"/create_resposta",e).then((t=>{alert("resposta enviada com sucesso")})).catch((t=>{alert("erro! "+t)}))},callback(t){console.log(t)},onResult(t){console.log("AAAAAA"),this.data=t;const e=window.confirm("Deseja eviar o áudio gravado?");e?this.onAccept():this.onDeny()},async onAccept(){console.log("get token: "+localStorage.token);let t=new FormData;t.append("name","audio"),t.append("file",this.file),t.append("filename",this.identificador+"-2-1");T(token);let e={header:{"Content-Type":"multipart/form-data","x-access-token":localStorage.token}};await s().post(this.$api+"/upload_audio",t,e).then((()=>{console.log("deu bom!"),this.file=""})).catch((t=>{console.log(t),console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")}))},onDeny(){this.data=null}}},Tt=At,It=a(2780),jt=a(7970),Et=a(2379),St=(0,v.Z)(Tt,Zt,kt,!1,null,null,null),Lt=St.exports;f()(St,{VBtn:_.Z,VCard:q.Z,VCardActions:U.h7,VCardSubtitle:U.Qq,VCardText:U.ZB,VCardTitle:U.EB,VCol:x.Z,VContainer:$.Z,VDivider:xt.Z,VFileInput:It.Z,VForm:K.Z,VList:jt.Z,VListItem:bt.Z,VListItemTitle:Ct.V9,VRow:C.Z,VTextarea:Et.Z});var Bt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-card",[e("v-card-title",{staticClass:"secondary"},[t._v(t._s(t.username))]),e("v-card-subtitle",[t.getIsAdmin?e("v-chip",{staticClass:"warning ml-3",on:{click:function(e){return t.goToAdmin()}}},[t._v("Admin")]):t._e(),t.getIsConteudista?e("v-chip",{staticClass:"warning ml-3",on:{click:function(e){return t.goToConteudista()}}},[t._v("Conteudista")]):t._e()],1),e("v-card-content",{staticClass:"px-5"},[e("v-row",{staticClass:"mx-5"},[e("v-col",{attrs:{cols:"6"}},[e("v-card",[e("v-card-title",{staticClass:"primary"},[t._v(t._s(t.grupo.nome)+" ("+t._s(t.grupo.idioma)+")")]),e("v-card-text",[e("v-list",[e("v-list-item",[t._v("link do telegram: "),e("a",[t._v(t._s(t.grupo.link))])])],1)],1)],1)],1),e("v-col",{attrs:{cols:"6"}},[e("v-card")],1)],1)],1)],1)],1)},Pt=[],qt={name:"loggedHome",props:{},data:()=>({username:"",grupo:{nome:"Senatus Deorum",idioma:"Latim",link:"t.me/ioudfkjsadfohjsadfbiu..."}}),computed:{...(0,u.Se)(["getUserToken","getUser","getIsConteudista","getIsAdmin"])},mounted(){this.username=this.$store.getters.getUser},methods:{...(0,u.OI)([]),getUsername(){},goToAdmin(){console.log("fuck you")},goToConteudista(){console.log("fuck you too")},async getUserGrupos(){},getGrupoInfo(){}}},Ut=qt,$t=a(2393),Nt=(0,v.Z)(Ut,Bt,Pt,!1,null,null,null),Rt=Nt.exports;f()(Nt,{VCard:q.Z,VCardSubtitle:U.Qq,VCardText:U.ZB,VCardTitle:U.EB,VChip:$t.Z,VCol:x.Z,VContainer:$.Z,VList:jt.Z,VListItem:bt.Z,VRow:C.Z});var Gt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-card",[e("v-card-title",[t._v(" Criar nova tarefa ")]),e("v-card-text",[e("v-form",[e("v-text-field",{attrs:{label:"Título",required:""},model:{value:t.tarefa.titulo,callback:function(e){t.$set(t.tarefa,"titulo",e)},expression:"tarefa.titulo"}}),e("v-text-field",{attrs:{label:"Nível",required:""},model:{value:t.tarefa.nivel,callback:function(e){t.$set(t.tarefa,"nivel",e)},expression:"tarefa.nivel"}}),e("v-select",{attrs:{items:t.dd_options,label:"Tipo de atividade",required:""},model:{value:t.tarefa.tipo,callback:function(e){t.$set(t.tarefa,"tipo",e)},expression:"tarefa.tipo"}}),e("v-textarea",{attrs:{label:"Texto","auto-grow":"",outlined:"",required:""},model:{value:t.tarefa.text,callback:function(e){t.$set(t.tarefa,"text",e)},expression:"tarefa.text"}}),e("v-textarea",{attrs:{label:"Rúbrica","auto-grow":"",outlined:"",required:""},model:{value:t.tarefa.rubrica,callback:function(e){t.$set(t.tarefa,"rubrica",e)},expression:"tarefa.rubrica"}})],1)],1),e("v-card-actions",[e("v-btn",{attrs:{color:"primary",label:"Submit"},on:{click:function(e){return t.submit(t.tarefa)}}},[t._v("Submit")])],1)],1)],1)},Ot=[],Dt={data:()=>({dd_options:["Audio","Text"],tarefa:{titulo:"",nivel:"",tipo:"",text:"",rubrica:""}}),methods:{submit(t){console.log(this.tarefa)}}},Ft=Dt,Mt=a(4437),Ht=(0,v.Z)(Ft,Gt,Ot,!1,null,null,null),Qt=Ht.exports;f()(Ht,{VBtn:_.Z,VCard:q.Z,VCardActions:U.h7,VCardText:U.ZB,VCardTitle:U.EB,VContainer:$.Z,VForm:K.Z,VSelect:Mt.Z,VTextField:Y.Z,VTextarea:Et.Z});var zt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-card",[e("v-card-title",[t._v(t._s(t.tarefa.name))]),e("v-card-text",[t._v(" "+t._s(t.tarefa.text)+" "),e("v-spacer"),t._v(" "+t._s(t.tarefa.rubrica)+" ")],1)],1),e("v-spacer"),e("v-card",{staticClass:"mt-10"},[e("v-card-title",[t._v("Resposta do grupo")]),"texto"==t.tarefa.tipo?e("v-card-text",[t._v(" {{}} ")]):t._e(),"audio"==t.tarefa.tipo?e("v-card-text",[e("v-container",{staticClass:"d-flex flex-column"},[e("span",{staticClass:"ml-10"},[t._v("{{}}")]),e("audio",{attrs:{controls:""}},[e("source",{attrs:{src:"",type:"audio/mpeg"}})])])],1):t._e()],1)],1)},Wt=[],Jt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-card",[e("v-card-title",[t._v(t._s(t.dados.tarefa_nome))]),e("v-card-text")],1)],1)},Kt=[],Xt={props:{dados:{tarefa_nome:"teste",grupo_id:null,tarefa_id:null}},methods:{getAudioByName(){s().get("/audio_by_name/4-2-1").then(((t,e)=>e.data)).catch((t=>{console.log("err: "+t)}))},getRespostaContent(){s().get("")}}},Yt=Xt,te=(0,v.Z)(Yt,Jt,Kt,!1,null,null,null),ee=te.exports;f()(te,{VCard:q.Z,VCardText:U.ZB,VCardTitle:U.EB,VContainer:$.Z});var ae={props:{},components:{tarefaComponent:ee},data(){return{tarefa:{name:"Nome da tarefa",text:"esse é o texto da terefa lalalalalalalalala",rubrica:"é Assim que se faz pra dar nota pra essa tarefa",tipo:"audio"},resposta_texto:[{text:"texto do primeiro objeto",identificador:1,usuario_id:3},{text:"texto do primeiro objeto",identificador:2,usuario_id:3},{text:"texto do primeiro objeto",identificador:3,usuario_id:3},{text:"texto do primeiro objeto",identificador:4,usuario_id:3},{text:"texto do primeiro objeto",identificador:5,usuario_id:3}]}},created:{},mounted:{},computed:{...(0,u.Se)(["getToken"])},methods:{...(0,u.OI)(["setToken"]),getTarefa(t){},getRespostaTexto(){},getAudio(){}}},oe=ae,re=(0,v.Z)(oe,zt,Wt,!1,null,null,null),se=re.exports;f()(re,{VCard:q.Z,VCardText:U.ZB,VCardTitle:U.EB,VContainer:$.Z,VSpacer:y.Z}),o.ZP.use(I.Z);const ie=[{path:"/home",name:"home",meta:{auth:!1},component:F},{path:"/tarefa_completa",name:"tarefa_completa",component:se},{path:"/about",name:"about",meta:{auth:!1},component:function(){return a.e(443).then(a.bind(a,4435))}},{path:"/",name:"l-home",meta:{auth:!0},component:Rt,beforeEnter:(t,e,a)=>{console.log(Z.getters.getUserToken),null!=Z.getters.getUserToken?a():(console.log("teste"),a({name:"home"}))},children:[]},{path:"/conteudista",name:"conteudista",meta:{auth:!1},component:Qt},{path:"/login",name:"login",meta:{auth:!1},beforeEnter:(t,e,a)=>{console.log(Z.getters.getToken),Z.getters.getToken?a({name:"l-home"}):a()},component:et},{path:"/cadastro",name:"cadastro",beforeEnter:(t,e,a)=>{a()},component:nt},{path:"/buscaGrupo",name:"buscaGrupo",component:mt},{path:"/grupo/:id",name:"grupo",component:Vt},{path:"/grupo/:id/tarefa_ativa",name:"tarefa_ativa",component:Lt},{path:"/grupo/:grupo_id/:tarefa_id",name:"tarefa_completa",component:se},{path:"*",name:"escape",component:F}],ne=new I.Z({linkActiveClass:"Active",base:"/",routes:ie});ne.beforeEach((async(t,e,a)=>{if(console.log(Z.getters.getUserToken),null==Z.getters.getUserToken){console.log("vuex user token null");let t=localStorage.token;await A(t),console.log(Z.getters.getUserToken),a()}else a();a()}));var le=ne,ce=a(8986);o.ZP.use(ce.Z);var ue=new ce.Z({theme:{themes:{light:{primary:"#2196f3",secondary:"#4caf50",accent:"#795548",error:"#f44336",warning:"#ff5722",info:"#ff9800",success:"#e91e63"}}}});o.ZP.config.productionTip=!1,o.ZP.prototype.$api="https://lfstcc.click",new o.ZP({router:le,store:Z,vuetify:ue,render:function(t){return t(V)}}).$mount("#app")}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,o,r,s){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],s=t[u][2];for(var n=!0,l=0;l<o.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(n=!1,s<i&&(i=s));if(n){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,o){return a.f[o](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.aadc24e5.js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="tcc:";a.l=function(o,r,s,i){if(t[o])t[o].push(r);else{var n,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+s){n=d;break}}n||(l=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,a.nc&&n.setAttribute("nonce",a.nc),n.setAttribute("data-webpack",e+s),n.src=o),t[o]=[r];var p=function(e,a){n.onerror=n.onload=null,clearTimeout(v);var r=t[o];if(delete t[o],n.parentNode&&n.parentNode.removeChild(n),r&&r.forEach((function(t){return t(a)})),e)return e(a)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=p.bind(null,n.onerror),n.onload=p.bind(null,n.onload),l&&document.head.appendChild(n)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,o){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var s=new Promise((function(a,o){r=t[e]=[a,o]}));o.push(r[2]=s);var i=a.p+a.u(e),n=new Error,l=function(o){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;n.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",n.name="ChunkLoadError",n.type=s,n.request=i,r[1](n)}};a.l(i,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,i=o[0],n=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var u=l(a)}for(e&&e(o);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},o=self["webpackChunktcc"]=self["webpackChunktcc"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(8608)}));o=a.O(o)})();
//# sourceMappingURL=app.397619f5.js.map