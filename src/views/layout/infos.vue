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
        <Modal v-model="showPannel"  title="新建" width='600px'>
            <Row>
                <Col span="6" style="text-align:center">名称:</Col>
                <Col span="18">
                    <Input v-model="newName" placeholder="Enter something..."
                        clearable style="width: 200px" name="testname" v-validate.initial="'required'"
                        :class="{'input': true, 'is-danger': errors.has('testname') }"/>
                    <div v-show="errors.has('testname')" class="help loginmt is-danger"> 不能为空 </div>
                </Col>
            </Row>
            <div slot="footer">
                <Button type="primary" @click="addOne">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
//注入axio
import axios from 'axios'
import {_} from 'vue-underscore';

import { addInfo, getInfos, delInfo, editInfo } from "@/api/default";

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
            
            var params = {
                currentPage: this.currentPage,
                size: 10
            }
            getInfos('get', params).then(function (response) {
                var res = response.data.resultBody;

                _this.list = res.records;
                _this.totalList = res.total;
            });
        },
        addOne: function() {
            var _this = this;
            let data = {};

            if (_.isEmpty(this.editId)) {
                data = {
                    name: _this.newName
                }

                addInfo('post', data).then(response => {
                    _this.$Message.success('新增成功');
                    _this.changePage(1);
                    _this.showPannel = false;
                })

            } else {
                data = {
                    name: _this.newName,
                    oracleDemoId: _this.editId
                }

                addInfo('put', data).then(response => {
                    _this.$Message.success('编辑成功');
                    _this.changePage(1);
                    _this.showPannel = false;
                    _this.editId = '';
                })
            }

        },
        deleteData: function(tes) {
            var _this = this;

            delInfo('delete', tes.row.oracleDemoId).then(() => {
                _this.$Message.success('删除成功');
                _this.changePage(1);
            });
        },
        editData: function(tes) {
            var _this = this;
            this.showPannel = true;
            this.editId = tes.row.oracleDemoId;

            editInfo('get', this.editId).then((res) => {
                _this.newName = res.data.name;
            })
        }
    },
    created() {
        let _this = this;
        let params = {
            currentPage: 1,
            size: 10
        };
    console.log('created')
        getInfos('get', params).then(function (response) {
            console.log(response);
            var res = response.data.resultBody;

            _this.list = res.records;
            _this.totalList = res.total;
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

