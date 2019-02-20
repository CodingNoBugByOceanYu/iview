<template>
    <div id="app">
        <Header></Header>
        <Workplace></Workplace>
        <Content></Content>

    </div>
</template>

<script>
import Header from './application/header.vue'
import Workplace from './application/workplace.vue'
import Content from './application/Content.vue'
export default {
    components: {
        Header,
        Workplace,
        Content
    }
}
</script>
<style lang="stylus" scoped>
#app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

</style>
