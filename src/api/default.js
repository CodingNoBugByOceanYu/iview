import request from '@/router/axios'

export const addInfo = (type,data) => {
    return request({
        url: '/oracleDemo/oracleDemo/',
        method: type,
        data: data
    })
}

export const getInfos = (type, params) => {
    return request({
        url: '/oracleDemo/oracleDemo/oracleDemoPage',
        method: type,
        params: params
    })
}

export const delInfo = (type, id) => {
    return request({
        url: '/oracleDemo/oracleDemo/' + id,
        method: type
    })
}

export const editInfo = (type, id) => {
    return request({
        url: '/oracleDemo/oracleDemo/' + id,
        method: type
    })
}