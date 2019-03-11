<template>
  <div class="register_main">
    <div class="register_header">
      <LRHeader></LRHeader>
    </div>
    <div class="register_body1">
      <div class="register_body1_layout">
        <div class="register_body1_steps">
          <div class="steps">
            <Steps :current="current" size="small">
              <Step title="进入注册页面"/>
              <Step title="填写注册信息"/>
              <Step title="完成注册"/>
            </Steps>
          </div>
        </div>
        <Divider/>
        <div class="register_body1_form" v-show="isShowRegisterForm">
          <Form ref="formRegister" :model="formRegister" :rules="ruleRegister" :label-width="120">
            <FormItem label="请输入手机号码：" prop="userPhone">
              <Input v-model="formRegister.userPhone" placeholder="请输入有效手机号码，11位" class="form_main"/>
            </FormItem>
            <FormItem label="请输入登录密码：" prop="userPwd">
              <Input type="password" v-model="formRegister.userPwd" placeholder="请输入密码,至少8-16位" class="form_main"/>
            </FormItem>
            <FormItem label="请确认登录密码：" prop="password2">
              <Input type="password" v-model="formRegister.password2" placeholder="请再次确认密码" class="form_main"/>
            </FormItem>
            <FormItem label="请输入生日日期：" prop="userBirthday">
              <DatePicker type="date" :options="birthdayOption" placeholder="请输入生日日期" style="width: 200px"></DatePicker>
            </FormItem>
            <FormItem label="请输入性别：" prop="userSex">
              <RadioGroup v-model="formRegister.userSex">
                <Radio label="1">男</Radio>
                <Radio label="2">女</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="手机验证码：" prop="code">
              <Input v-model="formRegister.code" placeholder="请输入有效验证码" class="form_code"/>
              <Button type="primary" @click="handleCode()" class="item_button_width">点击获取</Button>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formRegister')" class="item_button_width">注册</Button>
              <Button @click="handleReset('formRegister')" style="margin-left: 10px" class="item_button_width">重置
              </Button>
            </FormItem>
          </Form>
        </div>
        <div class="register_success" v-show="!isShowRegisterForm">
          <div class="register_success_top">
            <Icon type="ios-happy-outline" size="70"/>&nbsp;&nbsp;&nbsp;恭喜!&nbsp;&nbsp;注册成功
          </div>
          <div class="register_success_countdown">
            <i style="font-size: 18px; color: red;">{{count}}</i>&nbsp;&nbsp;秒后自动转至&nbsp;
            <a href="javascript:;">
              <router-link to="/tour/login">登录页面</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="register_footer">
      <LRFooter></LRFooter>
    </div>
  </div>
</template>

