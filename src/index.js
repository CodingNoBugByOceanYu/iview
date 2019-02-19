import Vue from 'vue'
import App from './app.vue';

import './assets/styles/global.styl';

const root = document.createElement('div')
document.body.appendChild(root)

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