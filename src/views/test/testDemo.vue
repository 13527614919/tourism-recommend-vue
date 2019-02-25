<template>
  <div>
    <div class="header1">
      <Form ref="formValidate" :model="formValidate" :label-width="120">
        <FormItem label="请选择查询条件：" prop="userSex">
          <Select v-model="formValidate.userSex" style="width: 180px" >
            <Option value="0">全部</Option>
            <Option value="1">男</Option>
            <Option value="2">女</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">点击查询</Button>
          <Button @click="addUser" style="margin-left: 8px">添加用户</Button>
        </FormItem>
      </Form>
    </div>
    <Divider />
    <div class="body1">
      <Table border stripe :columns="columns1" :data="tableData">
        <template slot-scope="scope" slot="userSex">
            {{scope.row.userSex=='2'?'女':'男'}}
        </template>
        <template slot-scope="scope" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(scope.row.userId)">修改</Button>
          <Button type="error" size="small" @click="remove(scope.row.userId)">删除</Button>
        </template>
      </Table>
      <br/>
      <Page ref="pager" :total="tableDataTotal" show-total :current.sync="tablePage" @on-change="getUserList" />
    </div>
    <Modal v-model="modal1"
           title="添加用户"
           @on-ok="ok"
           @on-cancel="cancel">
      <div>
        <Form :model="formAdd" :label-width="120">
          <FormItem label="用户编号：">
            <Input v-model="formAdd.userId" placeholder="Enter something..." />
          </FormItem>
          <FormItem label="用户姓名：">
            <Input v-model="formAdd.userName" placeholder="Enter something..." />
          </FormItem>
          <FormItem label="用户性别(填1/2)：">
            <Input v-model="formAdd.userSex" placeholder="Enter something..." />
          </FormItem>
          <FormItem label="手机号码：">
            <Input v-model="formAdd.phoneNO" placeholder="Enter something..." />
          </FormItem>
          <FormItem label="联系邮箱：">
            <Input v-model="formAdd.userEmail" placeholder="Enter something..." />
          </FormItem>
        </Form>
      </div>
    </Modal>
    <!-- 修改 -->
    <Modal v-model="modal2"
           title="修改用户"
           @on-ok="handleAlter(formAlter)"
           @on-cancel="cancel">
      <div>
        <Form :model="formAlter" :label-width="120">
          <FormItem label="用户编号：">
            <Input v-model="formAlter.userId" />
          </FormItem>
          <FormItem label="用户姓名：">
            <Input v-model="formAlter.userName" />
          </FormItem>
          <FormItem label="用户性别(填1/2)：">
            <Input v-model="formAlter.userSex" />
          </FormItem>
          <FormItem label="手机号码：">
            <Input v-model="formAlter.phoneNO" />
          </FormItem>
          <FormItem label="联系邮箱：">
            <Input v-model="formAlter.userEmail" />
          </FormItem>
        </Form>
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'testDemo',
    inject: ['reload'],
    data () {
      return {
        formValidate: {
          userSex: '0'
        },
        formAdd: {
          userId: '',
          userName: '',
          userSex: '',
          phoneNO: '',
          userEmail: ''
        },
        formAlter: {
          userId: '',
          userName: '',
          userSex: '',
          phoneNO: '',
          userEmail: ''
        },
        columns1: [
          { title: '用户编号', key: 'userId', align: 'left' },
          { title: '用户姓名', key: 'userName', align: 'left' },
          { title: '性别(1男，2女)', slot: 'userSex', align: 'left' },
          { title: '联系手机', key: 'phoneNO', align: 'left' },
          { title: '用户邮箱', key: 'userEmail', align: 'left' },
          { title: '操作', slot: 'action', align: 'left' }
        ],
        tableData: [],
        tableDataTotal: 0,
        tablePage: 1,
        modal1: false,
        modal2: false
      }
    },
    methods: {
      getUserList (page) {
        let _this = this
        this.$http.post('/api/soa_baseService/queryByPageAction.do?versionNo=0.1',
          this.$qs.stringify({
            pageNo: page,
            pageSize: 10,
            userSex: _this.formValidate.userSex
          })).then(response => {
            let res = response.data
            console.log(res)
            if (res.body.errorCode === '0') {
              this.tableData = res.body.userByPage
              this.tableDataTotal = res.body.totalSize * 1
            } else {
              this.$Message.error({
                content: '[' + res.body.code + ']' + res.body.errorMsg,
                duration: 5
              })
            }
           }).catch(function (response) {
                console.log(response)
        })
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!')
            this.getUserList(1)
          } else {
            this.$Message.error('Fail!')
          }
        })
      },
      addUser () {
        this.modal1 = true
      },
      handleAdd () {
        let _this = this
        this.$http.post('/api/soa_baseService/addUserAction.do?versionNo=0.1',
          this.$qs.stringify({
            userId: _this.formAdd.userId,
            userName: _this.formAdd.userName,
            userSex: _this.formAdd.userSex,
            phoneNO: _this.formAdd.phoneNO,
            userEmail: _this.formAdd.userEmail
          })).then(response => {
          let res = response.data
          console.log(res)
          if (res.body.errorCode === '0') {
            this.$Modal.success({
              title: '温馨提示',
              content: '添加用户成功'
            })
          } else {
            this.$Message.error({
              title: '温馨提示',
              content: '添加用户失败'
            })
          }
          this.getUserList(_this.$refs.pager.currentPage)
        }).catch(function (response) {
          console.log(response)
        })
      },
      ok () {
        this.$Message.info('Clicked ok')
        this.handleAdd()
      },
      cancel () {
        this.$Message.info('Clicked cancel')
      },
      remove (id) {
        let _this = this
        this.$http.post('/api/soa_baseService/delByIdAction.do?versionNo=0.1',
          this.$qs.stringify({
            userId: id
          })).then(response => {
          let res = response.data
          console.log(res)
          if (res.body.errorCode === '0') {
            this.$Modal.success({
              title: '温馨提示',
              content: '删除用户成功'
            })
            // this.reload()
            this.getUserList(_this.$refs.pager.currentPage)
          } else {
            this.$Message.error({
              title: '温馨提示',
              content: '删除用户失败'
            })
          }
        }).catch(function (response) {
          console.log(response)
        })
      },
      show (id) {
        let _this = this
        _this.modal2 = true
        this.$http.post('/api/soa_baseService/queryByIdAction.do?versionNo=0.1',
          this.$qs.stringify({
            userId: id
          })).then(response => {
          let res = response.data
          console.log(res)
          if (res.body.errorCode === '0') {
            _this.formAlter.userId = res.body.userId
            _this.formAlter.userName = res.body.userName
            _this.formAlter.userSex = res.body.userSex
            _this.formAlter.phoneNO = res.body.phoneNO
            _this.formAlter.userEmail = res.body.userEmail
          } else {
            this.$Message.error({
              title: '温馨提示',
              content: '用户信息查询失败'
            })
          }
        }).catch(function (response) {
          console.log(response)
        })
      },
      handleAlter (formAlter) {
        let _this = this
        console.log('3927493794' + JSON.stringify(formAlter.userName))
        this.$http.post('/api/soa_baseService/alertByIdAction.do?versionNo=0.1',
          this.$qs.stringify({
            userId: formAlter.userId,
            userName: formAlter.userName,
            userSex: formAlter.userSex,
            phoneNO: formAlter.phoneNO,
            userEmail: formAlter.userEmail
          })).then(response => {
          let res = response.data
          console.log(res)
          if (res.body.errorCode === '0') {
            this.$Modal.success({
              title: '温馨提示',
              content: '修改用户成功'
            })
          } else {
            this.$Message.error({
              title: '温馨提示',
              content: '添加用户失败'
            })
          }
          this.getUserList(_this.$refs.pager.currentPage)
        }).catch(function (response) {
          console.log(response)
        })
      }
    }
  }
</script>

<style>
  .header1 {
    width: 400px;
    height: 90px;
    margin: 40px auto;
  }
  .body1 {
    width: 1000px;
    height: 600px;
    margin: 40px auto;
    background-color: #eeeeee;
  }
</style>
