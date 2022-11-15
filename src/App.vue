<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex justify-center">
        <v-btn color="secondary" to="/home">Inicial</v-btn>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex justify-center">
        <v-row v-if="!isLoggedIn">
          <v-col>
            <v-btn rounded v-if="!getIsLoggedIn" justify="space-bewteen" color="secondary" @click="toLogin" >Login</v-btn>
            <v-btn rounded v-if="getIsLoggedIn" justify="space-bewteen" color="secondary" @click="toUserHome" >{{ getUser }}</v-btn>
            
          </v-col>
          <v-col>
            <v-btn rounded v-if="!getIsLoggedIn" justify="space-bewteen" color="secondary" @click="toCadastro">Cadastro</v-btn>
            <v-btn rounded v-if="getIsLoggedIn" justify="space-bewteen" color="secondary" @click="toUserGroup" > Grupo</v-btn>
          </v-col>
        </v-row>
        <v-row v-else>
          
        </v-row>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'

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
    toCadastro() {
      this.$router.push({name: 'cadastro'})
    },
    toUserHome() {
      this.$router.push({path: '/'})
    },
    toUserGroup() {
      this.$router.push({path: '/grupo/' + this.$store.getters.getGrupoId})
    }
  },
  computed: {
    ...mapGetters(['getIsLoggedIn','getUser', 'getGrupoId']),
    loggedIn() {
      this.isLoggedIn = getIsLoggedIn
    },
    getUsername() {
      this.username = getUsername
    },
    GrupoId() {
      return this.$store.getters.getGrupoId
    }

  }
};
</script>
