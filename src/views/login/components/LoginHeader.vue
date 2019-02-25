<template>
  <div class="lh_wrap">
    <div class="lh_header center_parent">
      <div class="header_main center_child">
        <div class="header_content">
          <ul>
            <li><a href="">登录&nbsp;&nbsp;</a></li>
            <li><a href="">注册</a>&emsp;|&emsp;</li>
            <li><a href="" style="color: #00be7c; font-weight: bold">旅游推荐平台首页</a>&emsp;|&emsp;</li>
            <li><a href="">联系客服</a></li>
          </ul>
        </div>
      </div>
      </div>
    <!-- 登录logo -->
    <div class="lh_main">
      <div class="main_main">
        <div class="logo">
          <img src="../../../assets/img/homePage/logo.png" class="logo_img"/>
        </div>
        <div class="font_content">
          <p>用户登录注册</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../../assets/css/common.css'
  export default {}
</script>

<style>
  .lh_wrap {
    width: 100%;
    height: 127px;
  }
  .lh_header {
    width: 1366px;
    height: 30px;
    /*background-color: #f5f5f5;*/
    background-color: #fefefe;
    margin: 0 auto;
    overflow:hidden
  }
  .header_main {
    width: 1100px;
    height: 30px;
    margin: 0 auto;
  }
  .header_content {
    width: 300px;
    height: 30px;
    float: right;
  }
  .header_content ul {
    display:inline;
  }
  .header_content ul li{
    height: 30px;
    line-height:30px;
    list-style:none;
    display: inline-block;
    cursor:pointer;
    text-align: center;
  }
  .header_content ul li a {
    color: #3b3b3b;
  }
  .header_content ul li a:hover {
    color: #00be7c;
    text-decoration:underline;
  }
  /* 登录logo*/
  .lh_main {
    width: 1366px;
    height: 97px;
    margin: 0 auto;
    overflow:hidden
  }
  .main_main {
    width: 1100px;
    height: 97px;
    margin: 0 auto;
    border-bottom: 2px solid #878787;
  }
  .logo {
    width: 220px;
    height: 81px;
    border-right: 2px solid #919191;
    float: left;
    margin: 10px auto;
  }
  .logo_img {
    width: 210px;
    height: 85px;
    margin: 0 auto;
  }
  .font_content {
    width: 130px;
    height: 91px;
    float: left;
    margin-left: 3px;
    text-align: center;
    line-height: 130px;
    font-size: 20px;
    font-weight: bold;
  }
</style>
