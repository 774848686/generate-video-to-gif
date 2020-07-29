import {request,assignKeysA} from '@/utils';
export const loginIn = (params)=>{
    return request({
        url:'/user/login',
        method: 'post',
        data: assignKeysA({}, [params], ['account','password','deviceNum'])
    })
}
export const registerIn = (params)=>{
    return request({
        url:'/user/register',
        method: 'post',
        data: assignKeysA({}, [params], ['account','password','source','deviceNum'])
    })
}
