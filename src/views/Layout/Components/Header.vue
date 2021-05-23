<template>
    <div id="header-wrap">
        <div class="header-icon pull-left"> 
            <svg-icon iconClass="menu" className="menu" />
        </div>
        <div class="pull-right">
            <div class="icon pull-left">
                <img src="../../../assets/images/face.jpg" alt="">
                {{username}}

            </div>
            <div class="quit pull-right">
                <svg-icon iconClass="quit" className="quit" />
            </div>
        </div>
    </div>
</template>

<script>
import {ref,reactive} from "@vue/composition-api"
export default {
    name:"layoutHeader",
    setup(props,{root}){
        const username = ref('别让眼睛沸腾');
       
        return{
            username,

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
        -webkit-box-shadow:0 3px 16px 0 rgba(0,0,0,.1);
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
       font-size: 18px;
       svg{
           margin:28px;
           color: red;
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
</style>