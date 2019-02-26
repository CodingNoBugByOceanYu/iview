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

//this
function foo(num) {
    console.log("foo: " + num);

    // 追踪 `foo` 被调用了多少次
    this.count++;
}

foo.count = 0

var i;

for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo.call(foo, i);
    }
}

// `foo` 被调用了多少次？
console.log(foo.count);

//当一个函数被调用时，会建立一个称为执行环境的活动记录。这个记录包含函数是从何处（调用栈 —— call - stack）被调用的，
//函数是 如何 被调用的，被传递了什么参数等信息。
//这个记录的属性之一，就是在函数执行期间将被使用的 this 引用。