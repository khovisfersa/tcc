<template>
  <v-container>
    <div>
      <h1 class="text--secondary">Cadastro</h1>
      <div class="px-4">
        <v-card-text>
          <v-form ref="registerForm" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="firstName" :rules="[rules.required]" label="Nome" maxlength="20" required>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="lastName" :rules="[rules.required]" label="Sobrenome" maxlength="20" required>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="login" :rules="[rules.required]" label="user name" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                  label="Password" hint="Pelo menos 8 caracteres" counter @click:append="show1 = !show1">
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                  label="Confirm Password" counter @click:append="show1 = !show1">
                </v-text-field>
              </v-col>
              <v-spacer></v-spacer>
              <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                <v-btn x-large block :disabled="!valid" color="success" @click="validate&&register(firstName, lastName, email, password, login)">Cadastrar</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </div>
    </div>
  </v-container>
</template>

<script src="">
import axios from 'axios'

export default {
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async register(firstName, lastName, email, password, login) {
      let user_info = {
        nome: firstName,
        sobrenome: lastName,
        email: email,
        username: login,
        password: password

      }
      await axios.post("http://15.228.46.82:3333/cadastro", user_info)
      .then((req,res) => {
        this.firstName = "",
        this.lastName = "",
        this.email = "",
        this.password = "",
        this.verify = ""
        this.$router.push("/")
      })
      .catch((err) => {
        console.log("Deu ruim")
        console.log(err)
      })
    }
  },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" }
    ],
    valid: true,

    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  })
}
</script>