<script>
  import LRHeader from '../../components/LRHeader.vue'
  import LRFooter from '../../components/LRFooter.vue'

  export default {
    name: 'RegisterMain',
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
            const reg = /^1[3456789]\d{9}$/
            if (!reg.test(value)) {
              callback(new Error('请输入有效的手机号码'))
            }
          }
          callback()
        }
      }
      // 自定义校验：密码需要包含同时字母和数字，且8-16位
      const validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('登录密码不能为空'))
        } else {
          if (value !== '') {
            const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
            if (!reg.test(value)) {
              callback(new Error('登录密码仅且只能包含字母和数字（8-16位）'))
            }
          }
          callback()
        }
      }
      // 自定义校验：再次输入的密码需要与第一次输入的密码相同
      const validatePassword2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('再次输入密码不能为空'))
        } else if (value !== this.formRegister.userPwd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        current: 1,
        isShow: true,
        isSavePsw: false,
        isShowRegisterForm: true,
        count: 5,
        formRegister: {
          userPhone: '', // 手机号码
          userPwd: '', // 登录密码
          password2: '', // 再次确定密码
          userBirthday: '', // 生日日期
          userSex: '1', // 性别
          code: '' // 手机验证码
        },
        ruleRegister: {
          userPhone: [{required: true, validator: validateMobilePhone, trigger: 'blur'}],
          userPwd: [{required: true, validator: validatePassword, trigger: 'blur'}],
          password2: [{required: true, validator: validatePassword2, trigger: 'blur'}],
          // userBirthday: [ {required: true, message: '请选择生日日期', trigger: 'blur'} ],
          code: [
            {required: true, message: '短信验证码不能为空', trigger: 'blur'},
            {min: 6, max: 6, message: '验证码长度不正确'}
          ]
        },
        birthdayOption: { // 日期选项
          disabledDate: (date) => { // 日期不能超过当前日期
            return date && date.valueOf() > Date.now()
          }
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$http.post('/api/user/register', this.formRegister).then(response => {
              this.$Message.success('提交成功!')
              let res = response.data
              if (res.code === 20000) {
                this.current = 2
                setTimeout(() => {
                  this.isShowRegisterForm = false
                  this.goGrdoupRecor()
                }, 2000)
              } else if (res.code === 20005) {
                alert('该用户已经存在，请直接登录!')
              } else {
                alert('网路出错，请重新提交注册信息!')
              }
            }).catch(error => {
              alert(error + '注册信息提交失败，请重新提交')
            })
          } else {
            this.$Message.error('Fail!请准确填写注册信息')
          }
        })
      },
      handleReset (formName) {
        if (this.$refs[formName] !== undefined) {
          this.$refs[formName].resetFields()
        }
      },
      //  3秒后进入登录界面
      goGrdoupRecor () {
        const TIME_COUNT = 5
        if (!this.timer) {
          this.count = TIME_COUNT
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              clearInterval(this.timer)
              this.timer = null
              this.$router.push({ path: `/tour/login` })
            }
          }, 1000)
        }
      }
    }
  }
</script>
<style scoped>
  .register_main {
    width: 100%;
    height: 893px;
    background-color: #f5fbfd;
  }

  .register_header {
    width: 1348px;
    height: 127px;
    margin: 0 auto;
  }

  .register_body1 {
    width: 1348px;
    height: 550px;
    margin: 0 auto;
    overflow: hidden;
  }

  .register_body1_layout {
    width: 800px;
    height: 500px;
    margin: 25px auto;
    background-color: #fefefe;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  /*.lf_content1 div{*/
  /*width: 50%;*/
  /*height: 50px;*/
  /*float: left;*/
  /*text-align: center;*/
  /*line-height: 50px;*/
  /*cursor:pointer;*/
  /*font-size: 18px;*/
  /*}*/
  ul li {
    list-style: none;
    display: inline-block;
    cursor: pointer;
  }

  .register_psw ul li a {
    color: #00be7c;
  }

  .register_psw ul li a:hover {
    display: block;
  }

  .register_footer {
    width: 1348px;
    height: 216px;
    margin: 0 auto;
  }

  .register_body1_steps {
    width: 700px;
    height: 40px;
    overflow: hidden;
    margin: 0 auto;
  }

  .steps {
    width: 630px;
    height: 20px;
    margin-top: 20px;
    float: right;
  }

  .register_body1_form {
    width: 700px;
    height: 410px;
    margin: 0 auto;
  }

  .register_success {
    width: 500px;
    height: 150px;
    margin: 0 auto;
  }
  .register_success_top {
    width: 500px;
    height: 100px;
    line-height: 100px;
    font-size: 25px;
    color: #00be7c;
    margin: 0 auto;
    text-align: center;
  }
  .register_success_countdown {
    width: 500px;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    color: #515a6e;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
  }
  .register_success_countdown a {
    color: #00be7c;
  }
  .register_success_countdown a:hover {
    text-decoration: underline;
  }
  .form_main {
    width: 300px;
  }

  .form_code {
    width: 175px;
  }

  .item_button_width {
    width: 117px;
  }
</style>
