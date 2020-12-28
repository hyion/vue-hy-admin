import { createStore } from 'vuex'
import user from './modules/user'

const app = createStore({
  modules: {
    user
  }
})

export default app
