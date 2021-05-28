import Vue from "vue";
import VueCompositionApi from '@vue/composition-api';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 自定义一个全局组件
import './icons';
// 路由守卫
import "@/router/premit";

Vue.use(ElementUI);
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;



// runtime(运行模式),vue的默认运行模式,全局组件需要去vue.config.js文件里面修改路径
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
