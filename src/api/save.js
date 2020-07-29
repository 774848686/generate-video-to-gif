import {request,assignKeysA} from '@/utils';
export const JobCancel = (params)=>{
    return request({
        url:'/userJobCollect/cancel',
        method: 'post',
        data: assignKeysA({}, [params], ['jobId','userId'])
    })
}
export const JobCollect = (params)=>{
    return request({
        url:'/userJobCollect/collect',
        method: 'post',
        data: assignKeysA({}, [params], ['jobId','userId'])
    })
}
export const JobPage = (params)=>{
    return request({
        url:'/userJobCollect/page',
        method: 'post',
        data: assignKeysA({}, [params], ['userId','pageNum','pageSize'])
    })
}