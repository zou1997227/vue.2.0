import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 18课时详见ppt
  state: {
    isCollapse:false,
    count:10
  },
  getters:{
    count: state =>state.count + 10
  },
  // 修改state里面的数据
  mutations: {
    SET_COLLAPSE(state){
      state.isCollapse = !state.isCollapse
      console.log(state.isCollapse);
      
    },
    SET_COUNT(state,value){
      state.count=value
      console.log(state.count)
    }
  },
  actions: {},
  modules: {},
});
