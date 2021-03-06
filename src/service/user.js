import http from '@/utils/http'

export default {
  namespaced: true,
  login(data) {
    return http({
      url: '/login/signIn',
      method: 'post',
      data
    })
  },
  isLogin() {
    return http({
      url: '/login/isLogin',
      method: 'get'
    })
  }
}
