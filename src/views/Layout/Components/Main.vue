<template>
    <div id="main-wrap">
        <div class="content">
            <router-view />
        </div>
           
            
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped lang="scss">
@import "../../../styles/config.scss";
    #main-wrap{
        position: fixed;
        top: 75px;
        left: $navMenu;
        // right: 0;
        height: 100vh;
        width: 100vw;
        border: solid 30px #f7f7f7;
        // background: red;
    }

    .content{
        width: 100%;
        height: 100%;
        padding: 30px 30px 0 30px;
        background-color: #fff;
    }
</style>