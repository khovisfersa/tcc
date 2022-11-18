import axios from 'axios'
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
import SemGrupo from '../views/semGrupo.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: { auth: false },
    component: HomeView
  },
  // {
  //   path: '/tarefa_completa',
  //   name: 'tarefa_completa',
  //   component: TarefaCompleta
  // },
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
  // {
  //   path: '/',
  //   name: 'l-home',
  //   meta: { auth: true },
  //   component: LoggedHome,
  //   beforeEnter: (to, from, next) => {
  //     console.log(store.getters.getUserToken)
  //     if(store.getters.getUserToken != null) {
  //       next()
  //     }
  //     else {
  //       console.log("teste")
  //       next({name: 'home'})
  //     }
  //   },
  //   children: []
  // },
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
    meta: {auth: true},
    component: Grupo,
    beforeEnter: async (to,from,next) => {
      await guard(to,from,next)
    }
  },
  {
    path: '/grupo/:id/tarefa_ativa',
    name: "tarefa_ativa",
    component: TarefaAtiva,
    beforeEnter: async (to,from,next) => {
      await guard(to,from,next)
    }
  },
  {
    path: '/grupo/:grupo_id/:tarefa_id',
    name: "tarefa_completa",
    meta: {auth: true},
    component: TarefaCompleta,
    beforeEnter: async (to,from,next) => {
      await guard(to,from,next)
    }
  },
  {
    path: '/SemGrupo',
    name: "sem_grupo",
    meta: {auth: true},
    component:SemGrupo,
    beforeEnter: async (to,from,next) => {
      await guard(to,from,next)
    }
  },
  {
    path: '*',
    name : "escape",
    meta: {auth: true},
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
// router.beforeEach(async (to,from,next) => {
//   if(to.meta.auth == true)
//   console.log(store.getters.getUserToken)
//   if(store.getters.getUserToken == null){
//     console.log("vuex user token null")
//     try{
//       let token = localStorage.token
//       await getUserInfo(token)
//       console.log(store.getters.getUserToken)
//       next()
//     } catch(err) {
//       next({path: '/login'})
//     }
//   }

//   else{
//     next()
//   }
//   next()
// })

const guard = async function(to,from,next, token) {
  console.log(token)
  await getUserInfo(localStorage.token)
  .then((res) => {
    store.commit('setToken', res.data.token)
    store.commit('setUser', res.data.username)
    store.commit('setIsAdmin',res.data.isadmin)
    store.commit('setIsConteudista',res.data.isconteudista)
    store.commit('setUserId', res.data.user_id)
    store.commit('setGrupoId', res.data.grupo_id)
    next()
  })
  .catch((err) => {
    store.commit('setLogin',false)
    next({path: '/login'})
  })

  // await axios.post('http://localhost:3333/user',{
  //   token: localStorage.token
  // })
  // // axios.get('https://lfstcc.click/user')
  // .then((res) => {
  //   console.log("resposta positiva")
  //   console.log(res)
  //   store.commit('setToken', res.data.token)
  //   store.commit('setUser', res.data.username)
  //   store.commit('setIsAdmin',res.data.isadmin)
  //   store.commit('setIsConteudista',res.data.isconteudista)
  //   store.commit('setUserId', res.data.user_id)
  //   store.commit('setGrupoId', res.data.grupo_id)
  //   next()
  // })
  // .catch((err) => {
  //   console.log("erro")
  //   console.log(err)
  //   next({path: '/login'})
  // })
}

// router.beforeEach(async (to,from, next) => {
//   console.log("before each")
//   if(to.meta.auth == true) {
//     try {
//       let token = localStorage.getToken
//       await getUserInfo(token)
//       .then((res) => {
//         console.log(res)
//       })

//       next()
//     } catch(err) {
//       console.log("erro")
//       next({path: '/home'})  
//     }
//   }
//   else {
//     next()
//   }
// })



// router.afterEach((to,from) => {
// router.afterEach(() => {
//   console.log("after each")
// })

export default router
