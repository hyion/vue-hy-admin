import Service from './service'
import { LoginParams } from './types'

export function Login(data: LoginParams) {
  return Service({
    url: 'login',
    method: 'post',
    data: data
  })
}

export function GetArticles(data: any) {
  return Service({
    url: 'article',
    method: 'get',
    data: data,
  })
}

export function GetArticleDetail(data: any) {
  return Service({
    url: `article/${data}`,
    method: 'get',
  })
}

export function CreateArticle(data: any) {
  return Service({
    url: 'article',
    method: 'post',
    data,
  })
}

export function GetComment() {
  return Service({
    url: 'comment',
    method: 'get',
  })
}

export function DeleteComment(data: any) {
  return Service({
    url: 'comment',
    method: 'delete',
    data,
  })
}
