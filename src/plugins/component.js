import config from '@/config'
import f from '@/utils/plugins_func'

const COMPONENT_PREFIX = config.COMPONENT_PREFIX
const requireModule = require.context('@/components', true, /\.vue$/)

function install(Vue) {
  requireModule
    .keys()
    .filter(item => !f._getModuleName(item).includes('_'))
    .forEach(item => {
      let vmInstance = requireModule(item).default
      let componentName = vmInstance.name
      if (componentName) {
        componentName = COMPONENT_PREFIX
          ? COMPONENT_PREFIX + componentName
          : componentName
      } else if (f._getModuleName(item) !== 'index') {
        componentName = COMPONENT_PREFIX
          ? COMPONENT_PREFIX + f._getModuleName(item)
          : f._getModuleName(item)
      } else if (f._getModuleName(item) === 'index') {
        componentName = COMPONENT_PREFIX
          ? COMPONENT_PREFIX + f._getParentName(item)
          : f._getParentName(item)
      }
      Vue.component(componentName, vmInstance)
    })
}

export default { install }
