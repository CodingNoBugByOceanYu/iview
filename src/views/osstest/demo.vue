<template>
    <div class="inner">
        <iframe :src="src" width="100%" height="100%"></iframe>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'ossDemo',
        data: function () {
            return {
                src: 'http://172.24.0.62:8082/gisclient/login.html?&login_no=admin&system_type=GX_GIS&userid=12000000000026797036&' +
                    'gis_sceneid=100525122&login_id=zhejiang001&employeeid=12000000000026797033&username=zhejiang001&' +
                    'shardingid=13010%2C12500&access_token=Bearer ' + window.localStorage.getItem('access_token'),
            }
        },
        methods: {
        },
        created() {

        }
    }
</script>
<style lang="stylus" scoped>
    .inner
        width 100%
        height 100%
</style>
