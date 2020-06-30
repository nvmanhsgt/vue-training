import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// import css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Install VueRouter
Vue.use(VueRouter)
const router = new VueRouter({mode: 'history', routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
