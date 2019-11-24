import f from '@/utils/plugins_func'

const requireModule = require.context('@/service', false, /\.js$/)

function install(Vue) {
  let _service = {}
  requireModule.keys().forEach(item => {
    let module = requireModule(item).default
    if (module.namespaced) {
      let moduleName = f._getModuleName(item)
      _service[moduleName] = {}
      for (let attr in module) {
        if (attr !== 'namespaced') {
          _service[moduleName][attr] = module[attr]
        }
      }
    } else {
      for (let attr in module) {
        _service[attr] = module[attr]
      }
    }
  })
  Object.defineProperties(Vue.prototype, {
    $service: {
      get: () => _service
    }
  })
}

export default { install }
