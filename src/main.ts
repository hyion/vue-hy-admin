import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from '/@/router'
// import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import '/@/styles/index.scss'
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
VueMarkdownEditor.use(vuepressTheme)

import '/@/router/interceptor'

// 加载公共组件
import components from '/@/components'

const app = createApp(App)
setupRouter(app)
app.use(ElementPlus, { size: 'small', locale })
app.use(VueMarkdownEditor)
// app.use(components)

Object.keys(components).forEach((key: string) => {
  const name = key.replace(/(\w)/, (v: string) => v.toUpperCase())
  // @ts-ignore
  app.component(name, components[key])
})

router.isReady().then(() => {
  app.mount('#app')
})
