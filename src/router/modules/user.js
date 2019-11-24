import userLayout from '@/layout/user'

export default [
  {
    path: '/user',
    component: userLayout,
    meta: {
      title: '用户'
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () =>
          import(/* webpackChunkName: "login" */ '@/views/user/login'),
        meta: {
          title: '登录'
        }
      }
    ]
  }
]
