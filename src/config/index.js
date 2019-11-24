export default {
  /**
   * 组件名称前缀，如不需要可不配置
   */
  COMPONENT_PREFIX: 'Arc',
  /**
   * ajax默认配置
   */
  ajaxDefaultConfig: {
    timeout: 10000,
    baseURL: process.env.VUE_APP_API
  }
}
