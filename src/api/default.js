import 'nprogress/nprogress.css'
import NProgress from 'nprogress' // progress bar

import axios from 'axios'

NProgress.configure({
    showSpinner: false
})

export const hughAxios = (type, url, params, data) => {
    return axios({
        method: type,
        url: url,
        headers: {
            Authorization: 'Bearer ' + window.localStorage.getItem('access_token')  //token
        },
        params: params,
        data: data
    })
}
