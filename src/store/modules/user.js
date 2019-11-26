import userDao from '@/service/user'
import { Message } from 'element-ui'
import { Base64 } from 'js-base64'
import { SET_TOKEN, SET_USER_INFO } from '../types'

export default {
  namespaced: true,
  state: {
    token: null,
    userInfo: null,
    username: ''
  },
  getters: {
    getUserInfo: state => state.userInfo,
    getToken: state => state.token,
    getUsername: state => state.username
  },
  mutations: {
    [SET_TOKEN](state, token) {
      state.token = token
    },
    [SET_USER_INFO](state, userInfo) {
      state.userInfo = userInfo
      state.username = userInfo ? JSON.parse(userInfo).sub : ''
    }
  },
  actions: {
    actionLogin({ commit }, args) {
      return userDao
        .login({
          userName: args.name,
          password: args.password
        })
        .then(
          res => {
            if (res.success) {
              commit(SET_TOKEN, res.data)
              commit(SET_USER_INFO, Base64.decode(res.data.split('.')[1]))
              args.callback && args.callback()
            } else {
              Message.error(res.message)
            }
          },
          err => {
            console.error(err)
          }
        )
    },
    actionIsLogin({ commit }, args) {
      return userDao.isLogin().then(
        res => {
          if (res.success) {
            if (res.data) {
              args.succCall && args.succCall()
            } else {
              commit(SET_TOKEN, null)
              commit(SET_USER_INFO, null)
              args.failCall && args.failCall()
            }
          } else {
            Message.error(res.message)
          }
        },
        err => {
          console.error(err)
        }
      )
    }
  }
}
