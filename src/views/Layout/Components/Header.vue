<template>
    <div id="header-wrap">
            这里是头部
    </div>
</template>

<script>
export default {
    
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
</style>