import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { AppRouteRecordRaw } from './types'
import { scrollBehavior } from './scrollBehavior'

export const LAYOUT = () => import('/@/layouts/index.vue');
const loadView = (view: string) => (): any => import(`/@/views/${view}/index.vue`);

export const hashRouter = createWebHashHistory()

export const constantRouterMap = [
  {
    path: '/login',
    name: 'Login',
    component: loadView('Login'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('/@/views/Login/authredirect.vue'),
    hidden: true
  },
  {
    path: '',
    component: LAYOUT,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: loadView('Dashboard'),
        name: 'Dashboard',
        meta: {title: 'dashboard', icon: 'dashboard', noCache: true}
      }
    ]
  },
]

const router = createRouter({
  history: hashRouter,
  routes: constantRouterMap as RouteRecordRaw[],
  strict: true,
  scrollBehavior: scrollBehavior,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
