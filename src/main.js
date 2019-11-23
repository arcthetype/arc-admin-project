import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/svg'
import registerCp from './plugins/register_cp'
Vue.config.productionTip = false

Vue.use(registerCp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
