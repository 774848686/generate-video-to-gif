import axios from 'axios'
import qs from "qs"
import router from '../router'
import Vue from 'vue';
import envConfig from './env';
import { Toast } from 'vant';
Vue.use(Toast);
let isTip = false;
// 创建axios实例
const service = axios.create({
  withCredentials: true,
  baseURL: envConfig[process.env.NODE_ENV], // api的base_url
  timeout: 150000000 // 请求超时时间
})

let cookieInfo = {}
// request拦截器
service.interceptors.request.use(config => {
  if(config.method === "post") {
    config.headers = {
      'Content-Type':'application/json;charset=UTF-8'
    }
    config.data = config.data;
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if(isTip) return;
    if (res.errorCode === '400') {
      isTip = true;
      Toast.fail('登录失败，清重新登录');
      router.replace({
        path: '/login'
      });
    }
    if (!res.isSuccessed) {
      Toast.fail(res.errorDesc || '系统错误');
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    // console.log('err' + error)// for debug
    Toast.fail(error.message);
    return Promise.reject(error)
  }
)

export default service
