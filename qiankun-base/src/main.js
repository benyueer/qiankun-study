import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

// 引入qiankun
import { registerMicroApps, start } from 'qiankun'

// 注册子应用
const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10000', // 默认会加载这个html，解析其js，并动态执行，子应用必须支持跨域
    container: '#vue',
    activeRule: '/vue',
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000', // 默认会加载这个html，解析其js，并动态执行，子应用必须支持跨域
    container: '#react',
    activeRule: '/vue',
  },
]

registerMicroApps(apps)

start()

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
