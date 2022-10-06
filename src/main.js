import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AudioRecorder from 'vue-audio-recorder'
import VueRecord from '@codekraft-studio/vue-record'


Vue.use(VueRecord)
Vue.use(AudioRecorder)

Vue.config.productionTip = false

Vue.prototype.$api = "http://localhost:3333"


new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
