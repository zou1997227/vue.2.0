import {Login} from "@/api/login"
import {setToken,setName,getName,removeToken,removeName} from "@/utils/app"


  const  state = {
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
        count:10,
        token:'',
        username:getName() || '',
      };

    const  getters = {
        count: state =>state.count + 10
      };
      // 修改state里面的数据
    const  mutations = {
      //必须的 同步 没有回调处理事情
        SET_COLLAPSE(state){
          state.isCollapse = !state.isCollapse;
          // console.log(state.isCollapse);
          // localStorage.setItem('isCollapse',JSON.stringify(state.isCollapse));
          sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
          // 使用cookie存储数据
          // Cookie.set('isCollapse',JSON.stringify(state.isCollapse));
          // console.log(Cookie.get('isCollapse'));
        },
        SET_COUNT(state,value){
          state.count=value
          console.log(state.count)
        },
        SET_TOKEN (state,value){
          state.token = value
        },
        SET_USERNAME(state,value){
          state.username = value
        }
      };
     const actions = {
        // 模拟actions 异步改变数据
        login({commit},requestData){
          return new Promise((resolve,reject) =>{
            Login(requestData).then((response) =>{
              resolve(response)
              let data = response.data.data
              // 基础写发放
              // content.commit('app/SET_TOKEN',data1.token)
              // 解构写法
              commit('SET_TOKEN',data.token)
              // commit('SET_USERNAME',data.username)
              setToken(data.token)
              setName(data.username)
            }).catch(error =>{
              reject(error)
            })
          })
        },
        logout({commit}){
          return new Promise((resolve,reject) => {
            removeToken();
            removeName();
            commit('SET_TOKEN','');
            resolve();
          })
        }
      };

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
