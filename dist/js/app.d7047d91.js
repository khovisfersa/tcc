(function(){"use strict";var e={5926:function(e,t,n){var r=n(144),o=n(9669),i=n.n(o);let a={};const u=i().create(a);u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=u,window.axios=u,Object.defineProperties(e.prototype,{axios:{get(){return u}},$axios:{get(){return u}}})},r.ZP.use(Plugin);Plugin;var s=function(){var e=this,t=e._self._c;return t("v-app",[t("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[t("div",{staticClass:"d-flex justify-center"},[t("v-btn",{attrs:{color:"secondary",to:"/"}},[e._v("Inicial")])],1),t("v-spacer"),t("div",{staticClass:"d-flex justify-center"},[e.isLoggedIn?t("v-row"):t("v-row",[t("v-col",[t("v-btn",{attrs:{justify:"space-bewteen",color:"secondary",to:"login"}},[e._v("Login")])],1),t("v-col",[t("v-btn",{attrs:{justify:"space-bewteen",color:"secondary",to:"cadastro"}},[e._v("Cadastro")])],1),t("v-col",[t("v-btn",{attrs:{justify:"space-bewteen",color:"secondary",to:"buscaGrupo"}},[e._v("Busca de grupo")])],1)],1)],1)],1),t("v-main",[t("router-view")],1)],1)},c=[],f=n(629),l={name:"App",data:()=>({isLoggedIn:!1,username:null}),computed:{...(0,f.Se)(["getIsLoggedIn","getUsername"]),loggedIn(){this.isLoggedIn=getIsLoggedIn},getUsername(){this.username=getUsername}}},d=l,p=n(1001),m=n(3453),v=n.n(m),g=n(3726),h=n(259),y=n(3381),b=n(7024),w=n(3102),j=n(7894),x=n(2515),C=(0,p.Z)(d,s,c,!1,null,null,null),Z=C.exports;v()(C,{VApp:g.Z,VAppBar:h.Z,VBtn:y.Z,VCol:b.Z,VMain:w.Z,VRow:j.Z,VSpacer:x.Z});var P=n(8345),_=function(){var e=this,t=e._self._c;return t("div",[t("initial")],1)},k=[],L=function(){var e=this,t=e._self._c;return t("v-container",{staticClass:"d-flex justify-center"},[t("div",{},[t("v-card",{attrs:{elevation:"0"}},[t("v-card-title",{attrs:{color:"text--secondary"}},[e._v("Aplicação de TCC")]),t("div",[t("v-card-text",[t("v-row",[e._v(" Aqui temos uma aplicação web para aprendizagem colaborativa de idiomas.")]),t("v-row",{staticClass:"mt-10"},[e._v(" Você pode procurar por um grupo do idioma que você deseja aprender.")]),t("v-row",{staticClass:"mt-10"},[e._v(" Depois de entrar em um grupo, Você e seu grupo receberão tarefas no idioma a ser aprendido. Essas tarefas lhe farão aprender mais sobre o idioma.")])],1)],1)],1)],1)])},A=[],I={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},O=I,V=n(3816),E=n(5255),T=n(6530),S=(0,p.Z)(O,L,A,!1,null,null,null),q=S.exports;v()(S,{VCard:V.Z,VCardText:E.ZB,VCardTitle:E.EB,VContainer:T.Z,VRow:j.Z});var B={name:"Home",components:{Initial:q}},N=B,F=(0,p.Z)(N,_,k,!1,null,null,null),M=F.exports;r.ZP.use(P.Z);const D=[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,4435))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e(7),n.e(378)]).then(n.bind(n,9378))}},{path:"/cadastro",name:"cadastro",component:function(){return Promise.all([n.e(7),n.e(406)]).then(n.bind(n,8406))}},{path:"/buscaGrupo",name:"buscaGrupo",component:function(){return Promise.all([n.e(7),n.e(274)]).then(n.bind(n,6274))}},{path:"/grupos/:id",name:"grupo",component:function(){return n.e(665).then(n.bind(n,4665))}}],U=new P.Z({linkActiveClass:"Active",base:"/",routes:D});var G=U;r.ZP.use(f.ZP);var H=new f.ZP.Store({state:{user:null,isLoggedIn:!1},getters:{getIsLoggedIn(e,t){return e.isLoggedIn},getIsLoggedIn(e,t){return e.user}},mutations:{mutationLogin(e,t){e.isLoggedIn=!0,e.user=t}},actions:{async actionLogin({commit:e,state:t},n,r){}},modules:{}}),R=n(8986);r.ZP.use(R.Z);var $=new R.Z({theme:{themes:{light:{primary:"#2196f3",secondary:"#4caf50",accent:"#795548",error:"#f44336",warning:" #ff5722",info:"#ff9800",success:"#e91e63"}}}});r.ZP.config.productionTip=!1,new r.ZP({router:G,store:H,vuetify:$,render:function(e){return e(Z)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(443===e?"about":e)+"."+{7:"6121d97f",274:"94a38415",378:"0cdb1f17",406:"ff16f68b",443:"aadc24e5",665:"2d4ca640"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{7:"5b13e934",274:"78cdc260"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tcc:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={7:1,274:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var f=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunktcc"]=self["webpackChunktcc"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5926)}));r=n.O(r)})();
//# sourceMappingURL=app.d7047d91.js.map