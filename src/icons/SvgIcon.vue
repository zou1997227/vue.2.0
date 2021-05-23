<template>
 <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>

</template>

<script>
import {reactive,ref, computed} from '@vue/composition-api';
export default {
    name:'svgIcon',
    // props的参数参考17学时的ppt详解
    props:{
        iconClass:{
            type:String,
            default:''
        },
        className:{
            type:String,
            default:''
        },
},
    setup(props){
        const msg= ref('我是帅哥哥');
        const iconName = computed(() => {
            return `#icon-${props.iconClass}`
        }
            
        );

        const svgClass = computed(() => {
            if(props.className){
                return `svg-icon ${props.className}`
            }else{
                return `svg-cion`
            }
        })

       return {
           msg,
           iconName,
           svgClass
       }
    }
}
</script>

<style scoped lang="scss">
   .svg-icon{
       width: 1em;
       height: 1em;
       fill: currentColor;//加这个属性才能改变颜色
    //    color: #ffffff;
   }

</style>