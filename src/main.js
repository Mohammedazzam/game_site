import Vue from 'vue'
import App from './App.vue'
import router from './router'

////////////////////////
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
  // Install BootstrapVue
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)
////////////////////////
  import './assets/css/homepage.css'
////////////////////////
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
////////////////////////

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
