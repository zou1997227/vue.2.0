<template>
    <div id="login">
         <el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
    </div>
</template>
<script>
export default {
    name:'login',
}
</script>

<style lang="scss" scoped>
    #login{
        //vh根据可视区域的宽高来定义,10vh就是100%可视区域的高
        height: 100vh;
        background-color: #344a5f;
    }
</style>