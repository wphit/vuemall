<template>
    <div>
        <nav-header-bar></nav-header-bar>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeaderBar from "@/components/NavHeader"
import NavFooter from "@/components/NavFooter"
export default {
    components:{
        NavHeaderBar,
        NavFooter
    }
}
</script>

<style>

</style>