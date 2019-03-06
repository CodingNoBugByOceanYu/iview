<template>
  <div>
        <h1>test workspace</h1>
        <Button type="success" @click="addOne">添加</Button>
        <Table  border  :stripe="showStripe" :columns="columns1" :data="list"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="totalList" :current="currentPage" show-total  @on-change="changePage"></Page>
            </div>
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
            currentPage: ''
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
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            
        },
        addOne: function() {
            var _this = this;
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
                console.log('delete', response);
                if (response.status === 200) {
                    alert('删除成功')
                    _this.changePage(1);
                }
            })
        },
        editData: (res) => {
            console.log(res);
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
                console.log(response);
                if (response.status === 200) {
                    var res = response.data.resultBody;
                    
                    _this.list = res.records;
                    _this.totalList = res.total;
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

