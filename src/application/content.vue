<template>
    <div id="content">
        <Tab></Tab>
        <Infos></Infos>
    </div>
</template>

<script>
import Tab from './tab.vue'
import Infos from './infos.vue'
export default {
    components: {
        Tab,
        Infos
    }
}
</script>
<style lang="stylus" scoped>
#content 
    margin-top 50px
    margin-left 240px
</style>
