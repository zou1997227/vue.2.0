 const  state = {
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
        count:10,
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
        }
      };
     const actions = {
        // 模拟actions 异步改变数据
        login(content,requestData){
          return new Promise((resolve,reject) =>{
            Login(requestData).then((response) =>{
              resolve(response)
            }).catch(error =>{
              reject(error)
            })
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
