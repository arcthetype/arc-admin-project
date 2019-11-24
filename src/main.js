import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import mock from '@/mock'
import registerComponent from './plugins/component'
import registerService from './plugins/service'
import routerInterceptor from './plugins/router'
import './plugins/svg'
import './assets/styles/global/index.scss'

Vue.config.productionTip = false
// mock模式下开启
if (process.env.VUE_APP_ENV === 'mock') {
  mock.init()
}
// 注册Vue插件
Vue.use(routerInterceptor)
Vue.use(registerComponent)
Vue.use(registerService)
Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
