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

//闭包
function makeAdder(x) {

    function add(y) {
        return x + y;
    }

    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

console.log(plusOne(9), plusTen(20));

//模块
function User() {
    var username, password;

    function doLogin(usr, pw) {
        username = usr;
        password = pw;

        //login
        console.log('login success')
    }

    var publicAPI = {
        login: doLogin
    }

    return publicAPI;

}

var hugh = User();

hugh.login('hugh', '123456');