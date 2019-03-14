<template>
    <div class="menu">
        <Menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1" >
                        <router-link to="/main/infos">表格</router-link>
                    </MenuItem>
                    <MenuItem name="1-2" >
                        <router-link to="/main/oss">其他</router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                </Submenu>
            </Menu>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme2: 'dark'
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .menu {
        margin-top 50px
        width 240px
        float left
        height calc(100% - 50px)
    }
    .menu ul {
        height 100%
    }
</style>

