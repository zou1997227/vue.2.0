<template>
    <div id="header-wrap">
        <div class="header-icon pull-left" @click="navMenuState"> 
            <svg-icon iconClass="menu" className="menu" />
        </div>
        <div class="pull-right">
            <div class="icon pull-left">
                <img src="../../../assets/images/face.jpg" alt="">
                {{username}}

            </div>
            <div class="quit pull-right" >
                <el-button type="text" @click="open">
                    <svg-icon iconClass="quit" className="quit" />
                </el-button>
                
            </div>
        </div>
    </div>
</template>

<script>
import {removeToken} from "@/utils/app"
import {ref,reactive, computed} from "@vue/composition-api"
export default {
    name:"layoutHeader",
    setup(props,{root}){
        const username = computed(() => {
         return   root.$store.state.app.username
        });

        // 改变控制nav菜单栏伸缩的变量
        const navMenuState = () =>{ 
          return root.$store.commit('app/SET_COLLAPSE')
        }

        const logout = () => {
           root.$store.dispatch('app/logout').then(() => {
               root.$router.push({name:'login'})
           })
        }


        // 退出提示框
       const open = () => {
        const h = root.$createElement;
        root.$msgbox({
          title: '退出提示',
          message: h('p', {style:'font-size:16px'}, [
            h('span', null, '确定要'),
            h('i', { style: 'color: red' }, '退出'),
            h('i', null, '吗?')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center:true,
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = false;
            //   instance.confirmButtonText = '执行中...';
            //   setTimeout(() => {
                done();
            //     setTimeout(() => {
            //       instance.confirmButtonLoading = false;
            //     }, 300);
            //   }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          root.$message({
            type: 'success',
            message: '退出成功' 
          });
        logout()
        }).catch((error) => {
            root.$message({
            type: 'success',
            message: '取消成功' 
          });
        })
            
      }

       
        return{
            username,
            navMenuState,
            logout,
            open,

        }
    }
}
</script>

<style scoped lang="scss">
@import "../../../styles/config.scss";
    #header-wrap{
        position: fixed;
        top: 0;
        right: 0;
        left: $navMenu;
        height: 75px;
        // width: 100vw;
        background: #fff;
        @include webkit(box-shadow,0 3px 16px 0 rgba(0,0,0,.1));
        @include webkit(transition,all .3s ease 0s);
    }
    .close{
        #header-wrap{
        @include webkit(transition,all .3s ease 0s);
        position: fixed;
        top: 0;
        right: 0;
        left:$navMenuMin;
    }
    }
     .open{
        #header-wrap{
        @include webkit(transition,all .3s ease 0s);
        position: fixed;
        top: 0;
        right: 0;
        left: $navMenu;
    }
    }
    .header-icon{
        padding: 0 32px;
        svg{
            margin-top: 29px;
            font-size: 25px;
            cursor: pointer;
            color: #344a5f;
            }
        
    }
    .quit{
        cursor: pointer;
       font-size: 18px;
       svg{
           margin:28px;
           color: red;
       }
       .el-button{
           padding: 0 !important;
       }
    }
    .close{
        .quit{
            svg{
                @include webkit(transition,all .3s ease 0s);
                margin-right: 60px;
            }
        }
    }
    .open{
        .quit{
            svg{
                @include webkit(transition,all .3s ease 0s);
                 margin:28px;
            }
        }
    }

    .icon{
        padding-right: 18px;
        height: 100%;
        border-right: 1px solid #ededed;
        line-height: 75px;
        color: #242424;
        img{
            float: left;
            display: block;
            margin-right: 18px;
            width: 36px;
            height: 36px;   
            border-radius: 50%;    
            margin-top: 19px;                    
        }
    }
    .color{
        background: red;
    }
</style>