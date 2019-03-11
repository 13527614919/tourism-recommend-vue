<template>
  <div class="list_content2 center_parent">
    <div class="list_box center_child">
      <ul>
        <li><a id="menulist0" href="javascript:void(0);" @click="getColor(0)" class="home_top_stype"><router-link to="/">首页</router-link></a></li>
        <li><a id="menulist1" href="javascript:void(0);" @click="getColor(1)"><router-link to="/tour/localMain">当地日游</router-link></a></li>
        <li><a id="menulist2" href="javascript:void(0);" @click="getColor(2)"><router-link to="/tour/ambitusMain">周边推荐</router-link></a></li>
        <li><a id="menulist3" href="javascript:void(0);" @click="getColor(3)"><router-link to="/tour/groupAction">跟团旅行</router-link></a></li>
        <li><a id="menulist4" href="javascript:void(0);" @click="getColor(4)"><router-link to="/tour/customMain">定制旅游</router-link></a></li>
        <li><a id="menulist5" href="javascript:void(0);" @click="getColor(5)"><router-link to="/tour/parkMain">景区介绍</router-link></a></li>
        <li><a id="menulist6" href="javascript:void(0);" @click="getColor(6)"><router-link to="/tour/routeMain">路线查询</router-link></a></li>
      </ul>
    </div>
    <!-- 个人信息 -->
    <div class="user_info">
      <Dropdown style="font-size: 15px;">
        <a href="javascript:void(0)" style="color: beige">
          {{userInfo}}
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem divided>个人中心</DropdownItem>
          <DropdownItem divided>订单详情</DropdownItem>
          <DropdownItem divided>个人设置</DropdownItem>
          <DropdownItem divided>退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/common.css'
  export default {
    name: 'MenuList',
    data () {
      return {
        userInfo: this.$jwtCookies.userInfo
      }
    },
    methods: {
      getColor (num) {
        let i
        for (i = 0; i <= 6; i++) {
          if (i === num) {
            document.getElementById('menulist' + i).style.borderBottom = '2px solid #fff'
          } else {
            document.getElementById('menulist' + i).style.borderBottom = '0'
          }
        }
      }
    }
  }
</script>

<style scoped>
  .list_content2 {
    width: 100%;
    height: 40px;
    background-color: #00be7c;
  }
  .list_box {
    width: 1050px;
    height: 40px;
    margin: 0 auto;
  }
  .list_box ul {
    display:inline;
  }
  .list_box ul li{
    width: 100px;
    height: 40px;
    line-height:40px;
    list-style:none;
    display: inline-block;
    cursor:pointer;
    text-align: center;
  }
  .list_box ul li a {
    color: #ffffff;
    font-size: 16px;
    display: block;
    height: 40px;
  }
  /*鼠标移动时，样式变化,顺序为link→visited→hover→active*/
  .list_box ul li a:hover{
    font-size: 19px;
    border-bottom: 2px solid #fff;
  }
  .home_top_stype {
    border-bottom: 2px solid #fff;
  }
  /*个人信息下拉框*/
  .user_info {
    height: 40px;
    float: right;
    line-height: 40px;
    margin-right: 20px;
  }
</style>
