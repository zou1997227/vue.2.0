import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
    
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import( "../views/Login/index.vue"),
  },
  {
    path: "/console",
    name: "console",
    component: () =>
    import( "../views/Layout/index.vue"),
    children:[{
      path:'/console',
      name:'console',
      component:()=> import('../views/Console/index.vue')
    }
  ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
