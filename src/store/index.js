import Vue from "vue";
import Vuex from "vuex";
// import Cookie from "cookie_js";//使用cookie的时候要下载依赖并且引入
// import {Login} from "@/api/login";//模拟actions方法异步改变数据,把登陆接口拿到这里面来
Vue.use(Vuex);
import app from "./modules/app.js";
import login from "./modules/login.js";

// 基础写法
// export default new Vuex.Store({
//   // 18课时详见ppt
//   state: {
//     isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
//     count:10
//   },
//   getters:{
//     count: state =>state.count + 10
//   },
//   // 修改state里面的数据
//   mutations: {//必须的 同步 没有回调处理事情
//     SET_COLLAPSE(state){
//       state.isCollapse = !state.isCollapse;
//       // console.log(state.isCollapse);
//       // localStorage.setItem('isCollapse',JSON.stringify(state.isCollapse));
//       sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
//       // 使用cookie存储数据
//       // Cookie.set('isCollapse',JSON.stringify(state.isCollapse));
//       // console.log(Cookie.get('isCollapse'));
//     },
//     SET_COUNT(state,value){
//       state.count=value
//       console.log(state.count)
//     }
//   },
//   actions: {
//     // 模拟actions 异步改变数据
//     // login(content,requestData){
//     //   return new Promise((resolve,reject) =>{
//     //     Login(requestData).then((response) =>{
//     //       resolve(response)
//     //     }).catch(error =>{
//     //       reject(error)
//     //     })
//     //   })
//     // }
//   },
//   modules: {},
// });

// **********************************
// 模块写法
export default new Vuex.Store({
  modules:{
    app,
    login,
  }
 
});