import Vue from 'vue';
import App from './app.vue';
import iView from 'iview';
import underscore from 'vue-underscore';
import router from '@/router/router.js';

import '@/assets/styles/global.styl';
import 'iview/dist/styles/iview.css';

Vue.use(router);
Vue.use(iView);
Vue.use(underscore);

const root = document.createElement('div')
document.body.appendChild(root)


const app = new Vue({
    router,
    render: (h) => h(App)
}).$mount(root)