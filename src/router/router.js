
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from "@/views/layout/layout.vue";
import Login from "@/views/login/login.vue";
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login', component: Login,
        },
        {
            path: '/main', component: Main
        },
        {
            path: '*', component: Login
        }
    ]
})

export default router
