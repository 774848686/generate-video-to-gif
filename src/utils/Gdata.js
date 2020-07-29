export const getGdata = (query)=>{
    let target = window.common && window.common.Gdata || {}
    let Gdata = Object.assign(target,query);
    window.common = {
        Gdata
    };
}