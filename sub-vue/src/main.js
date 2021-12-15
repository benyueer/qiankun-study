import Vue from 'vue'
import App from './App.vue'
import store from './store'
import routes from './router'
import './public-path'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
