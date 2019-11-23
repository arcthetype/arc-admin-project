// 自动导入svg icon
const modules = require.context('@/assets/icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(modules)
