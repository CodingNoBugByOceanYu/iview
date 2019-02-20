import Vue from 'vue'
import App from './app.vue';
import iView from 'iview';

import './assets/styles/global.styl';
import 'iview/dist/styles/iview.css';

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(iView);

new Vue({
    render: (h) =>h(App)
}).$mount(root)


function makeAdder(x) {

    function add(y) {
        return x + y;
    }

    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

console.log(plusOne(9), plusTen(20));