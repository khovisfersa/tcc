import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2196f3",
        secondary: "#4caf50",
        accent: "#795548",
        error: "#f44336",
        warning: " #ff5722",
        info: "#ff9800",
        success: "#e91e63",
      },
    },
  },
});
