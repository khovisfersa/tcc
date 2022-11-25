(function(){"use strict";var t={8006:function(t,e,a){var o=a(144),r=a(9669),s=a.n(r);let i={};const n=s().create(i);n.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),n.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=n,window.axios=n,Object.defineProperties(t.prototype,{axios:{get(){return n}},$axios:{get(){return n}}})},o.ZP.use(Plugin);Plugin;var l=function(){var t=this,e=t._self._c;return e("v-app",{staticStyle:{"background-color":"#D8CEE0"}},[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex justify-center"},[e("v-btn",{attrs:{color:"secondary",to:"/home"}},[t._v("Home")])],1),e("v-spacer"),e("h1",[t._v("Panglottai")]),e("v-spacer"),e("div",{staticClass:"d-flex justify-center"},[t.isLoggedIn?e("v-row"):e("v-row",[e("v-col",[t.getIsLoggedIn?t._e():e("v-btn",{attrs:{rounded:"",justify:"space-bewteen",color:"secondary"},on:{click:t.toLogin}},[t._v("Login")]),t.getIsLoggedIn?e("v-btn",{attrs:{rounded:"",justify:"space-bewteen",elevation:"0",color:"transparent"}},[t._v(t._s(t.getUser))]):t._e()],1),e("v-col",[t.getIsLoggedIn?t._e():e("v-btn",{attrs:{rounded:"",justify:"space-bewteen",color:"secondary"},on:{click:t.toCadastro}},[t._v("Cadastro")]),t.getIsLoggedIn?e("v-btn",{attrs:{rounded:"",justify:"space-bewteen",color:"secondary"},on:{click:t.toUserGroup}},[t._v(" Grupo")]):t._e()],1)],1)],1)],1),e("v-main",{attrs:{styles:{background:t.$vuetify.theme.themes.light.background}}},[e("router-view")],1)],1)},c=[],d=a(629),u=a(8986);o.ZP.use(u.Z);var p=new u.Z({theme:{themes:{light:{primary:"#2196f3",secondary:"#9351e0",accent:"#F76D65",error:"#E0AA51",warning:"#EAFC5B",info:"#ff9800",success:"#e91e63"}}}}),v={name:"App",data:()=>({isLoggedIn:!1,username:null,grupo_id:null}),methods:{toLogin(){this.$router.push({name:"login"})},toCadastro(){this.$router.push({name:"cadastro"})},toUserHome(){this.$router.push({path:"/"})},toUserGroup(){0==this.$store.getters.getGrupoId||null==this.$store.getters.getGrupoId?this.$router.push({path:"/semgrupo"}):this.$router.push({path:"/grupo/"+this.$store.getters.getGrupoId})}},computed:{...(0,d.Se)(["getIsLoggedIn","getUser","getGrupoId"]),loggedIn(){this.isLoggedIn=getIsLoggedIn},getUsername(){this.username=getUsername},GrupoId(){return this.$store.getters.getGrupoId}}},m=v,f=a(1001),g=a(3453),h=a.n(g),_=a(3726),x=a(1473),b=a(3381),C=a(7024),y=a(3102),w=a(7894),V=a(2515),k=(0,f.Z)(m,l,c,!1,null,null,null),Z=k.exports;h()(k,{VApp:_.Z,VAppBar:x.Z,VBtn:b.Z,VCol:C.Z,VMain:y.Z,VRow:w.Z,VSpacer:V.Z}),o.ZP.use(d.ZP);var A=new d.ZP.Store({state:{token:null,user:null,isLoggedIn:!1,isAdmin:!1,isConteudista:!1,user_id:null,grupo_id:null},getters:{getUserToken(t){return t.token},getIsLoggedIn(t,e){return t.isLoggedIn},getUser(t,e){return t.user},getIsAdmin(t,e){return t.isAdmin},getIsConteudista(t,e){return t.isConteudista},getUserId(t,e){return t.user_id},getGrupoId(t,e){return t.grupo_id}},mutations:{setLogin(t,e){t.isLoggedIn=e,e||(t.token=null,t.isAdmin=!1,t.isConteudista=!1,t.user_id=null,t.grupo_id=0)},setToken(t,e){t.token=e,t.isLoggedIn=!0},setUser(t,e){t.user=e},setIsAdmin(t,e){t.isAdmin=e},setIsConteudista(t,e){t.isConteudista=e},setUserId(t,e){t.user_id=e},setGrupoId(t,e){t.grupo_id=e}},actions:{async actionLogin({commit:t,state:e},a,o){}},modules:{}});let I="https://lfstcc.click";async function T(t){let e={headers:{"Content-Type":"multipart/form-data","x-access-token":t}};return await s().get(I+"/user_info",e)}var $=a(8345),S=function(){var t=this,e=t._self._c;return e("div",[e("initial")],1)},L=[],E=function(){var t=this,e=t._self._c;return e("v-container",{staticClass:"d-flex justify-center"},[e("v-container",[t.getIsLoggedIn?e("v-container",{attrs:{fluid:""}},[e("h1",{attrs:{color:"secondary"}},[t._v("Aqui estão as tarefas que você poderá avaliar")]),e("v-row",{staticClass:"justify-start",attrs:{dense:""}},t._l(t.tarefas,(function(a){return e("v-col",{key:a.title,attrs:{cols:6}},[e("v-card",{attrs:{elevation:"10",width:"300"}},[e("v-card-title",{domProps:{textContent:t._s(a.nome)}}),e("v-card-subtitle",[e("p",[t._v("Atividade nivel "+t._s(a.nivel)+" ")]),e("p",[t._v("Idioma "+t._s(a.idioma))])]),e("v-card-text",[e("v-rating",{attrs:{color:"yellow darken-3","background-color":"grey darken-1","half-increments":"",hover:"",readonly:"",size:"25"},model:{value:a.nota,callback:function(e){t.$set(a,"nota",e)},expression:"card.nota"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.goToTarefa(a.grupo_id,a.tarefa_id)}}},[t._v(" Avaliar tarefa ")])],1)],1)],1)})),1)],1):e("v-card",{attrs:{elevation:"0"}},[e("v-card-title",{attrs:{color:"text--secondary"}},[t._v("Aplicação de TCC")]),e("div",[e("v-card-text",[e("v-row",[t._v(" Aqui temos uma aplicação web para aprendizagem colaborativa de idiomas.")]),e("v-row",{staticClass:"mt-10"},[t._v(" Você pode procurar por um grupo do idioma que você deseja aprender.")]),e("v-row",{staticClass:"mt-10"},[t._v(" Depois de entrar em um grupo, Você e seu grupo receberão tarefas no idioma a ser aprendido. Essas tarefas lhe farão aprender mais sobre o idioma.")])],1)],1)],1)],1)],1)},G=[],B={name:"HelloWorld",data:()=>({tarefas:[]}),computed:{...(0,d.Se)(["getIsLoggedIn","getUserId"])},async created(){await this.getTarefas()},methods:{async getTarefas(){await axios.post(this.$api+"/tarefas_avaliaveis",{usuario_id:this.getUserId}).then((t=>{this.tarefas=t.data,console.log(this.tarefas)})).catch((t=>{console.log(t)}))},goToTarefa(t,e){let a=t+"/"+e;this.$router.push({path:"/tarefa/"+a})}}},j=B,P=a(3816),q=a(5255),U=a(6530),R=a(2111),N=(0,f.Z)(j,E,G,!1,null,null,null),O=N.exports;h()(N,{VBtn:b.Z,VCard:P.Z,VCardActions:q.h7,VCardSubtitle:q.Qq,VCardText:q.ZB,VCardTitle:q.EB,VCol:C.Z,VContainer:U.Z,VRating:R.Z,VRow:w.Z,VSpacer:V.Z});var F={name:"Home",components:{Initial:O}},M=F,D=(0,f.Z)(M,S,L,!1,null,null,null),z=D.exports,H=function(){var t=this,e=t._self._c;return e("v-app",[e("v-content",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-start":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("div",{staticClass:"elevation-0 border-radius-5"},[e("p",{staticClass:"text--secondary font-weight-bold"},[t._v("Login")]),e("div",[e("v-form",[e("v-text-field",{attrs:{"prepend-icon":"mdi-account",name:"login",label:"Login",type:"text"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),e("v-text-field",{attrs:{id:"password","prepend-icon":"mdi-lock",name:"password",label:"Password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),e("div",{staticClass:"d-flex justify-center pt-10"},[e("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.login()}}},[t._v("Login")])],1)])])],1)],1)],1)],1)},Q=[],W={name:"Login",props:{source:String},data:()=>({username:"",password:""}),computed:{...(0,d.Se)(["getUserToken","getUser"])},methods:{...(0,d.OI)(["setToken","setUser","setIsAdmin","setIsConteudista","setUserId","setGrupoId"]),async login(){let t={username:this.username,password:this.password};await s().post(this.$api+"/login",t).then((t=>{localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),localStorage.setItem("usuario_id",t.data.usuario_id),localStorage.setItem("grupo_id",t.data.grupo_id),this.setToken(t.data.token),this.setUser(t.data.username),this.setIsAdmin(t.data.isadmin),this.setIsConteudista(t.data.isconteudista),this.setUserId(t.data.usuario_id),this.setGrupoId(t.data.grupo_id),this.$router.push("/")})).catch((t=>{console.log(t),alert("Credenciais inválidas")}))}}},Y=W,J=a(2903),K=a(683),X=a(3240),tt=a(9456),et=a(9007),at=(0,f.Z)(Y,H,Q,!1,null,null,null),ot=at.exports;h()(at,{VApp:_.Z,VBtn:b.Z,VContainer:U.Z,VContent:J.Z,VFlex:K.Z,VForm:X.Z,VLayout:tt.Z,VTextField:et.Z});var rt=function(){var t=this,e=t._self._c;return e("v-container",[e("div",[e("h1",{staticClass:"text--secondary"},[t._v("Cadastro")]),e("div",{staticClass:"px-4"},[e("v-card-text",[e("v-form",{ref:"registerForm",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{rules:[t.rules.required],label:"Nome",maxlength:"20",required:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e("v-text-field",{attrs:{rules:[t.rules.required],label:"Sobrenome",maxlength:"20",required:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{rules:[t.rules.required],label:"user name",required:""},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.show1?"text":"password",name:"input-10-1",label:"Password",hint:"Pelo menos 8 caracteres",counter:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{block:"","append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.passwordMatch],type:t.show1?"text":"password",name:"input-10-1",label:"Confirm Password",counter:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.verify,callback:function(e){t.verify=e},expression:"verify"}})],1),e("v-spacer"),e("v-col",{staticClass:"d-flex ml-auto",attrs:{cols:"12",sm:"3",xsm:"12"}},[e("v-btn",{attrs:{"x-large":"",block:"",disabled:!t.valid,color:"success"},on:{click:function(e){t.validate&&t.register(t.firstName,t.lastName,t.email,t.password,t.login)}}},[t._v("Cadastrar")])],1)],1)],1)],1)],1)])])},st=[],it={computed:{passwordMatch(){return()=>this.password===this.verify||"Password must match"}},methods:{validate(){this.$refs.loginForm.validate()},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()},async register(t,e,a,o,r){let i={nome:t,sobrenome:e,email:a,username:r,password:o};await s().post(this.$api+"/cadastro",i).then(((t,e)=>{this.firstName="",this.lastName="",this.email="",this.password="",this.verify="",this.$router.push("/")})).catch((t=>{console.log("Deu ruim"),console.log(t)}))}},data:()=>({dialog:!0,tab:0,tabs:[{name:"Login",icon:"mdi-account"},{name:"Register",icon:"mdi-account-outline"}],valid:!0,firstName:"",lastName:"",email:"",password:"",verify:"",loginPassword:"",loginEmail:"",loginEmailRules:[t=>!!t||"Required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],emailRules:[t=>!!t||"Required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],show1:!1,rules:{required:t=>!!t||"Required.",min:t=>t&&t.length>=8||"Min 8 characters"}})},nt=it,lt=(0,f.Z)(nt,rt,st,!1,null,null,null),ct=lt.exports;h()(lt,{VBtn:b.Z,VCardText:q.ZB,VCol:C.Z,VContainer:U.Z,VForm:X.Z,VRow:w.Z,VSpacer:V.Z,VTextField:et.Z});var dt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-row",[e("v-col",{attrs:{cols:4}},[e("v-autocomplete",{attrs:{clearable:"",items:t.idiomas,label:"Idioma"}})],1),e("v-col",{attrs:{cols:4}},[e("v-autocomplete",{attrs:{items:t.niveis,label:"Nível"}})],1)],1),e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},t._l(t.grupos,(function(a){return e("v-col",{key:a.title,attrs:{cols:4}},[e("v-card",{attrs:{elevation:"10"}},[e("v-card-title",{domProps:{textContent:t._s(a.nome)}}),e("v-card-subtitle",{domProps:{textContent:t._s(a.idioma+" - "+a.nivel)}}),e("v-card-text",[e("p",[t._v(" Participantes: "+t._s(a.partic)+"/10 "),e("br"),t._v(" Atividades Resolvidas: "+t._s(a.resolv)+" ")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.goToGroup(a.id)}}},[t._v(" Ver grupo ")])],1)],1)],1)})),1)],1)],1)},ut=[],pt={name:"buscaDeGrupos",data(){return{idioma:null,idiomas:["inglês","japones"],niveis:["A1","A2","B1","B2","C1","C2"],grupos:[{id:1,nome:"grupo 1",idioma:"Inglês",nivel:"A1",partic:5,resolv:10},{id:2,nome:"grupo 2",idioma:"Inglês",nivel:"A2",partic:5,resolv:10},{id:3,nome:"grupo 3",idioma:"Inglês",nivel:"B2",partic:5,resolv:10},{id:4,nome:"grupo 4",idioma:"Inglês",nivel:"C1",partic:5,resolv:10}]}},methods:{async getIdiomas(){},async getGrupos(t){},goToGroup(t){console.log(t),this.$router.go({path:"/grupos/:id",params:{id:t}})}}},vt=pt,mt=a(2689),ft=(0,f.Z)(vt,dt,ut,!1,null,null,null),gt=ft.exports;h()(ft,{VAutocomplete:mt.Z,VBtn:b.Z,VCard:P.Z,VCardActions:q.h7,VCardSubtitle:q.Qq,VCardText:q.ZB,VCardTitle:q.EB,VCol:C.Z,VContainer:U.Z,VRow:w.Z,VSpacer:V.Z});var ht=function(){var t=this,e=t._self._c;return e("v-container",[e("v-row",{staticClass:"d-flex flex-row"},[e("v-col",[e("h1",[t._v("Grupo: "+t._s(t.grupo.nome)+" ")])]),e("v-col",{staticClass:"d-flex flex-column"},[e("span",[t._v("Nivel: "+t._s(t.grupo.nivel))]),e("span",[t._v("Telegram: "),e("a",[t._v("t.me/iuykjas9712w3n")])])])],1),e("v-container",[e("h3",[t._v("Tarefas completas")]),e("v-row",[e("v-col",{attrs:{cols:"8"}},[e("v-container",{attrs:{fluid:""}},[t.isFeitas()?e("v-row",{attrs:{dense:""}},t._l(t.feitas,(function(a){return e("v-col",{key:a.title,attrs:{cols:4}},[e("v-card",{attrs:{elevation:"10"}},[e("v-card-title",{domProps:{textContent:t._s(a.title)}}),e("v-card-text",[e("p",[t._v(" nivel: "+t._s(a.nivel)+" ")]),e("p",[t._v(" nota: "+t._s(a.nota)+"/5 ")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.goToTarefa(t.$route.params.id,a.tarefa_id)}}},[t._v(" Ver resposta ")])],1)],1)],1)})),1):e("v-container",[t._v(" "+t._s(t.mensagem)+" ")])],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-card",{staticClass:"mx-auto teste",attrs:{width:"256",color:"info"}},[e("v-navigation-drawer",{attrs:{permanent:""}},[e("v-list-item",[e("v-list-item-content",[t.isAtiva()?e("v-list-item-title",{staticClass:"text-h6"},[t._v(" Tarefa em aberto ")]):e("v-list-item-title",{staticClass:"text-h6"},[t._v(" Nenhuma tarefa aberta ")]),t.isAtiva()?e("v-list-item-subtitle",{staticClass:"d-flex flex-column"},[e("span",[t._v(t._s(t.ativa.title))]),e("v-btn",{attrs:{color:"secondary"},on:{click:t.goToTarefaAtiva}},[t._v("visitar")])],1):e("v-list-item-subtitle",{staticClass:"d-flex flex-column"},[e("v-btn",{staticClass:"secondary",attrs:{color:"secondary"},on:{click:t.goToTarefaAtiva}},[t._v("Nova Atividade")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},_t=[],xt={name:"grupo",watcher:{grupo:{handler(t){}}},data(){return{mensagem:"Ah, parece que seu grupo ainda não completou nenhuma tarefa.",grupo:{nome:"teste"},ativa:{},feitas:[],usuarios:[]}},created(){this.getGroupInfo(this.$route.params.id)},mounted(){this.getGroupInfo(this.$route.params.id)},computed:{},methods:{async getGroupInfo(t){await this.axios.get(this.$api+"/get_grupo_by_id/"+t).then((t=>{this.grupo=t.data.grupo_info,this.feitas=t.data.feitos,this.ativa=t.data.aberto,this.usuarios=t.data.users})).catch((t=>{console.log("Erro-chan. Yamete onegai shimasu"),console.log(t)}))},async getTarefaAtiva(){return 0},goToTarefaAtiva(){this.$router.push({name:"tarefa_ativa"})},isAtiva(){return!!this.ativa},isFeitas(){return!!this.feitas},goToTarefa(t,e){console.log("grupo: "+t),console.log("tarefa: "+e),this.$router.push({path:"/tarefa/"+t+"/"+e})}}},bt=xt,Ct=a(1667),yt=a(1543),wt=a(7657),Vt=(0,f.Z)(bt,ht,_t,!1,null,null,null),kt=Vt.exports;h()(Vt,{VBtn:b.Z,VCard:P.Z,VCardActions:q.h7,VCardText:q.ZB,VCardTitle:q.EB,VCol:C.Z,VContainer:U.Z,VListItem:Ct.Z,VListItemContent:yt.km,VListItemSubtitle:yt.oZ,VListItemTitle:yt.V9,VNavigationDrawer:wt.Z,VRow:w.Z,VSpacer:V.Z});var Zt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-card",{staticClass:"mx-auto px-5 py-5"},[e("v-card-title",[t._v(t._s(t.tarefa1.title))]),e("v-card-subtitle",[t._v(t._s(t.tarefa1.nivel))]),e("v-divider"),e("v-card-text",[e("v-container",[t._v(" "+t._s(t.tarefa1.text)+" ")]),e("v-divider"),e("v-container",[e("h3",[t._v(" Partes em aberto: "+t._s(t.mostrar_card_resposta)+" ")]),e("v-row",[e("v-col",{attrs:{cols:"3"}},[e("v-list",t._l(t.total_partes,(function(a){return e("v-list-item",{key:a},[t.resposta1.includes(a)?e("v-list-item-title",[e("v-btn",{attrs:{disabled:""}},[t._v(t._s(a))])],1):e("v-list-item-title",[e("v-btn",{staticClass:"secondary",on:{click:function(e){return t.responder(a)}}},[t._v(t._s(a))])],1)],1)})),1)],1),e("v-col",{attrs:{cols:"9"}},[t.mostrar_card_resposta?e("v-card",[e("v-card-title",[t._v("Responder item "+t._s(t.identificador))]),"texto"===t.tarefa1.tipo?e("v-card-text",[e("v-textarea",{staticClass:"px-5",attrs:{label:"resposta ao item "+t.nova_resposta.identificador,"auto-grow":"",outlined:"",name:"resposta_texto"},model:{value:t.texto,callback:function(e){t.texto=e},expression:"texto"}})],1):t._e(),"audio"===t.tarefa1.tipo?e("v-card-text",[e("v-card-subtitle",[e("a",{attrs:{href:"https://online-voice-recorder.com/pt/",target:"_blank"}},[t._v("Link para um lugar para gravar os audios")])]),e("v-form",[e("v-file-input",{attrs:{accept:".mp3","show-size":"",label:"Selecione o arquivo"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1):t._e(),e("v-card-actions",["texto"==this.tarefa1.tipo?e("v-btn",{staticClass:"accent",on:{click:function(e){return t.enviarResposta(t.nova_resposta.texto)}}},[t._v("Enviar")]):e("v-btn",{staticClass:"accent",on:{click:function(e){return t.onAccept()}}},[t._v("Enviar")])],1)],1):t._e()],1)],1)],1)],1)],1),e("router-view")],1)},At=[],It={name:"tarefa_ativa",data(){return{faltantes:[],tarefa_id:null,texto:"",nova_resposta:{},data:null,file:null,identificador:null,mostrar_card_resposta:!1,total_partes:[1,2,3,4,5],showDialog:!1,tarefa1:{},resposta1:{}}},created(){},mounted(){this.getTarefaInformation(localStorage.grupo_id)},computed:{...(0,d.Se)(["getToken","getUserId","getGrupoId"])},methods:{...(0,d.OI)(["setToken"]),async getTarefaInformation(t){await s().get(this.$api+"/tarefa_ativa/"+t).then((t=>{this.tarefa1=t.data.tarefa_info,console.log(this.tarefa1),this.resposta1=t.data.identificadores})),this.getTarefaBase(this.tarefa1.tarefa_id)},async getTarefaBase(t){localStorage.token;await s().get(this.$api+"/tarefa/"+t).then((t=>{this.tarefa1.titulo=t.data.title,this.tarefa1.nivel=t.data.nivel,this.tarefa1.texto=t.data.text,this.tarefa1.rubrica=t.data.rubrica,this.tarefa1.tipo=t.data.tipo})).catch((t=>{console.log(t)}))},getDone(t){console.log("get done");let e=[1,2,3,4,5];t.forEach((t=>{console.log("entrou no loop"),e.splice(e.indexOf(t),1)})),this.faltantes=e},responder(t){this.identificador=t,this.mostrar_card_resposta=!0,this.nova_resposta.identificador=t,"texto"===this.tarefa1.tipo&&(this.nova_resposta.texto="")},async enviarResposta(t){let e={tarefa_id:this.tarefa1.tarefa_id,grupo_id:localStorage.grupo_id,usuario_id:localStorage.usuario_id,identificador:this.identificador,text:this.texto};console.log(e),await s().post(this.$api+"/create_resposta",e).then((t=>{alert("resposta enviada com sucesso")})).catch((t=>{alert("erro! "+t)}))},onResult(t){console.log("AAAAAA"),this.data=t;const e=window.confirm("Deseja eviar o áudio gravado?");e?this.onAccept():this.onDeny()},async onAccept(){console.log("get token: "+localStorage.token);let t=new FormData;t.append("name","audio"),t.append("file",this.file),t.append("grupo_id",localStorage.grupo_id),t.append("usuario_id",localStorage.usuario_id),t.append("tarefa_id",this.tarefa1.tarefa_id),t.append("identificador",this.identificador);localStorage.usuario_id;let e={header:{"Content-Type":"multipart/form-data","x-access-token":localStorage.token,grupo_id:this.grupo_id,user_id:this.usuario_id}};await s().post(this.$api+"/upload_audio",t,e).then((()=>{console.log("deu bom!"),this.file="",this.$router.go()})).catch((t=>{console.log(t),console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")}))},onDeny(){this.data=null}}},Tt=It,$t=a(7690),St=a(2780),Lt=a(7970),Et=a(2379),Gt=(0,f.Z)(Tt,Zt,At,!1,null,null,null),Bt=Gt.exports;h()(Gt,{VBtn:b.Z,VCard:P.Z,VCardActions:q.h7,VCardSubtitle:q.Qq,VCardText:q.ZB,VCardTitle:q.EB,VCol:C.Z,VContainer:U.Z,VDivider:$t.Z,VFileInput:St.Z,VForm:X.Z,VList:Lt.Z,VListItem:Ct.Z,VListItemTitle:yt.V9,VRow:w.Z,VTextarea:Et.Z});var jt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-card",[e("v-card-title",{staticClass:"secondary"},[t._v(t._s(t.username))]),e("v-card-subtitle",[t.getIsAdmin?e("v-chip",{staticClass:"warning ml-3",on:{click:function(e){return t.goToAdmin()}}},[t._v("Admin")]):t._e(),t.getIsConteudista?e("v-chip",{staticClass:"warning ml-3",on:{click:function(e){return t.goToConteudista()}}},[t._v("Conteudista")]):t._e()],1),e("v-card-content",{staticClass:"px-5"},[e("v-row",{staticClass:"mx-5"},[e("v-col",{attrs:{cols:"6"}},[e("v-card",[e("v-card-title",{staticClass:"primary"},[t._v(t._s(t.grupo.nome)+" ("+t._s(t.grupo.idioma)+")")]),e("v-card-text",[e("v-list",[e("v-list-item",[t._v("link do telegram: "),e("a",[t._v(t._s(t.grupo.link))])])],1)],1)],1)],1),e("v-col",{attrs:{cols:"6"}},[e("v-card")],1)],1)],1)],1)],1)},Pt=[],qt={name:"loggedHome",props:{},data:()=>({username:"",grupo:{nome:"Senatus Deorum",idioma:"Latim",link:"t.me/ioudfkjsadfohjsadfbiu..."}}),computed:{...(0,d.Se)(["getUserToken","getUser","getIsConteudista","getIsAdmin"])},mounted(){this.username=this.$store.getters.getUser},methods:{...(0,d.OI)([]),getUsername(){},goToAdmin(){console.log("fuck you")},goToConteudista(){console.log("fuck you too")},async getUserGrupos(){},getGrupoInfo(){}}},Ut=qt,Rt=a(2393),Nt=(0,f.Z)(Ut,jt,Pt,!1,null,null,null);Nt.exports;h()(Nt,{VCard:P.Z,VCardSubtitle:q.Qq,VCardText:q.ZB,VCardTitle:q.EB,VChip:Rt.Z,VCol:C.Z,VContainer:U.Z,VList:Lt.Z,VListItem:Ct.Z,VRow:w.Z});var Ot=function(){var t=this,e=t._self._c;return e("v-container",[e("v-card",[e("v-card-title",[t._v(" Criar nova tarefa ")]),e("v-card-text",[e("v-form",[e("v-text-field",{attrs:{label:"Título",required:""},model:{value:t.tarefa.titulo,callback:function(e){t.$set(t.tarefa,"titulo",e)},expression:"tarefa.titulo"}}),e("v-text-field",{attrs:{label:"Nível",required:""},model:{value:t.tarefa.nivel,callback:function(e){t.$set(t.tarefa,"nivel",e)},expression:"tarefa.nivel"}}),e("v-select",{attrs:{items:t.dd_options,label:"Tipo de atividade",required:""},model:{value:t.tarefa.tipo,callback:function(e){t.$set(t.tarefa,"tipo",e)},expression:"tarefa.tipo"}}),e("v-textarea",{attrs:{label:"Texto","auto-grow":"",outlined:"",required:""},model:{value:t.tarefa.text,callback:function(e){t.$set(t.tarefa,"text",e)},expression:"tarefa.text"}}),e("v-textarea",{attrs:{label:"Rúbrica","auto-grow":"",outlined:"",required:""},model:{value:t.tarefa.rubrica,callback:function(e){t.$set(t.tarefa,"rubrica",e)},expression:"tarefa.rubrica"}})],1)],1),e("v-card-actions",[e("v-btn",{attrs:{color:"primary",label:"Submit"},on:{click:function(e){return t.submit(t.tarefa)}}},[t._v("Submit")])],1)],1)],1)},Ft=[],Mt={data:()=>({dd_options:["Audio","Text"],tarefa:{titulo:"",nivel:"",tipo:"",text:"",rubrica:""}}),methods:{submit(t){console.log(this.tarefa)}}},Dt=Mt,zt=a(3290),Ht=(0,f.Z)(Dt,Ot,Ft,!1,null,null,null),Qt=Ht.exports;h()(Ht,{VBtn:b.Z,VCard:P.Z,VCardActions:q.h7,VCardText:q.ZB,VCardTitle:q.EB,VContainer:U.Z,VForm:X.Z,VSelect:zt.Z,VTextField:et.Z,VTextarea:Et.Z});var Wt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-container",[e("v-card",[e("v-card-title",[t._v(t._s(t.nome_grupo))])],1),e("v-card",[e("v-card-title",[e("h2",[t._v(" Tarefa: "+t._s(t.tarefa.title))])]),e("v-card-text",[e("h2",{staticClass:"mb-2"},[t._v("Texto da tarefa")]),t._v(" "+t._s(t.tarefa.text)+" "),e("v-divider",{staticClass:"my-5"}),e("h2",{staticClass:"mb-2"},[t._v("Rubrica")]),t._v(" "+t._s(t.tarefa.rubrica)+" ")],1)],1),e("v-spacer"),e("v-card",{staticClass:"mt-10"},[e("v-card-title",{staticClass:"d-flex justify-space-between"},[e("p",[t._v("Resposta do grupo")]),e("p",[t._v(t._s(t.avg))])]),"texto"==t.tarefa.tipo?e("v-card-text",[e("v-container",{staticClass:"d-flex flex-column"},t._l(t.respostas,(function(a){return e("v-card",{key:a.identificador,attrs:{elevation:"0",outlined:""}},[e("v-card-title",[t._v("Parte: "+t._s(a.identificador))]),e("v-card-text",[t._v(" "+t._s(a.text)+" "),!t.isMine&!t.comented?e("v-divider"):t._e(),!t.isMine&!t.comented?e("v-rating",{attrs:{color:"yellow darken-3","background-color":"grey darken-1","half-increments":"",hover:"",size:"25"},model:{value:t.nota[a.identificador],callback:function(e){t.$set(t.nota,a.identificador,e)},expression:"nota[tar.identificador]"}}):t._e()],1)],1)})),1)],1):t._e(),"audio"==t.tarefa.tipo?e("v-card-text",[e("v-container",{staticClass:"d-flex flex-column"},t._l(t.respostas,(function(a){return e("v-card",{key:a.identificador,attrs:{elevation:"0"}},[e("v-card-title",[t._v(t._s(a.identificador))]),e("v-card-text",{staticClass:"d-flex flex-row justify-start"},[e("audio",{staticClass:"mr-15",attrs:{controls:""}},[e("source",{attrs:{src:t.getAudio(a.identificador),type:"audio/mpeg"}})]),!t.isMine&!t.comented?e("v-rating",{staticClass:"ml-15",attrs:{color:"yellow darken-3","background-color":"grey darken-1","half-increments":"",hover:"",size:"25"},model:{value:t.nota[a.identificador],callback:function(e){t.$set(t.nota,a.identificador,e)},expression:"nota[resp.identificador]"}}):t._e()],1),e("v-divider")],1)})),1)],1):t._e(),!t.isMine&!t.comented?e("v-card-actions",[e("v-col",[e("v-textarea",{attrs:{outlined:"","auto-grow":"",label:"Escreva um comentário sobre a tarefa!"},model:{value:t.comentario,callback:function(e){t.comentario=e},expression:"comentario"}}),e("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.makeAvaliacao()}}},[t._v(" Enviar ")])],1)],1):t._e()],1)],1),e("v-container",[e("v-card",{staticClass:"pb-10"},[e("v-card-title",[t._v("Comentários")]),e("v-card-text",t._l(t.comentarios,(function(a){return e("v-template",{key:a.usuario_id},[e("v-card",{attrs:{elevation:"0",outlined:""}},[e("v-card-title",[e("v-rating",{attrs:{color:"yellow darken-3","background-color":"grey darken-1","half-increments":"",hover:"",readonly:"",size:"25"},model:{value:a.nota,callback:function(e){t.$set(a,"nota",e)},expression:"comment.nota"}})],1),e("v-card-text",[t._v(" "+t._s(a.comentario)+" ")])],1),e("v-divider")],1)})),1)],1)],1)],1)},Yt=[],Jt=function(){var t=this,e=t._self._c;return e("v-container",[e("v-card",[e("v-card-title",[t._v(t._s(t.dados.tarefa_nome))]),e("v-card-text")],1)],1)},Kt=[],Xt={props:{dados:{tarefa_nome:"teste",grupo_id:null,tarefa_id:null}},methods:{getAudioByName(){s().get("/audio_by_name/4-2-1").then(((t,e)=>e.data)).catch((t=>{console.log("err: "+t)}))},getRespostaContent(){s().get("")}}},te=Xt,ee=(0,f.Z)(te,Jt,Kt,!1,null,null,null),ae=ee.exports;h()(ee,{VCard:P.Z,VCardText:q.ZB,VCardTitle:q.EB,VContainer:U.Z});var oe={props:{},components:{tarefaComponent:ae},data(){return{isMine:!1,comented:!1,tarefa:{},nome_grupo:"",nota:[0,0,0,0,0],comentario:"",respostas_texto:[],respostas_audio:[],comentarios:[{nota:4.5,text:"Tarefa muito bem feita. Gramatica quase impecável. o numero 3 só trocou there por they're, mas super normal",usuario_id:1},{nota:1.5,text:" o numero 3 só trocou there por they're, mas super normal",usuario_id:12}]}},async created(){await this.getTarefa(this.$route.params.tarefa_id),await this.getRespostaTexto(),await this.jaComentei(),await this.getAvaliacoes(),await this.getGrupoName(this.$route.params.grupo_id),this.isThisMine()},mounted:{},computed:{...(0,d.Se)(["getToken","getUserId","getGrupoId"]),avg(){let t=0;return this.nota.forEach((e=>{t+=e})),t/5},respostas(){return this.respostas_texto}},methods:{...(0,d.OI)(["setToken"]),async getTarefa(t){await s().get(this.$api+"/tarefa/"+t).then((t=>{this.tarefa=t.data})).catch((t=>{console.log(t)}))},isThisMine(){this.getGrupoId==this.$route.params.grupo_id&&(this.isMine=!0),console.log(this.isMine)},async jaComentei(){await s().get(this.$api+"/ja_comentei/"+this.$route.params.grupo_id+"/"+this.$route.params.tarefa_id+"/"+this.getUserId).then((t=>{this.comented=t.data,console.log(this.comented)})).catch((t=>{console.log(t)}))},async getRespostaTexto(){await s().get(this.$api+"/get_respostas_texto/"+this.$route.params.grupo_id+"/"+this.$route.params.tarefa_id).then((t=>{this.respostas_texto=t.data,console.log(t.data),console.log(this.respostas_texto)})).catch((t=>{console.log(t)}))},getAudio(t){let e=this.$route.params.grupo_id+"-"+this.$route.params.tarefa_id+"-"+t;return this.$api+"/audio_by_name/"+this.$route.params.grupo_id+"/"+e},async getAvaliacoes(){let t=this.$route.params.grupo_id+"/"+this.$route.params.tarefa_id;await s().get(this.$api+"/avaliacoes/"+t).then((t=>{console.log(t.data),this.comentarios=t.data})).catch((t=>{console.log(t)}))},async makeAvaliacao(){await s().post(this.$api+"/make_avaliacao",{usuario_id:this.getUserId,grupo_id:this.$route.params.grupo_id,tarefa_id:this.$route.params.tarefa_id,comentario:this.comentario,nota:this.avg}).then((async t=>{this.comentario="",this.$router.go()})).catch((t=>{console.log("erro"),console.log(t)}))},async getGrupoName(t){await s().get(this.$api+"/nome/"+t).then((t=>{this.nome_grupo=t.data})).catch((t=>{console.log(t)}))}}},re=oe,se=(0,f.Z)(re,Wt,Yt,!1,null,null,null),ie=se.exports;h()(se,{VBtn:b.Z,VCard:P.Z,VCardActions:q.h7,VCardText:q.ZB,VCardTitle:q.EB,VCol:C.Z,VContainer:U.Z,VDivider:$t.Z,VRating:R.Z,VSpacer:V.Z,VTextarea:Et.Z});var ne=function(){var t=this,e=t._self._c;return e("v-container",[t._v(" Grupos ainda não completos "),e("v-container",[e("v-row",{attrs:{dense:""}},t._l(t.grupos,(function(a){return e("v-col",{key:a.nome,attrs:{cols:4}},[e("v-card",{attrs:{elevation:"10"}},[e("v-card-title",{domProps:{textContent:t._s("Grupo: "+a.nome)}}),e("v-card-text",[e("p",[t._v(" Idioma: "+t._s(a.idioma)+" ")]),e("p",[t._v(" Nivel: "+t._s(a.nivel)+" ")]),e("p",[t._v(" Número de usuários: "+t._s(a.qt_usuarios)+"/5 ")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.goToGrupo(a.grupo_id)}}},[t._v(" Entrar em grupo ")])],1)],1)],1)})),1)],1)],1)},le=[],ce={data(){return{grupos:[]}},async created(){await this.getGroupsInfos()},computed:{...(0,d.Se)(["getToken"])},methods:{async getGroupsInfos(){await s().get(this.$api+"/open_groups").then((t=>{this.grupos=t.data.grupos})).catch((t=>{}))},async goToGrupo(t){await s().post(this.$api+"/entrar_em_grupo",{usuario_id:localStorage.usuario_id,grupo_id:t}).then((e=>{this.$router.push({path:"/grupo/"+t})}))}}},de=ce,ue=(0,f.Z)(de,ne,le,!1,null,null,null),pe=ue.exports;h()(ue,{VBtn:b.Z,VCard:P.Z,VCardActions:q.h7,VCardText:q.ZB,VCardTitle:q.EB,VCol:C.Z,VContainer:U.Z,VRow:w.Z,VSpacer:V.Z}),o.ZP.use($.Z);const ve=[{path:"/home",name:"home",meta:{auth:!1},component:z},{path:"/about",name:"about",meta:{auth:!1},component:function(){return a.e(443).then(a.bind(a,4435))}},{path:"/conteudista",name:"conteudista",meta:{auth:!1},component:Qt},{path:"/login",name:"login",meta:{auth:!1},beforeEnter:(t,e,a)=>{console.log(A.getters.getToken),A.getters.getToken?a({name:"l-home"}):a()},component:ot},{path:"/cadastro",name:"cadastro",beforeEnter:(t,e,a)=>{a()},component:ct},{path:"/buscaGrupo",name:"buscaGrupo",component:gt},{path:"/grupo/:id",name:"grupo",meta:{auth:!0},component:kt,beforeEnter:async(t,e,a)=>{await fe(t,e,a)}},{path:"/grupo/:id/tarefa_ativa",name:"tarefa_ativa",component:Bt,beforeEnter:async(t,e,a)=>{await fe(t,e,a)}},{path:"/tarefa/:grupo_id/:tarefa_id",name:"tarefa_completa",meta:{auth:!0},component:ie,beforeEnter:async(t,e,a)=>{await fe(t,e,a)}},{path:"/SemGrupo",name:"sem_grupo",meta:{auth:!0},component:pe,beforeEnter:async(t,e,a)=>{await fe(t,e,a)}},{path:"*",name:"escape",meta:{auth:!0},component:z}],me=new $.Z({linkActiveClass:"Active",base:"/",routes:ve}),fe=async function(t,e,a,o){console.log(o),await T(localStorage.token).then((t=>{A.commit("setToken",t.data.token),A.commit("setUser",t.data.username),A.commit("setIsAdmin",t.data.isadmin),A.commit("setIsConteudista",t.data.isconteudista),A.commit("setUserId",t.data.user_id),A.commit("setGrupoId",t.data.grupo_id),a()})).catch((t=>{A.commit("setLogin",!1),a({path:"/login"})}))};var ge=me;o.ZP.config.productionTip=!1,o.ZP.prototype.$api="https://lfstcc.click",new o.ZP({router:ge,store:A,vuetify:p,render:function(t){return t(Z)}}).$mount("#app")}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,o,r,s){if(!o){var i=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],s=t[d][2];for(var n=!0,l=0;l<o.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(n=!1,s<i&&(i=s));if(n){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,o){return a.f[o](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.aadc24e5.js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="tcc:";a.l=function(o,r,s,i){if(t[o])t[o].push(r);else{var n,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==e+s){n=u;break}}n||(l=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,a.nc&&n.setAttribute("nonce",a.nc),n.setAttribute("data-webpack",e+s),n.src=o),t[o]=[r];var p=function(e,a){n.onerror=n.onload=null,clearTimeout(v);var r=t[o];if(delete t[o],n.parentNode&&n.parentNode.removeChild(n),r&&r.forEach((function(t){return t(a)})),e)return e(a)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=p.bind(null,n.onerror),n.onload=p.bind(null,n.onload),l&&document.head.appendChild(n)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,o){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var s=new Promise((function(a,o){r=t[e]=[a,o]}));o.push(r[2]=s);var i=a.p+a.u(e),n=new Error,l=function(o){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;n.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",n.name="ChunkLoadError",n.type=s,n.request=i,r[1](n)}};a.l(i,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,i=o[0],n=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var d=l(a)}for(e&&e(o);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(d)},o=self["webpackChunktcc"]=self["webpackChunktcc"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(8006)}));o=a.O(o)})();
//# sourceMappingURL=app.cb412224.js.map