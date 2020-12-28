import { reactive } from 'vue'
import { UserState } from './types'

const updateToken = (state: UserState) => {
  return (token: string) => {
    state.token = token
  }
}

export function createAction(state: UserState) {
  return reactive({
    updateToken: updateToken(state)
  })
}
