前端IDE建议使用vs code
如果没有vs code的话，用sublime text + powershell(本地的cmd也行)

一， 安装
本地环境全局安装node webpack
1，node安装 
参考文档 http://www.runoob.com/nodejs/nodejs-install-setup.html

2, node安装之后默认会安装npm的，所以webpack的话就用npm安装
首先切换下npm镜像
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

这样后面npm install报错的时候，用cnpm install安装

安装webpack
$ cnpm install webpack -g

二 项目构建

1，从svn下载代码

svn: http://172.16.9.106:9001/svn/peb_pd/开发区/代理商WEB门户/北京电信/04源代码/chnview/

2, 安装依赖

进入到代码目录执行 npm install

然后看安装信息 如果提示-4048 之类的报错信息，删除node_modules目录 执行
npm cache clean --force

然后再执行npm install

3, 安装成功之后， 执行npm run  dev 启动本地前端项目

三， webpack以及项目目录说明

前后端开发的时候，修改webpack.config.js 中的 proxy 选项
将里面的IP地址和端口换成对应的后端IP加端口
其他的配置暂时不用管，后续需要的话我再加


四，目录说明
api -----------可以封装请求的方法     
assets --------静态文件
components ----封装的组件库 后续的遮罩层，提示框，搜索框会放在这里
const  -------- 静态编码文件
router
    | axios.js  封装的拦截器
    | router.js  路由配置文件
util  ----------第三方组件库，这里面现在放的是加密文件
views ---------- 各个功能模块整理文件夹
app.vue
index.js---------这两个是入口文件



五，开发说明
先在路由文件 src/router/router.js 中添加模块路径信息和对应要开发组件路径，具体看下文件
然后在views中创建对应文件，进行功能开发

六，axios 说明
vue推荐使用axios，本项目添加了拦截器
axios 文档 https://www.kancloud.cn/yunye/axios/234845
例子的话看下 infos.vue中具体的实现


七，建议了解下vue的生命周期和相关基础知识，并熟悉下demo，然后就自己折腾吧





