export default {
  _transformModuleNameToCamel(moduleName) {
    if (moduleName.search(/[_-]/) == -1) {
      return moduleName
    }
    let moduleNameSplit = moduleName.split(/[_-]/)
    if (moduleNameSplit.length) {
      return moduleNameSplit.reduce((preStr, cur, index) => {
        return index === 0
          ? preStr + cur
          : preStr + cur.slice(0, 1).toUpperCase() + cur.slice(1)
      }, '')
    }
  },
  _getModuleName(relativePath) {
    let suffixIndex = relativePath.lastIndexOf('.')
    let lastSeqIndex = relativePath.lastIndexOf('/')
    let moduleName = relativePath.slice(lastSeqIndex + 1, suffixIndex)
    return this._transformModuleNameToCamel(moduleName)
  },
  _getParentName(relativePath) {
    let parseNameList = relativePath.split('/')
    let fileIndex = parseNameList.findIndex(item => item === 'index.vue')
    if (fileIndex - 1 < 0) {
      throw new Error(`${relativePath} -- invalid .vue file`)
    }
    let parentName = parseNameList[fileIndex - 1]
    return this._transformModuleNameToCamel(parentName)
  }
}
