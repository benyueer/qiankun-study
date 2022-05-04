/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

let instance = null
function render(props) {
  const { container } = props
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if(!window.__POWERED_BY_QIANKUN__) {
  render()
} else {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

export async function bootstrap(props) {}

export async function mount(props) {
  console.log('mount props', props)
  render(props)
}

export async function unmount(props) {
  instance.$destroy()
}