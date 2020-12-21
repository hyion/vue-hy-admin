/**
 * 封装Axios
 * 处理请求、响应错误信息
 */
import axios from 'axios' // 引用axios

// create an axios instance
const request = axios.create({
  // baseURL: 'https://activity.mongacloud.com/',
  baseURL: 'https://dev-activity.mongacloud.com/',
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
request.interceptors.request.use(
  config => {
    // do something before request is sent
    // config.headers['-Token'] = getToken()
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  response => {
    const res = response.data // res is my own data
    if (res.code == 200) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(new Error(res.msg || 'Error'))
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default request // 导出封装后的axios
