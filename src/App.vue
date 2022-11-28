<template>
  <v-app style="background-color: #D8CEE0">
    <v-app-bar app color="primary" dark>
      <div class="d-flex justify-center">
        <v-btn color="secondary" to="/home">Home</v-btn>
      </div>
      <v-spacer></v-spacer>
      <h1>Panglottai</h1>
      <v-spacer></v-spacer>
      <div class="d-flex justify-center">
        <v-row v-if="!isLoggedIn">
          <v-col>
            <v-btn rounded v-if="!getIsLoggedIn" justify="space-bewteen" color="secondary" @click="toLogin" >Login</v-btn>
            <v-btn rounded v-if="getIsLoggedIn" justify="space-bewteen" elevation="0" color="transparent" >{{ getUser }}</v-btn>
            
          </v-col>
          <v-col>
            <v-btn rounded v-if="!getIsLoggedIn" justify="space-bewteen" color="secondary" @click="toCadastro">Cadastro</v-btn>
            <v-btn rounded v-if="getIsLoggedIn" justify="space-bewteen" color="secondary" @click="toUserGroup" >Grupo</v-btn>
          </v-col>
        </v-row>
        <v-row v-else>
          
        </v-row>
      </div>
    </v-app-bar>

    <v-main :styles="{background: $vuetify.theme.themes.light.background}">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import vuetify from "@/plugins/vuetify.js"

export default {
  name: "App",


  data: () => ({
    isLoggedIn: false,
    username: null,
    grupo_id: null,

  }),
  methods:{
    toLogin() {
      this.$router.push({name: 'login'})
    },
    getIslogged() {
      if(localStorage.getItem(token) != '') {
        this.username = localStorage.getItem(username)
        this.grupo_id = localStorage.getItem(grupo_id)
        return true
      }
      else return false
    },
    toCadastro() {
      this.$router.push({name: 'cadastro'})
    },
    toUserHome() {
      this.$router.push({path: '/'})
    },
    toUserGroup() {
      // alert(this.$store.getters.getGrupoId)
      if(this.$store.getters.getGrupoId == 0 || this.$store.getters.getGrupoId == null ) {
        this.$router.push({path: '/semgrupo'})
      }
      else {
  
        this.$router.push({path: '/grupo/' + this.$store.getters.getGrupoId})
      }
    }
  },
  computed: {
    ...mapGetters(['getIsLoggedIn','getUser', 'getGrupoId']),
    loggedIn() {
      this.isLoggedIn = getIsLoggedIn
    },
    getUsername() {
      this.username = this.$store.getters.getUsername
    },
    GrupoId() {
      return this.$store.getters.getGrupoId
    }

  }
};
</script>
