import Service from './service'
import { LoginParams } from './types'

export function Login(data: LoginParams) {
  return Service({
    url: 'login',
    method: 'post',
    data: data
  })
}

/** 获取文章列表 */
export function GetArticles(data: number) {
  return Service({
    url: `article?page=${data}`,
    method: 'get',
  })
}

/** 获取文章详情 */
export function GetArticleDetail(data: any) {
  return Service({
    url: `article/${data}`,
    method: 'get',
  })
}

/** 添加文章 */
export function CreateArticle(data: any) {
  return Service({
    url: 'article',
    method: 'post',
    data,
  })
}

/** 获取评论数据 */
export function GetComment() {
  return Service({
    url: 'comment',
    method: 'get',
  })
}

/** 删除评论 */
export function DeleteComment(data: any) {
  return Service({
    url: 'comment',
    method: 'delete',
    data,
  })
}

/** 获取短语数据 */
export function GetEnvelope() {
  return Service({
    url: 'envelope',
    method: 'get'
  })
}

/** 删除单个短语休息 */
export function DeleteEnvelope(data: any) {
  return Service({
    url: 'envelope',
    method: 'get',
    data
  })
}

/** 获取个人介绍页数据 */
export function GetMyself() {
  return Service({
    url: 'myself',
    method: 'get'
  })
}
