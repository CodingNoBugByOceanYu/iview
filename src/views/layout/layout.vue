<template>
    <div id="layout">
        <Workplace></Workplace>
        <Content></Content>
    </div>
</template>

<script>
import Workplace from './workplace.vue'
import Content from './Content.vue'
export default {
    components: {
        Workplace,
        Content
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

</style>
