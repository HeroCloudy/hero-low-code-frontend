import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/schema-gen'
  },
  {
    path: '/schema-gen',
    name: 'schema-gen',
    component: () => import('@/views/schema-gen/index.vue'),
    meta: {
      title: 'Schema 生成器'
    }
  },
  {
    path: '/form-gen',
    name: 'form-gen',
    component: () => import('@/views/form-gen/index.vue'),
    meta: {
      title: '表单生成器'
    }
  },
  {
    path: '/table-gen',
    name: 'table-gen',
    component: () => import('@/views/table-gen/index.vue'),
    meta: {
      title: '表格生成器'
    }
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
