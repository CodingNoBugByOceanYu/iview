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
