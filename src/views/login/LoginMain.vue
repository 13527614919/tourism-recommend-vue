<template>
  <div class="login_main">
    <div class="header1">
      <LRHeader></LRHeader>
    </div>
    <div class="body1">
      <div class="body1_layout">
        <div class="body1_wrap1">
          <div class="body1_wrap1_img" />
        </div>
        <!-- 登录表单 -->
        <div class="body1_wrap2">
          <div class="body1_wrap2_form">
            <div class="lf_content1">
              <div id="psw" class="psw" @click="intoPsw"
                   onClick="document.getElementById('psw').style.background='#00be7c';
                            document.getElementById('psw').style.color='#f3f3f3';
                            document.getElementById('phone').style.background='#abf5d3';
                            document.getElementById('phone').style.color='#00be7c';">账户密码登录</div>
              <div id="phone" class="phone" @click="intoPhone"
                   onClick="document.getElementById('phone').style.background='#00be7c';
                            document.getElementById('phone').style.color='#f3f3f3';
                            document.getElementById('psw').style.background='#abf5d3';
                            document.getElementById('psw').style.color='#00be7c';">手机快捷登录</div>
            </div>
            <!-- 账户密码登录 -->
            <div class="lf_main" v-show="isShow">
              <div class="lf_content2">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="95">
                  <FormItem label="登录账号：" prop="loginPhone">
                    <Input type="text" v-model="formValidate.loginPhone" placeholder="请输入手机号码，11位" class="item_width" />
                  </FormItem>
                  <FormItem label="登录密码：" prop="loginPassword">
                    <Input type="password" v-model="formValidate.loginPassword" placeholder="请输入密码，8至16位" class="item_width" />
                  </FormItem>
                  <FormItem>
                    <Checkbox v-model="isSavePsw">记住密码</Checkbox>
                  </FormItem>
                  <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')" class="item_button_width">登录</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 10px" class="item_button_width">重置</Button>
                  </FormItem>
                </Form>
              </div>
              <div class="register_psw">
                <ul>
                  <li><a href="javascript:;" ><router-link to="/tour/register">免费注册</router-link></a></li>&nbsp;|&nbsp;
                  <li><a>忘记密码?</a></li>
                </ul>
              </div>
              <Divider style="margin-top: 5px"/>
            </div>
            <!-- 手机快捷登录 -->
            <div class="lf_main" v-show="!isShow">
              <div class="lf_content2" style="height: 147px;">
                <Form ref="formValidate2" :model="formValidate2" :rules="ruleValidate2" :label-width="95">
                  <FormItem label="手机号码：" prop="loginPhone">
                    <Input v-model="formValidate2.loginPhone" placeholder="请输入手机号码，11位" class="item_width" />
                  </FormItem>
                  <FormItem label="短信验证：" prop="code">
                    <Input v-model="formValidate2.code" placeholder="手机接收验证码，6位" class="item_code" />
                    <Button type="primary">获取验证码</Button>
                  </FormItem>
                  <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate2')" class="item_button_width">登录</Button>
                    <Button @click="handleReset('formValidate2')" style="margin-left: 10px" class="item_button_width">重置</Button>
                  </FormItem>
                </Form>
              </div>
              <div class="register_psw">
                <ul>
                  <li><a href="javascript:;" ><router-link to="/tour/register">免费注册</router-link></a></li>&nbsp;|&nbsp;
                  <li><a>忘记密码?</a></li>
                </ul>
              </div>
              <Divider style="margin-top: 5px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer1">
      <LRFooter></LRFooter>
    </div>
  </div>
</template>

