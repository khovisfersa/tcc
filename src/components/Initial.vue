<template>
  <v-container class="d-flex justify-center">
      <div class="">
        <v-card elevation="0">
          <v-card-title color="text--secondary">Aplicação de TCC</v-card-title>
          <div>
            <v-card-text>
              <v-row> Aqui temos uma aplicação web para aprendizagem colaborativa de idiomas.</v-row>
              <v-row class="mt-10"> Você pode procurar por um grupo do idioma que você deseja aprender.</v-row>
              <v-row class="mt-10"> Depois de entrar em um grupo, Você e seu grupo receberão tarefas no idioma a ser aprendido. Essas tarefas lhe farão aprender mais sobre o idioma.</v-row>
            </v-card-text>
          </div>
        </v-card>
      </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
