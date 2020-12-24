import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from '/@/router'

import './styles/index.scss'

const app = createApp(App)
setupRouter(app)

router.isReady().then(() => {
  app.mount('#app')
})
