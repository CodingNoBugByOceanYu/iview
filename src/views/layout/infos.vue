<template>
  <div>
        <h1>test workspace</h1>
        <Button type="success" @click="showPannel = true">添加</Button>
        <Table  border  :stripe="showStripe" :columns="columns1" :data="list"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="totalList" :current="currentPage" show-total  @on-change="changePage"></Page>
            </div>
        </div>
        <div v-show="showPannel">
            <Input v-model="newName" placeholder="Enter something..." clearable style="width: 200px" />
            <Button type="primary" @click="addOne">确定</Button>
        </div>
    </div>
</template>

<script>
//注入axio
import axios from 'axios'
import {_} from 'vue-underscore';

export default {
    name: 'workspace',
    data: function () {
        var _this = this;
        return {
            columns1: [
                    {
                        title: '标题',
                        key: 'name',
                        align: 'center'
                    },
                    {
                        title: '创建时间',
                        key: 'createTime',
                        align: 'center'
                    },
                    {
                        title: '更新时间',
                        key: 'updateTime',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.editData(params)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.deleteData(params)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
            list: [],
            showStripe: true,
            totalList: '',
            currentPage: '',
            newName: '',
            showPannel: false
        }
    },
    methods: {
        changePage: function(pageNum)  {
            var _this = this;

            this.currentPage = pageNum;
            axios.get(
            '/oracleDemo/oracleDemo/oracleDemoPage',
            {   
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem('access_token')  //token
                },
                params: {
                    currentPage: this.currentPage,
                    size: 10
                }
            })
            .then(function (response) {
                if (response.status === 200) {
                    var res = response.data.resultBody;
                
                    _this.list = res.records;
                    _this.totalList = res.total;
                    console.log('res111', res); 
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            
        },
        addOne: function() {
            var _this = this;
            let instance = axios.create();
            let data = {};

            instance.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('access_token');
            instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

            if (_.isEmpty(this.editId)) {
                data = {
                    name: _this.newName
                }
    
                instance.post('/oracleDemo/oracleDemo/',
                    data
                ).then(function (response) {
                    if (response.status === 200) {
                        alert('添加成功');
                        _this.changePage(1);
                        _this.showPannel = false;
                    }
                })
            } else {
                data = {
                    name: _this.newName,
                    oracleDemoId: _this.editId
                }
    
                instance.put('/oracleDemo/oracleDemo/',
                    data
                ).then(function (response) {
                    if (response.status === 200) {
                        alert('编辑成功');
                        _this.changePage(1);
                        _this.showPannel = false;
                        _this.editId = '';
                    }
                })
            }

        },
        deleteData: function(tes) {
            var _this = this;
            axios.delete('/oracleDemo/oracleDemo/' + tes.row.oracleDemoId,
            {   
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem('access_token')  //token
                }
            })
            .then(function (response) {
                if (response.status === 200) {
                    alert('删除成功')
                    _this.changePage(1);
                }
            })
        },
        editData: function(tes) {
            this.showPannel = true;
            this.editId = tes.row.oracleDemoId;
            console.log(this.editId);
            axios.get(
            '/oracleDemo/oracleDemo/' + this.editId,
            {   
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem('access_token')  //token
                }
            })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    // _this.newName = 
                }
            })

        }
    },
    created() {
        var _this = this;

        this.currentPage = 1
        axios.get(
            '/oracleDemo/oracleDemo/oracleDemoPage',
            {   
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem('access_token')  //token
                },
                params: {
                    currentPage: 1,
                    size: 10
                }
            })
            .then(function (response) {
                if (response.status === 200) {
                    var res = response.data.resultBody;
                    
                    _this.list = res.records;
                    _this.totalList = res.total;
                    console.log('init', res);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
</script>

<style>
thead {
    background: #f5f6fa;
}

.mu-checkbox-svg-icon {
	height: 16px;
    width: 16px;
}

.mu-checkbox-icon {
	height: 16px;
    width: 16px;
}

.mu-checkbox-ripple-wrapper {
	width: 40px;
    height: 30px;
    top: -5px;
}

.mu-checkbox-wrapper {
	height: 30px;
}
.mu-tr, .mu-th, .mu-td {
	height: 40px;
}

</style>

