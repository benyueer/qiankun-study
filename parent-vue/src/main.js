import { registerApplication, start } from 'single-spa'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}
registerApplication('myVueApp', 
  async () => {
    console.log('[myVueApp] bootstrap')
    await loadScript('http://124.220.207.133:10000/js/chunk-vendors.js')
    await loadScript('http://124.220.207.133:10000/js/app.js')
    return window.singleSpaVue
  },
  location => location.pathname.startsWith('/vue')
)

start()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
