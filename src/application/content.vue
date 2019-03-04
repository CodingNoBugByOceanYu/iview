<template>
    <div id="content">
        <Infos></Infos>
        <!-- <Testinfos /> -->
    </div>
</template>

<script>
import Infos from './infos.vue'
// import Testinfos from './testinfo.vue'
export default {
    components: {
        Infos,
        // Testinfos
    }
}
</script>
<style lang="stylus" scoped>
#content 
    margin-top 50px
    margin-left 240px
</style>
