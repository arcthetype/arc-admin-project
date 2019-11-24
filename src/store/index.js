import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import f from '@/utils/plugins_func'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['user']
})

let modules = {}
const requireModule = require.context('./modules', false, /\.js$/)
requireModule.keys().forEach(item => {
  let moduleName = f._getModuleName(item)
  let module = requireModule(item).default
  modules[moduleName] = module
})

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules,
  plugins: [vuexLocal.plugin]
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(requireModule.keys(), () => {
    // require the updated modules
    store.hotUpdate({ modules })
  })
}

export default store
