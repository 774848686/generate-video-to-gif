import {logIn} from '@/api/report';
export const reportLog=(type,extra={})=>{
    return new Promise(resolve=>{
        let params =Object.assign({type,...extra},window.common.Gdata) ;
        logIn(params).then(res=>{
            resolve(res)
        })
    })
}