import axios from 'axios'
import config from '@/config'
import store from '@/store'
import Nprogress from 'nprogress'

const ajaxDefaultConfig = config.ajaxDefaultConfig || {}
const http = axios.create(ajaxDefaultConfig)

// Add a request interceptor
http.interceptors.request.use(
  function(config) {
    Nprogress.start()
    let token = store.state.user.token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  function(error) {
    Nprogress.done()
    return Promise.reject(error)
  }
)

// Add a response interceptor
http.interceptors.response.use(
  function(response) {
    Nprogress.done()
    if (response && response.data.code === 401) {
      // 跳转登录
    }
    return response.data
  },
  function(error) {
    Nprogress.done()
    return Promise.reject(error)
  }
)

export default http
