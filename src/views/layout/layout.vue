<template>
    <div id="layout">
        <Rmenu></Rmenu>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Rmenu from './rmenu.vue'
export default {
    components: {
        Rmenu
    }
}
</script>
<style lang="stylus" scoped>
#layout {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
#content 
    margin-top 50px
    margin-left 240px
    height calc(100% - 50px)
</style>
