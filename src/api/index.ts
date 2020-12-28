import Service from './service'
import { LoginParams } from './types'

export function Login(data: LoginParams) {
  return Service({
    url: 'login',
    method: 'post',
    data: data
  })
}
