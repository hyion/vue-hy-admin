import { reactive } from 'vue'
import { UserState } from './types'

const updateToken = (state: UserState) => {
  return (token: string) => {
    state.token = token
  }
}

const updateOpen = (state: UserState) => {
  return (open: boolean) => {
    state.isOpened = open
    console.log('isOpened--', state.isOpened)
  }
}

export function createAction(state: UserState) {
  return reactive({
    updateToken: updateToken(state),
    updateOpen: updateOpen(state)
  })
}
