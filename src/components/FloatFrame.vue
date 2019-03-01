<template>
  <div class="back_top_box">
    <a href="http://wpa.qq.com/msgrd?v=3&uin=823996606&site=qq&menu=yes" target="_blank">
      <i class="chat_icon"></i>
      <span>在线客服</span>
    </a>
    <a href="javascript:;" target="_blank"><router-link to="/tour/login">
      <i class="user_icon"></i>
      <span>登录/注册</span></router-link>
    </a>
    <a href="javascript:scroll(0,0)">
      <i class="top_icon"></i>
      <span>返回顶端</span>
    </a>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  /*右边返回顶部小浮框*/
  .back_top_box {
    bottom:50px;
    position: fixed;
    right: 5px;
    width: 60px;
    height: 200px;
  }
  .back_top_box a {
    display: block;
    width: 60px;
    height: 60px;
    text-align: center;
    margin: 5px 0;
    color: #fff;
    background-color: #5cd18b;
    border-radius: 1px;
    overflow: hidden;
    text-decoration: none;
    font-size: 12px;
  }
  .chat_icon {
    display: block;
    width: 27px;
    height: 24px;
    margin: 10px auto 5px;
    background: url(../assets/img/homePage/chatIcon.png) no-repeat 0 0;
    overflow: hidden;
  }
  .user_icon {
    display: block;
    width: 24px;
    height: 24px;
    margin: 10px auto 5px;
    background: url(../assets/img/homePage/userIcon.png) no-repeat 0 0;
    overflow: hidden;
  }
  .top_icon {
    display: block;
    width: 27px;
    height: 20px;
    margin: 10px auto 5px;
    background: url(../assets/img/homePage/topIcon.png) no-repeat 0 0;
    overflow: hidden;
  }
</style>
