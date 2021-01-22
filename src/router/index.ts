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
        meta: {title: '首页', icon: 'dashboard', noCache: true}
      },
      {
        path: 'myself',
        component: loadView('AboutMe'),
        name: 'AboutMe',
        meta: {title: '关于我', icon: 'dashboard', noCache: true}
      },
      {
        path: 'article',
        component: loadView('Article'),
        name: 'Article',
        meta: {title: '文章列表', icon: 'dashboard', noCache: true}
      },
      {
        path: 'article-detail/:id',
        component: () => import('/@/views/Article/detail.vue'),
        name: 'ArticleDetail',
        meta: {title: '文章详情', icon: 'dashboard', noCache: true}
      },
      {
        path: 'setting',
        component: loadView('Sett'),
        name: 'Setting',
        meta: {title: '设置', icon: 'dashboard', noCache: true}
      },
      {
        path: 'envelope',
        component: loadView('Envelope'),
        name: 'Envelope',
        meta: {title: '备忘录', icon: 'dashboard', noCache: true}
      },
      {
        path: 'comment',
        component: loadView('Comment'),
        name: 'Comment',
        meta: {title: '评论信息', icon: 'dashboard', noCache: true}
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
