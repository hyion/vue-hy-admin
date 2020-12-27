import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from '/@/router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.scss'

import '/@/router/interceptor'

const app = createApp(App)
setupRouter(app)
app.use(ElementPlus)

router.isReady().then(() => {
  app.mount('#app')
})
