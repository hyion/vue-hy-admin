import { reactive } from 'vue'
import { UserState } from './types'

export const State: UserState = {
  token: '',
  isOpened: false,
  user: {}
}
export function createState() {
  return reactive(State)
}
