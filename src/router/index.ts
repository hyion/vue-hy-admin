import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { AppRouteRecordRaw } from './types'
import { scrollBehavior } from './scrollBehavior'

export const hashRouter = createWebHashHistory()

const basicRoutes = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home',
    meta: {
      title: 'Root',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login/Login.vue'),
    meta: {
      title: '登录',
    },
  }
]

const router = createRouter({
  history: hashRouter,
  routes: basicRoutes as RouteRecordRaw[],
  strict: true,
  scrollBehavior: scrollBehavior,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
