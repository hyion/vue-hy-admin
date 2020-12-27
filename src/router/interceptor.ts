import router from './index'
// import { RouteLocationNormalized, Router } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import settings from '../settings'

NProgress.configure({showSpinner: false});

const whiteNameList = ['/login', '/auth-redirect'] // no redirect whiteNameList

const getPageTitle = (key: string) => {
  if (key)
    return `${key} - ${settings.title}`
  return `${settings.title}`
}

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (false) {
    console.log(from)
  } else {
    if (whiteNameList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach((to) => {
  NProgress.done() // finish progress bar
  // set page title
  document.title = getPageTitle(to.meta.title)
})
