// export default app
import { readonly } from 'vue'
import { createAction } from './action'
import { createState } from './state'
import { createPersistStorage } from './storage'
import { UserState } from './types'

const state = createState()
const action = createAction(state)

export const useStore = () => {
  const store = {
    state: createPersistStorage<UserState>(state),
    action: readonly(action)
  }
  return store
}
