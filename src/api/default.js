import request from '@/router/axios'

export const addInfo = (type,data) => {
    return request({
        url: '/oracleDemo/oracleDemo/',
        method: type,
        data: data
    })
}
