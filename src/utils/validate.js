/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 是否为2位数字 */
export function validateNumber(num) {
  const reg = /^[0-9]{1}\d*(\.\d{1,2})?$/;
  return reg.test(num);
}

/*
 * 是否为整数
 */
export function validateInteger(num) {
  if (typeof num === 'number') {
    return num % 1 === 0;
  } else if (typeof num === 'string') {
    return num.indexOf('.') < 0 && num % 1 === 0;
  } else {
    return false;
  }
}
/**
 * 是否为正确手机号
 */
export function validateTel(num){
  const reg = /^1[3456789]\d{9}$/;
  return reg.test(num);
}
