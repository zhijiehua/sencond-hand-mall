
import axios from 'axios'
import QS from 'qs'
// import { Notification, Loading } from 'element-ui'
// import store from '@/store'
// import router from '../router'
// import { getStorage, getCookie, downLoad } from '@/config/easier'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// NProgress.configure({ showSpinner: false })
NProgress.configure({ ease: 'ease', speed: 500 })

// 环境的切换   //index.html 配置 window.API_ROOT

// 接口地址
const URL_HOST = window.location.host
console.log(URL_HOST)
var DEV_HOST = (() => {
  if (window.location.hostname === 'localhost') {
    return '/api/'
  } else {
    return DEV_HOST
  }
})()
if (DEV_HOST) {
  axios.defaults.baseURL = DEV_HOST
} else {
  axios.defaults.baseURL = process.env.DEV_HOST
}
// 请求超时时间
axios.defaults.timeout = 10000

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.defaults.withCredentials = true
// 请求拦截器
// var loading = null;
axios.interceptors.request.use(config => {
  // loading = Loading.service({
  //     body: true,
  //     lock: true,
  //     text: '拼命加载中...',
  //     spinner: 'el-icon-loading',
  //     background: 'rgba(0, 0, 0, 0.7)',
  // });

//   const userInfo = getCookie('userInfo')
//   if (userInfo) {
//     config.headers['wo-music-token'] = JSON.parse(userInfo)['token']
//   }
  NProgress.start()
  return config
}, error => {
  // loading.close();
  return Promise.error(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  if (response.status === 200) {
    // loading.close();
    const { code, msg } = response.data
    if (code === -1 || code === 400 || code === 2005) {
      // loading.close();
      Notification.error({
        title: '错误',
        message: msg
      })
    } else if (code === 0) {
      // loading.close();
      Notification({
        title: '成功',
        type: 'success',
        message: msg
      })
    }
    // if (response.headers['content-disposition']) {
    //   downLoad(response.data, response.headers['content-disposition'].split(';')[1].split('=')[1])
    // }
    NProgress.done()
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}, error => {
  // loading.close();
  // 服务器状态码不是200的情况
  if (error.response.status) {
    switch (error.response.status) {
      case 401:

        Notification.error({
          title: '错误',
          message: '登录过期，请重新登录'
        })

        // 清除token
        // localStorage.removeItem('token')
        // store.commit('loginSuccess', null)
        // setTimeout(() => {
        //   router.replace({
        //     path: '/login',
        //     query: {
        //       redirect: router.currentRoute.fullPath
        //     }
        //   })
        // }, 1000)
        break
      case 404:
        Notification.error({
          title: '错误',
          message: '网络请求不存在'
        })
        break
      case 504:
        Notification.error({
          title: '错误',
          message: '服务器内部异常'
        })
        break
        // 其他错误，直接抛出错误
      default:
        Notification.error({
          title: '错误',
          message: error.response.data.msg
        })
    }
    return Promise.reject(error.response)
  }
})

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => { resolve(res.data) })
      .catch(err => { reject(err.data) })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params = {}, dataType = 'json', responseType = 'json') {
  return new Promise((resolve, reject) => {
    params = dataType === 'json' ? params : QS.stringify(params)
    responseType = responseType === 'blob' ? 'blob' : responseType
    axios.post(url, params, { responseType })
      .then(res => { resolve(res.data) })
      .catch(err => { reject(err.data) })
  })
}
