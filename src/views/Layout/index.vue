<template>
    <div class='layout'>
            <LayoutHeader/>
            <LayoutNav/>
            <LayoutMain/>
    </div>
</template>

<script>
import LayoutHeader from './Components/Header';
import LayoutNav from './Components/Nav';
import LayoutMain from './Components/Main';
export default {
    name:'console',
    components:{ LayoutHeader,LayoutNav,LayoutMain},
    setup(){

    }
    
}
</script>

<style scoped lang="scss">

</style>