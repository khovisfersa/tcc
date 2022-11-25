<template>
  <v-container class="d-flex justify-center">
    <v-container>
      <v-card v-if="!getIsLoggedIn" elevation="0">
        <v-card-title color="text--secondary">Aplicação de TCC</v-card-title>
        <div>
          <v-card-text>
            <v-row> Aqui temos uma aplicação web para aprendizagem colaborativa de idiomas.</v-row>
            <v-row class="mt-10"> Você pode procurar por um grupo do idioma que você deseja aprender.</v-row>
            <v-row class="mt-10"> Depois de entrar em um grupo, Você e seu grupo receberão tarefas no idioma a ser aprendido. Essas tarefas lhe farão aprender mais sobre o idioma.</v-row>
          </v-card-text>
        </div>
      </v-card>
      <v-container v-else fluid>
        <h1 color="secondary"  class="">Aqui estão as tarefas que você poderá avaliar</h1>
        <v-row dense class="justify-start">
          <v-col
            v-for="card in tarefas"
            :key="card.title"
            :cols="6"
          >
            <v-card elevation="10" width="300">
               <v-card-title v-text="card.nome"></v-card-title>
               <v-card-subtitle>
                 <p>Atividade nivel  {{ card.nivel }} </p>
                 <p>Idioma  {{ card.idioma }}</p>
               </v-card-subtitle>
               <v-card-text>
                  <v-rating
                    v-model="card.nota"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    half-increments
                    hover
                    readonly
                    size="25"
                  ></v-rating>
               </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="secondary" @click="goToTarefa(card.grupo_id, card.tarefa_id)">
                  Avaliar tarefa
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'HelloWorld',

  data: () => ({
    tarefas: []
  }),
  computed: {
    ...mapGetters(['getIsLoggedIn', 'getUserId'])
  },
  async created() {
    await this.getTarefas()
  },
  methods:{
    async getTarefas() {
      await axios.post(this.$api + '/tarefas_avaliaveis', {
        usuario_id: this.getUserId
      })
      .then((res) => {
        this.tarefas = res.data
        console.log(this.tarefas)
      })
      .catch((err) => {
        console.log(err)
      })
    },

    goToTarefa(grupo_id, tarefa_id) {
      let link = grupo_id + '/' + tarefa_id
      this.$router.push({path:'/tarefa/' + link})
    }
  }
}
</script>
