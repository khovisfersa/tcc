<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-start justify-center>
          <v-flex xs12 sm8 md4>
            <div class="elevation-0 border-radius-5">
                <p class="text--secondary font-weight-bold">Login</p>
              <div>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    name="login"
                    label="Login"
                    type="text"
                    v-model="username"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </div>
              <div class="d-flex justify-center pt-10">
                <v-btn @click="login()" color="secondary">Login</v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script type="text/javascript">
import axios from "axios"
import { updateToken } from '../store/function.js'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "Login",
  props: {
    source: String,
  },
  data: () => ({
      api: "https://lfstcc.click",
      username: '',
      password: '',
    }),
  computed: {
    ...mapGetters(['getUserToken', 'getUser'])
  },
  methods: {
    ...mapMutations(['setToken', 'setUser', 'setIsAdmin', 'setIsConteudista']),
    async login() {
      let user_info = {
        username: this.username,
        password: this.password
      }

      await axios.post(this.$api + '/login', user_info)
      .then( (res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('usuario_id', res.data.usuario_id)
        localStorage.setItem('grupo_id', res.data.grupo_id)
        this.setToken(res.data.token)
        this.setUser(res.data.username)
        this.setIsAdmin(res.data.isadmin)
        this.setIsConteudista(res.data.isconteudista)
        this.$router.push('/')
      })
      .catch((err) => {
        console.log(err)
        alert("Credenciais inválidas")
      })
    }
  }
};
</script>

<style></style>
