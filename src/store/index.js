import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isLoggedIn: false
  },
  getters: {
    getIsLoggedIn(state, getters) {
      return state.isLoggedIn
    },
    getIsLoggedIn(state, getters) {
      return state.user
    }
  },
  mutations: {
    // na hora de usar, tem que fazer o chamado da api e, dentor da promessa, no then, chamar essa mutation
    // pq não pode ter nada assíncrono dentro da mutation
    mutationLogin(state, user_name) {
      state.isLoggedIn = true
      state.user = user_name
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
