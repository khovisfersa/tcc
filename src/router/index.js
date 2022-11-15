import Vue from 'vue'
import { getUserInfo } from '../store/function.js'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index.js'
import Login from '../views/Login'
import Cadastro from '../views/Cadastro.vue'
import BuscaGrupo from '../views/buscaDeGrupos.vue'
import Grupo from '../views/Grupo.vue'
import TarefaAtiva from '../views/TarefaAtiva.vue'
import LoggedHome from '../views/LoggedHome.vue'
import ConteudistaPage from '../views/ConteudistaPage.vue'
import TarefaCompleta from '../views/TarefaCompleta.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: { auth: false },
    component: HomeView
  },
  {
    path: '/tarefa_completa',
    name: 'tarefa_completa',
    component: TarefaCompleta
  },
  {
    path: '/about',
    name: 'about',
    meta: { auth: false },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/',
    name: 'l-home',
    meta: { auth: true },
    component: LoggedHome,
    beforeEnter: (to, from, next) => {
      console.log(store.getters.getUserToken)
      if(store.getters.getUserToken != null) {
        next()
      }
      else {
        console.log("teste")
        next({name: 'home'})
      }
    },
    children: []
  },
  {
    path:'/conteudista',
    name: 'conteudista',
    meta: { auth: false },
    component: ConteudistaPage
  },
  {
    path: '/login',
    name: 'login',
    meta: { auth: false },
    beforeEnter: (to,from,next) => {
      console.log(store.getters.getToken)
      if(store.getters.getToken){
        next({name: "l-home"})
      }
      else {
        // next({name: "login"})
        next()
      }
    },
    component: Login
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    beforeEnter: (to,from,next) => {
      next()
    },
    component: Cadastro
  },
  {
    path: '/buscaGrupo',
    name: 'buscaGrupo',
    component: BuscaGrupo
  },
  {
    path: '/grupo/:id',
    name: 'grupo',
    component: Grupo,
  },
  {
    path: '/grupo/:id/tarefa_ativa',
    name: "tarefa_ativa",
    component: TarefaAtiva
  },
  {
    path: '/grupo/:grupo_id/:tarefa_id',
    name: "tarefa_completa",
    component: TarefaCompleta
  },
  {
    path: '*',
    name : "escape",
    component: HomeView
  }
]

const router = new VueRouter({
  // mode: 'history',
  linkActiveClass: "Active",
  base: process.env.BASE_URL,
  routes
})



// router.beforeEach((to, from) => {
router.beforeEach(async (to,from,next) => {
  console.log(store.getters.getUserToken)
  if(store.getters.getUserToken == null){
    console.log("vuex user token null")
    let token = localStorage.token
    await getUserInfo(token)
    console.log(store.getters.getUserToken)
    next()
  }

  else{
    next()
  }
  next()
  // try{
  //   getUserInfo(token)
  // } catch(err) {
  //   next({name: 'login'})
  // }

  // console.log(store.getters.getUserToken)
  // next()
  // // if(!to.meta.auth) { 
  // //   console.log("not authenticated")
  // //   next('/home')
  // // }
  // // else if(to.meta.auth) { 
  // //   console.log("authenticated")   
  // //   next('/home') 
  // // }
})



// router.afterEach((to,from) => {
// router.afterEach(() => {
//   console.log("after each")
// })

export default router
