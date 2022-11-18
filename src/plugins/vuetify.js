import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2196f3",
        secondary: "#9351e0",
        accent: "#F76D65",
        error: "#E0AA51",
        warning: "#EAFC5B",
        info: "#ff9800",
        success: "#e91e63",
      },
    },
  },
});
