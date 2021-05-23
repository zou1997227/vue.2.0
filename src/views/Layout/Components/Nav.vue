<template>
  <div id="nav-wrap">
    <h1 class="login"><img src="../../../assets/logo.png" alt=""></h1>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fef7f7"
      active-text-color="#fff"
      router
    >
    <!-- 循环v-for 和v-if最好不要写在同一个标签里面,所以用template包裹住,因为这个标签不会被渲染出来
    key值不能绑定在这个上面,会报错的
     -->
    <template v-for="(item , index) in routers"> 
         <el-submenu  :key="item.id" :index="index + ''"  v-if="!item.hidden">
        <!-- 一级菜单 -->
        <template slot="title">
          <svg-icon :iconClass='item.meta.icon' :className='item.meta.icon'/> 
          <span slot="title">{{item.meta.name}}</span>
        </template>

        <!-- 子菜单 -->
        <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">{{subItem.meta.name}}</el-menu-item>
      </el-submenu>
    </template>
    </el-menu>
    
  </div>
</template>

<script>
import {ref,reactive} from '@vue/composition-api';
export default {
    name:'navMenu',
    setup(props,{root}){
        // data数据
        const isCollapse= ref(false);
    // 路由方法
        // console.log(root.$router)
        // console.log(root.$router.options.routes);
        const routers = reactive(root.$router.options.routes);
        // console.log(routers[2].meta.icon);
        
        // 函数
        // methods方法
        const    handleOpen = (key, keyPath)=> {
        console.log(key, keyPath);
      };
        const  handleClose = (key, keyPath) => {
        console.log(key, keyPath);
      };

      return {
          isCollapse,
          handleOpen,
          handleClose,
          routers,
      }
    }
}
</script>

<style  lang="scss" scoped>
@import "../../../styles/config.scss";
#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $navMenu;
  height: 100vh;
  background: #344a5f;
  svg{
      font-size: 20px;
      margin-right: 13px;
      color: #ffffff;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}

.login{
  img{
    margin: 28px auto 25px;
    width: 92px;
  }
}
</style>