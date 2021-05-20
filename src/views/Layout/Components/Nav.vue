<template>
    <div id="nav-wrap">
            这里是左侧菜单
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
@import "../../../styles/config.scss";
#nav-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: $navMenu;
    height: 100vh;
    background: #344a5f;
}

</style>