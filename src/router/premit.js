import router from "./index";
import {getToken,removeToken,removeName} from "@/utils/app";
import store from "../store/index"
const whiteRouter = ['/login'];//数组indexOf方法,判断数组是否存在指定的某个对象,如果不存在,则返回-1,路由白名单
// 路由守卫
    
router.beforeEach((to,from,next) => {
    console.log(to);
   
 if(getToken()){
     if(to.path === '/login'){
        removeToken();
        removeName();
        store.commit('app/SET_TOKEN','')
        store.commit('app/SET_USERNAME','')
        next()
     }else{
        next()
     }
       
 }else{
     console.log('不存在');
     if(whiteRouter.indexOf(to.path) !==-1){
         console.log('我进来了白名单');
         next();
     }else{
         next('/login')//路由指向
     }
 }
   
  })



//   console.log(to);//当前的页面路由
//   console.log(from);//上一个页面的路由
//   console.log(next);//