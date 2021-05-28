import cookie from "cookie_js";
import { ColorPicker } from "element-ui";
const adminToken = 'admin_token' 
const userName = 'username'
// 获取cookie
export function getToken(){
  return  cookie.get(adminToken)
}

// 存储cookie
export function setToken(value){
    return cookie.set(adminToken,value)
}

// 存储username
export function setName(name){
    return cookie.set(userName,name)
}
// 获取username
export function getName(){
    return cookie.get(userName)
}

// 删除cookie
export function removeToken(){
    return cookie.remove(adminToken)
}

// 删除用户名
export function removeName(){
    return cookie.remove(userName)
}