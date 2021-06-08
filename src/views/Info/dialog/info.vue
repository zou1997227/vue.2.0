<template>
     <el-dialog title="新增" :visible.sync="dislog_info_flag" @close="close">
     
    </el-dialog>
</template>

<script>
export default {
    data(){
        return{
         
        dislog_info_flag:false
        }  
    },
    props:{
            flag:{
                tyepe:Boolean,
                default:false
            }
        },
        watch:{
            flag:{
                handler(newValue,oldValue){
                   this.dislog_info_flag = newValue
                    
                }
            }
        },
        methods:{
            close(){
                console.log(111111);
                this.$emit("update:flag",false)
                // this.$emit("closes",false)
            }
        }

}
</script>

<style lang="scss" scoped>

</style>