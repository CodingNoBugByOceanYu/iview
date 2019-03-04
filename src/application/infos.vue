<template>
  <div>
        <h1>test workspace</h1>
        <Button type="success" @click="addOne">添加</Button>
        <Table  border  :stripe="showStripe" :columns="columns1" :data="list"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="totalList" :current="1"  @on-change="changePage"></Page>
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
            totalList: ''
        }
    },
    methods: {
        changePage: function(pageNum)  {

            axios.get('./src/assets/data.json')
            .then(function (response) {
                _this.list = response.data.root.response_body;
                // console.log(_this.list);
            })
            .catch(function (error) {
                console.log(error);
            });
            
        },
        addOne: () => {
            console.log(1111);
        },
        deleteData: (tes) => {
            console.log(tes);
        },
        editData: (res) => {
            console.log(res);
        }
    },
    created() {
        var _this = this;

        axios.get(
            '/oracleDemo/oracleDemo/oracleDemoPage',
            {
                params: {
                    currentPage: '1',
                    size: 10
                }
            })
            .then(function (response) {
                if (response.code === '000000') {

                    var res = response.resultBody;

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

