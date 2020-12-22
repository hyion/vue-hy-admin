import Service from './service'

export function articleList(data?: any) {
  return Service({
    url: data ? 'article/' : `article/?from=list`,
    method: 'get',
    data: data
  })
}
