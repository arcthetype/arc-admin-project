import http from '@/utils/http'

export default {
  namespaced: true,
  login(data) {
    return http({
      url: '/user/login',
      method: 'post',
      data
    })
  },
  logout() {
    return http({
      url: '/user/logout',
      method: 'post'
    })
  },
  isLogin() {
    return http({
      url: '/check/isLogin',
      method: 'get'
    })
  }
}
