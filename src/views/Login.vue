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

export default {
  name: "Login",
  props: {
    source: String,
  },
  data: () => ({
      api: "http://localhost:3333",
      username: '',
      password: '',
    }),
  methods: {
    async login() {
      console.log("log in")
      let user_info = {
        username: this.username,
        password: this.password
      }

      let config = {
        withCredentials: true
      }

      await axios.post(this.$api + '/login', user_info)
      .then( (res) => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        this.$router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })

      // axios.defaults.headers.commom["Authorization"] = `Bearer ${data.token}`;

      // this.$router.push("/")
    }
  }
};
</script>

<style></style>
