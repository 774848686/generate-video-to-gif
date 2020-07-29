import {request,assignKeysA} from '@/utils';
export const getDetail = (params)=>{
    return request({
        url:'/detail/detail',
        method: 'post',
        data: assignKeysA({}, [params], ['position','uid','spm','source'])
    })
}
