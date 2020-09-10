import '@mdi/font/css/materialdesignicons.css' 
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })
Vue.config.productionTip = false

new Vue({
  iconfont: 'mdi',
  router,
  render: h => h(App)
}).$mount('#app')
