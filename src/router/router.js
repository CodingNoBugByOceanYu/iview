
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from "@/views/layout/layout.vue";
import Login from "@/views/login/login.vue";
import Info from '@/views/layout/infos.vue'
import Oss from '@/views/osstest/demo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login', component: Login,
        },
        {
            path: '/main', component: Main,
            children: [
                {
                    path: 'infos',
                    component: Info
                },
                {
                    path: 'oss',
                    component: Oss
                }
            ]
        },
        {
            path: '*', component: Login
        }
    ]
})

export default router
