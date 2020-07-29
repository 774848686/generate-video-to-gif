import Store from './Store'
const userKey = 'a0f0f917e8e13d7da3c10328aa1df1a6';
const globalKey = 'b4176560266fb35b06f193dc08af52f0'
export function getUserKey() {
    return JSON.parse(Store.get(userKey) || '{}')
}
export function setUserKey(value) {
    return Store.set(userKey,value)
}
export function deleUserKey() {
    return Store.del(userKey)
}
export function getGlobalKey() {
    return JSON.parse(Store.get(globalKey) || '{}')
}
export function setGlobalKey(value) {
    return Store.set(globalKey,value)
}
export function delGlobalKey() {
    return Store.del(globalKey)
}