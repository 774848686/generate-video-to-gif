import {request,assignKeysA} from '@/utils';
export const logIn = (params)=>{
    return request({
        url:'/record/log',
        method: 'post',
        data: assignKeysA({}, [params], ['categoryId','detailId','position','deviceNum','spm','type','source','uid'])
    })
}