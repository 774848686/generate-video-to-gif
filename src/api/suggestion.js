
import {request,assignKeysA} from '@/utils';
export const insertSuggestion = (params)=>{
    return request({
        url:'/feedBack/insert',
        method: 'post',
        data: assignKeysA({}, [params], ['content','userId','link'])
    })
}