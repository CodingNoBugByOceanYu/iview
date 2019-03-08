
import NProgress from 'nprogress' // progress bar
import errorCode from '@/const/errorCode'
import router from "@/router/router"
import axios from 'axios'
import iView from 'iview';
import 'nprogress/nprogress.css'

let instance = axios.create();

instance.defaults.timeout = 20000
// 返回其他状态吗
instance.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500 // 默认的
}

instance.defaults.withCredentials = true // 表示跨域请求时是否需要使用凭证, 默认false
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// NProgress Configuration
NProgress.configure({
    showSpinner: false
})

// HTTPrequest拦截
instance.interceptors.request.use(config => {
    NProgress.start() // start progress bar
    config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('access_token')
    return config
}, error => {
    return Promise.reject(error)
})


// HTTPresponse拦截
instance.interceptors.response.use(res => {
    NProgress.done()
    const status = Number(res.status) || 200
    const message = res.data.msg || errorCode[status] || errorCode['default']
    if (status === 401) {
        router.push({ path: '/login' })
        return
    }

    if (status !== 200 || res.data.code === 1) {
        iView.$Message.error(message);
        return Promise.reject(new Error(message))
    }

    return res
}, error => {
    NProgress.done()
    return Promise.reject(new Error(error))
})

export default instance
