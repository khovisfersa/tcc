<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex justify-center">
        <v-btn color="secondary" to="/">Inicial</v-btn>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex justify-center">
        <v-row v-if="!isLoggedIn">
          <v-col>
            <v-btn justify="space-bewteen" color="secondary" to="login">Login</v-btn>
          </v-col>
          <v-col>
            <v-btn justify="space-bewteen" color="secondary" to="cadastro">Cadastro</v-btn>
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

  }),
  computed: {
    ...mapGetters(['getIsLoggedIn','getUsername']),
    loggedIn() {
      this.isLoggedIn = getIsLoggedIn
    },
    getUsername() {
      this.username = getUsername
    }

  }
};
</script>
