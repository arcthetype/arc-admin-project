import router from '@/router'
import Nprogress from 'nprogress'
import store from '@/store'

function install() {
  router.beforeHooks.unshift((to, from, next) => {
    if (to.path != '/user/login') {
      // @todo 判断当前角色，与路由中角色是否匹配
      store.dispatch('user/actionIsLogin', {
        succCall: () => {
          next()
        },
        failCall: () => {
          next({ name: 'Login' })
        }
      })
    } else {
      next()
    }
  })

  router.beforeEach((to, from, next) => {
    Nprogress.start()
    next()
  })

  router.afterEach(to => {
    let match = to.matched
    let title = match.map(item => item.meta.title || '').join('|')
    document.title = title
    Nprogress.done()
  })
}

export default { install }