<script>
  import LRHeader from '../../components/LRHeader.vue'
  import LRFooter from '../../components/LRFooter.vue'
  export default {
    name: 'LoginMain',
    components: {
      LRHeader,
      LRFooter
    },
    data () {
      // 自定义校验：有效手机号码
      const validateMobilePhone = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('手机号码不能为空'))
          } else {
            if (value !== '') {
              var reg = /^1[3456789]\d{9}$/
              if (!reg.test(value)) {
                callback(new Error('请输入有效的手机号码'))
              }
            }
            callback()
          }
        }
      return {
        isShow: true,
        isSavePsw: false,
        formValidate: {
          loginPhone: '',
          loginPassword: ''
        },
        formValidate2: {
          loginPhone: '',
          code: ''
        },
        ruleValidate: {
          loginPhone: [{required: true, validator: validateMobilePhone, trigger: 'blur'}],
          loginPassword: [
            {required: true, message: '登录密码不能为空', trigger: 'blur'},
            {min: 8, max: 16, message: '密码长度不正确'}
          ]
        },
        ruleValidate2: {
          loginPhone: [ {required: true, validator: validateMobilePhone, trigger: 'blur'} ],
          code: [
            {required: true, message: '短信验证码不能为空', trigger: 'blur'},
            {min: 6, max: 6, message: '验证码长度不正确'}
            ]
        }
      }
    },
    methods: {
      intoPsw () {
        let _this = this
        _this.isShow = true
      },
      intoPhone () {
        let _this = this
        _this.isShow = false
      },
      handleSubmit (name) {
        console.log(this.formValidate.loginPhone)
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$http.post('/api/user/login', this.formValidate).then(response => {
              let res = response.data
              console.log(res)
            }).catch(function (response) {
              console.log(response)
            })
            this.$Message.success('Success!')
          } else {
            this.$Message.error('Fail!')
          }
        })
      },
      handleReset (formName) {
        // this.$nextTick(() => {
        //   this.$refs['addForm'].resetFields()
        // })
        if (this.$refs[formName] !== undefined) {
          this.$refs[formName].resetFields()
        }
      }

    }
  }
</script>
<style scoped>
  .login_main {
    width: 100%;
    height: 893px;
    background-color: #f5fbfd;
  }
  .header1 {
    width: 1348px;
    height: 127px;
    margin: 0 auto;
  }
  .body1 {
    width: 1348px;
    height: 550px;
    margin: 0 auto;
  }
  .body1_layout {
    width: 1100px;
    height: 550px;
    margin: 0 auto;
    overflow:hidden
  }
  .body1_wrap1 {
    width: 600px;
    height: 550px;
    float: left;
  }
  .body1_wrap1_img {
    width: 600px;
    height: 450px;
    background: url(../../assets/img/loginPage/login_logo.png) no-repeat center top;
  }
  .body1_wrap2 {
    width: 420px;
    height: 550px;
    float: right;
  }
  .body1_wrap2_form {
    width: 400px;
    height: 500px;
    margin: 10px auto;
    background-color: #fefefe;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .lf_content1 {
    width: 100%;
    height: 50px;
    background-color: #abf5d3;
    overflow:hidden
  }
  .lf_main {
    width: 100%;
    height: 450px;
    overflow:hidden;
  }
  .lf_content2 {
    float: left;
    width: 370px;
    height: 203px;
    margin: 20px auto;
  }
  .item_width {
    width: 250px;
  }
  .item_button_width {
    width: 117px;
  }
  .lf_content1 div{
    width: 50%;
    height: 50px;
    float: left;
    text-align: center;
    line-height: 50px;
    cursor:pointer;
    font-size: 18px;
  }
  .psw {
    color: #f3f3f3;
    background-color: #00be7c;
  }
  .phone {
    color: #00be7c;
    background-color: #abf5d3;
  }
  .register_psw {
    width: 170px;
    margin-left: 230px;
  }
  ul li {
    list-style:none;
    display: inline-block;
    cursor:pointer;
  }
  .register_psw ul li a{
    color: #00be7c;
  }
  .register_psw ul li a:hover{
    display: block;
  }
  /*手机快捷登录*/
  .item_code {
    width: 155px;
  }
  .footer1 {
    width: 1348px;
    height: 216px;
    margin: 0 auto;
  }
</style>
