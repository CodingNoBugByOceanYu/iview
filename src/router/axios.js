
import NProgress from 'nprogress' // progress bar
import errorCode from '@/const/errorCode'
import router from "@/router/router"
import axios from 'axios'
import 'nprogress/nprogress.css'

axios.defaults.timeout = 30000
// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500 // 默认的
}

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// NProgress Configuration
NProgress.configure({
    showSpinner: false
})

// HTTPrequest拦截
axios.interceptors.request.use(config => {
    NProgress.start() // start progress bar
    config.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('access_token')
    console.log('config', config);
    return config
}, error => {
    return Promise.reject(error)
})


// HTTPresponse拦截
axios.interceptors.response.use(res => {
    NProgress.done()
    const status = Number(res.status) || 200
    const message = res.data.msg || errorCode[status] || errorCode['default']
    if (status === 401) {
        router.push({ path: '/login' })
        return
    }

    if (status !== 200 || res.data.code === 1) {
        alert(message);
        return Promise.reject(new Error(message))
    }

    return res
}, error => {
    NProgress.done()
    return Promise.reject(new Error(error))
})

export default axios
