import mainLayout from '@/layout/main'

export default [
  {
    path: '/main',
    component: mainLayout,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import(/* webpackChunkName: "Index" */ '@/views/main'),
        meta: {
          title: '主模块'
        }
      }
    ]
  }
]
