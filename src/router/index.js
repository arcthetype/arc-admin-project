import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/main/index'
  }
]
const requireModule = require.context('./modules', false, /\.js$/)
requireModule.keys().forEach(item => {
  let module = requireModule(item).default
  routes = routes.concat(module)
})

const router = new VueRouter({
  mode: process.env.BASE_URL ? 'history' : 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
