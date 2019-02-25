<template>
  <div class="register_main">
    <div class="register_header">
      <LRHeader></LRHeader>
    </div>
    <div class="register_body1">
      <div class="register_body1_layout">
        <div class="register_body1_steps">
          <div class="steps" >
            <Steps :current="1" size="small">
              <Step title="进入注册页面" />
              <Step title="填写注册信息" />
              <Step title="完成注册" />
            </Steps>
          </div>
        </div>
        <Divider />
        <div class="register_body1_form">
          <Form ref="formRegister" :model="formRegister" :rules="ruleRegister" :label-width="120">
            <FormItem label="请输入手机号码：" prop="phone">
              <Input v-model="formRegister.phone" placeholder="请输入有效手机号码，11位" class="form_main"/>
            </FormItem>
            <FormItem label="请输入登录密码：" prop="password">
              <Input v-model="formRegister.password" placeholder="请输入密码,至少8-16位" class="form_main"/>
            </FormItem>
            <FormItem label="请确认登录密码：" prop="password2">
              <Input v-model="formRegister.password2" placeholder="请再次确认密码" class="form_main"/>
            </FormItem>
            <FormItem label="请输入生日日期：" prop="birthday">
              <DatePicker type="date" placeholder="请输入生日日期" style="width: 200px"></DatePicker>
            </FormItem>
            <FormItem label="请输入性别：" prop="sex">
              <RadioGroup v-model="formRegister.sex">
                <Radio label="1">男</Radio>
                <Radio label="2">女</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="请输入常住地址：" prop="address">
              <Input v-model="formRegister.address" placeholder="请输入常住地址" class="form_address"/>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formRegister')" class="item_button_width">登录</Button>
              <Button @click="handleReset('formRegister')" style="margin-left: 10px" class="item_button_width">重置</Button>
            </FormItem>
          </Form>
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
        formRegister: {
          phone: '',
          password: '',
          password2: '',
          birthday: '',
          sex: '1',
          address: ''
        },
        ruleRegister: {
          registerId: [ {required: true, validator: validateMobilePhone, trigger: 'blur'} ],
          psw: [
            {required: true, message: '登录密码不能为空', trigger: 'blur'},
            {min: 8, max: 16, message: '密码长度不正确'}
          ],
          phone: [ {required: true, validator: validateMobilePhone, trigger: 'blur'} ],
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
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!')
          } else {
            this.$Message.error('Fail!')
          }
        })
      },
      handleReset (formName) {
        if (this.$refs[formName] !== undefined) {
          this.$refs[formName].resetFields()
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
    overflow:hidden;
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
  .register_footer {
    width: 1348px;
    height: 216px;
    margin: 0 auto;
  }
  .register_body1_steps {
    width: 700px;
    height: 40px;
    overflow:hidden;
    margin: 0 auto;
  }
  .steps {
    width: 630px;
    height: 20px;
    margin-top: 20px ;
    float: right;
  }
  .register_body1_form {
    width: 700px;
    height: 410px;
    margin: 0 auto;
  }
  .form_main {
    width: 300px;
  }
  .form_address {
    width: 500px;
  }
  .item_button_width {
    width: 117px;
  }
</style>
