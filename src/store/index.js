import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    isLoggedIn: false,
    isAdmin: false,
    isConteudista: false,
    user_id: null,
    grupo_id: null,
  },
  getters: {
    getUserToken(state) {
      return state.token
    },
    getIsLoggedIn(state, getters) {
      return state.isLoggedIn
    },
    getUser(state, getters) {
      return state.user
    },
    getIsAdmin(state, getters) {
      return state.isAdmin
    },
    getIsConteudista(state, getters) {
      return state.isConteudista
    },
    getUserId(state, getters) {
      return state.user_id
    },
    getGrupoId(state, getters) {
      return state.grupo_id
    }
  },
  mutations: {
    // na hora de usar, tem que fazer o chamado da api e, dentor da promessa, no then, chamar essa mutation
    // pq não pode ter nada assíncrono dentro da mutation
    setLogin(state) {
      state.isLoggedIn = true
      // state.user = user_name
    },
    setToken(state, token) {
      state.token = token
      state.isLoggedIn = true
    },
    setUser(state, username) {
      state.user = username
    },
    setIsAdmin(state, admin) {
      state.isAdmin = admin
    },
    setIsConteudista(state, conteudista) {
      state.isConteudista = conteudista
    },
    setUserId(state, user_id) {
      state.user_id = user_id
    },
    setGrupoId(state, grupo_id) {
      state.grupo_id = grupo_id
    }
  },
  actions: {
    async actionLogin({commit, state}, user_name, password) {
      // Aqui é que eu faço a chamada da api e pego o nome do usuário e, dentro dessa chamada, eu meto a mutation
    }
  },
  modules: {
  }
})
