<template>
    <div class="content">
        <div class="login-bg fl">

        </div>
        <div class="fl rel">
            <div class="blogin-box mgl-60">
                <table width="100%" class="table-info04">
                    <tr>
                        <th>用户名:</th>
                        <td>
                            <Input type="text" 
                                prefix="ios-contact" 
                                size="large" 
                                placeholder="请输入用户名" 
                                v-model="username" 
                                clearable 
                                style="width: auto" 
                                name="account"
                                v-validate.initial="'required'"
                                :class="{'input': true, 'is-danger': errors.has('account') }"/>
                                <div v-show="errors.has('account')" class="help loginmt is-danger"> 姓名不能为空 </div>
                        </td>
                    </tr>
                    <tr>
                        <th>密码:</th>
                        <td>
                            <Input type="password" prefix="ios-lock"  size="large" placeholder="请输入密码" v-model="password" clearable
                            style="width: auto" name="upasswd"
                                v-validate.initial="'required'"
                                :class="{'input': true, 'is-danger': errors.has('upasswd') }"/>
                            <div v-show="errors.has('upasswd')" class="help loginmt is-danger"> 密码不能为空 </div>
                        </td>
                    </tr>
                    <tr>
                        <th>验证码:</th>
                        <td>
                            <Input type="text"  clearable v-model="authCode" size="large" style="width: 100px" name="uCode" v-validate.initial="'required'"
                                :class="{'input': true, 'is-danger': errors.has('uCode') }"/>
                              <img :src="codeSrc" @click="getCode">
                            <div v-show="errors.has('uCode')" class="help loginmt is-danger"> 验证码不能为空 </div>
                        </td>
                    </tr>
                </table>
                <p class="color-red">{{errorMsg}}</p>
                <Button type="primary" class="goIn" @click="goForword">登陆</Button>
            </div>
        </div>
    </div>
</template>

<script>
//注入axio
import Vue from 'vue';
import axios from 'axios'
import {_} from 'vue-underscore';
import util from '@/util/util'

Vue.prototype.utils = util;
let Verifykey = '';
export default {
    data: function () {
        return {
            errorMsg: '',
            authCode: '',
            username: '',
            password: '',
            codeSrc: '',
            test1: ''
        }
    },
    methods: {
        RndNum: (n) => {
            var rnd="";
            for(var i=0;i<n;i++)
                rnd += Math.floor(Math.random()*10);
            return rnd;
        },
        goForword: function()  {
            var _this = this;

            let passwd = this.utils.encrypt(this.password, 'walrusisverygood', 'walrusisverygood')

            axios.get(
                'auth/oauth/token',
                {
                    headers: {
                        Authorization: 'Basic YXBwOmFwcA==' //app:app base64加密
                    },
                    params: {
                        username: this.username,
                        password: passwd,
                        code: this.authCode,
                        randomStr: Verifykey,
                        grant_type: 'password',
                        scope: 'server'
                    }
                }
            )
            .then(function (res) {
                console.log(res)
                if (res.status === 200) {
                    var resData = res.data;
                    console.log(resData.access_token);
                    window.localStorage.setItem('access_token', resData.access_token);
                    window.localStorage.setItem('refresh_token', resData.refresh_token);
                    _this.$router.push('/main')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            _this.$router.push('/main')
        },
        getCode: function() {
            Verifykey = this.RndNum(4);
            this.codeSrc = '/code?randomStr=' +  Verifykey;
        }
    },
    mounted: function () {
        Verifykey = this.RndNum(4);
        this.codeSrc = '/code?randomStr=' + Verifykey;
    }
}
</script>

<style lang="stylus" scoped>
.content
    height 100%
    margin-top 50px

.fl
    float left
.rel
    position relative

.login-bg
    width: 50%;
    height: 100%;

.blogin-box
    margin-top 300px;
    background: #fff;
    border: solid 1px #e1e1e1;
    border-radius: 3px;
    width: 400px;
    padding: 15px 25px;
    margin-left: 60px;
    position: relative;
    top: 50%;

.color-red
    color: #f4164a;

table tr
    line-height 50px

table th
    font-size 16px

table td
    padding-left 10px

.goIn
    margin-left: 45%;

.loginmt 
    margin-top -20px
</style>
