<template>
    <div id="app">
        <Header></Header>
        <div class="inner-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from '@/views/layout/header.vue'
export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
        Header
    },
    mounted: function () {
        this.$router.push('/login')
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
.inner-view 
    margin-top 50px
    width 100%
    height 100%
</style>
