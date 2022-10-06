import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/index.js'
import Login from '../views/Login'
import Cadastro from '../views/Cadastro.vue'
import BuscaGrupo from '../views/buscaDeGrupos.vue'
import Grupo from '../views/Grupo.vue'
import TarefaAtiva from '../views/TarefaAtiva.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: { auth: false },
    component: HomeView
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
    component: HomeView,
    children: []
  },
  {
    path: '/login',
    name: 'login',
    meta: { auth: false },
    component: Login
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/buscaGrupo',
    name: 'buscaGrupo',
    component: BuscaGrupo
  },
  {
    path: '/grupos/:id',
    name: 'grupo',
    component: Grupo
  },
  {
    path: '/grupo/tarefa_ativa',
    name: "tarefa_ativa",
    component: TarefaAtiva
  }
]

const router = new VueRouter({
  // mode: 'history',
  linkActiveClass: "Active",
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from) => {
// router.beforeEach((to,from,next) => {
//   console.log("before each")
//   if(!to.meta.auth) { 
//     console.log("not authenticated")
//     next()
//   }
//   else if(to.meta.auth) { 
//     console.log("authenticated")   
//     next('/home')
//   }
// })

// router.afterEach((to,from) => {
// router.afterEach(() => {
//   console.log("after each")
// })

export default router
