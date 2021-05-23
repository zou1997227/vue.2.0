import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import Layout from "@/views/Layout/index"
// 目录下面是index文件的话可以简写如下,一定要是index文件
import Layout from "@/views/Layout/"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
    hidden:true,
    meta:{
      name:'主页',
    }
  },
  {
    path: "/login",
    name: "login",
    hidden:true,
    meta:{
      name:'登录',
    },
    component: () =>
      import( "../views/Login/index.vue"),
  },
  {
    path: "/console",
    name: "console",
    redirect:'index',
    meta:{
      name:'控制台',
      icon:'console'
    },
    redirect:"index",
    component: Layout,
    children:[{
      path:'/index',
      name:'index',
      meta:{
        name:'首页'
      },
      component:()=> import('../views/Console/index.vue')
    },
    // {
      // 这样写也可以的
    //   path:'/console',
    //   redirect:'index',
    // }
  ]
  },
/**
 * 信息管理
 */
  {
    path: "/info",
    name: "Info",
    meta:{
      name:'信息管理',
      icon:'info'
    },
    component: Layout,
    children:[
      {
      path: "/infoIndex",
      name: "InfoIndex",
      meta:{
        name:'信息列表'
      },
      component:()=> import('../views/Info/index.vue')
    },
    {
      path: "/infoCategory",
      name: "InfoCategory",
      meta:{
        name:'信息分类'
      },
      component:()=> import('../views/Info/category.vue')
    },
  ]
  },
 /**
 * 用户管理
 */
{
  path: "/user",
  name: "User",
  meta:{
    name:'用户管理',
    icon:'user'
  },
  component: Layout,
  children:[
    {
    path: "/userIndex",
    name: "UserIndex",
    meta:{
      name:'用户列表'
    },
    component:()=> import('../views/User/index.vue')
  },
  {
    path: "/userCategory",
    name: "UserCategory",
    meta:{
      name:'用户分类'
    },
    component:()=> import('../views/User/category.vue')
  },
]
},
];





const router = new VueRouter({
  routes,
});

export default router;
