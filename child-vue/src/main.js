import singleSpaVue from 'single-spa-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const appOptions = {
  el: '#vue',
  router,
  render: h => h(App)
}

if (window.singleSpaNavigate) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = 'http://124.220.207.133:10000/'
}

const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions,
})


// 协议接入
export const {bootstrap, mount, unmount} = vueLifeCycle

// 需要父应用加载子应用，将子应用打包成lib

// 子应用

// bootstrap mount unmount 
// single-spa single-spa-vue

