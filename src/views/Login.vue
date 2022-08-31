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
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </div>
              <div class="d-flex justify-center pt-10">
                <v-btn color="secondary" to="/">Login</v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String,
  },
};
</script>

<style></style>
