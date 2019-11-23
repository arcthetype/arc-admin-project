import { COMPONENT_PREFIX } from '@/config'
const requireModule = require.context('@/components', true, /\.vue$/)

function _getModuleName(relativePath) {
  let suffixIndex = relativePath.lastIndexOf('.')
  let lastSeqIndex = relativePath.lastIndexOf('/')
  return relativePath.slice(lastSeqIndex + 1, suffixIndex)
}

function _getParentName(relativePath) {
  let parseNameList = relativePath.split('/')
  let fileIndex = parseNameList.findIndex(item => item === 'index.vue')
  if (fileIndex - 1 < 0) {
    throw new Error(`${relativePath} -- invalid .vue file`)
  }
  return parseNameList[fileIndex - 1]
}

function install(Vue) {
  requireModule
    .keys()
    .filter(item => !_getModuleName(item).includes('_'))
    .forEach(item => {
      let vmInstance = requireModule(item).default
      let componentName = vmInstance.name
      if (componentName) {
        componentName = COMPONENT_PREFIX
          ? COMPONENT_PREFIX + componentName
          : componentName
      } else if (_getModuleName(item) !== 'index') {
        componentName = COMPONENT_PREFIX
          ? COMPONENT_PREFIX + _getModuleName(item)
          : _getModuleName(item)
      } else if (_getModuleName(item) === 'index') {
        componentName = COMPONENT_PREFIX
          ? COMPONENT_PREFIX + _getParentName(item)
          : _getParentName(item)
      }
      Vue.component(componentName, vmInstance)
    })
}

export default { install }
