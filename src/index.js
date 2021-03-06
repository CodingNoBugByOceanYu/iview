import Vue from 'vue';
import App from './app.vue';
import iView from 'iview';
import VueRouter from 'vue-router';

import './assets/styles/global.styl';
import 'iview/dist/styles/iview.css';

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(iView);
Vue.use(VueRouter);

new Vue({
    render: (h) =>h(App)
}).$mount(root)