<template>
  <div class="wrap">
    <div class="main">
      <div class="layout1">
        <div class="layout1_body">
          <div class="layout1_content1" />
          <div class="layout1_content2" >
            <p class="company">Copyright  ©2010-2019&emsp;版权所有&emsp;广州仲恺旅行社(集团)有限公司</p>
            <div class="license">
              <ul>
                <li><a>营业执照</a></li>&emsp;&emsp;
                <li><a>经营许可证</a></li>&emsp;&emsp;
                <li><a>投诉电话:&nbsp;020-888 8888</a></li>
              </ul>
            </div>
          </div>
          <div class="layout1_content3">
            <div class="netMenu1">
              <ul>
                <li><a>营业网点</a></li>&nbsp;|&nbsp;
                <li><a>活动专区</a></li>&nbsp;|&nbsp;
                <li><a>推荐优选</a></li>&nbsp;|&nbsp;
                <li><a>旅通卡充值</a></li>&nbsp;|&nbsp;
                <li><a>会员积分通兑</a></li>
              </ul>
            </div>
            <div class="netMenu2">
              <ul>
                <li><a>诚聘英才</a></li>&nbsp;|&nbsp;
                <li><a>导游咨询</a></li>&nbsp;|&nbsp;
                <li><a>友情链接</a></li>&nbsp;|&nbsp;
                <li><a>关于我们</a></li>&nbsp;|&nbsp;
                <li><a>旅行社系统方案</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="layout2">
        <div class="layout2_body">
          <div class="layout2_content">
            <ul>
              <li><img src="../../../assets/img/loginPage/icp.jpg"/></li>
              <li><img src="../../../assets/img/loginPage/wlshzx.jpg"/></li>
              <li><img src="../../../assets/img/loginPage/shgs.jpg"/></li>
              <li><img src="../../../assets/img/loginPage/xhrz.jpg"/></li>
              <li><img src="../../../assets/img/loginPage/hgwb.jpg"/></li>
            </ul>
          </div>
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
  .wrap {
    width: 100%;
    height: 216px;
    background-color: #3c3c3c;
  }
  .main {
    width: 1100px;
    height: 216px;
    background-color: #3c3c3c;
    margin: 0 auto;
  }
  .layout1 {
    width: 100%;
    height: 94px;
  }
  .layout2 {
    width: 100%;
    height: 122px;
  }
  .layout1_body {
    width: 100%;
    height: 74px;
    float: left;
    margin-top: 20px;
    overflow:hidden;
  }
  .layout1_content1 {
    width: 226px;
    height: 74px;
    float: left;
    background: url(../../../assets/img/loginPage/logo2.png) no-repeat 0 0;
  }
  .layout1_content2 {
    width: 407px;
    height: 74px;
    float: left;
    margin-left: 30px;
  }
  .layout1_content3 {
    width: 407px;
    height: 74px;
    float: left;
    margin-left: 30px;
  }
  .company {
    font-size: 13px;
    margin: 10px;
    color: #d8d8d8;
  }
  .license {
    width: 330px;
    height: 24px;
    margin: 0 auto;
  }
  .license ul li {
    height: 24px;
    line-height:24px;
    list-style:none;
    display: inline-block;
    cursor:pointer;
    text-align: center;
  }
  .license ul li a {
    color: #bfbfbf;
    font-size: 13px;
  }
  ul li a:hover {
    text-decoration:underline;
  }
  /*右边菜单列表部分*/
  .netMenu1 {
    width: 380px;
    height: 24px;
    margin: 8px auto 7px;
  }
  .netMenu2 {
    width: 380px;
    height: 24px;
    margin: 0 auto;
  }
  .layout1_content3 ul li {
    height: 24px;
    line-height:24px;
    list-style:none;
    display: inline-block;
    cursor:pointer;
    text-align: center;
  }
  .layout1_content3 ul li a {
    color: #a1a1a1;
    font-size: 13px;
  }
  /*图片部分*/
  .layout2_body {
    width: 100%;
    height: 50px;
    float: left;
    margin: 35px auto;
  }
  .layout2_content {
    width: 800px;
    height: 100%;
    margin: 0 auto;
  }
  .layout2_content ul li {
    list-style:none;
    display: inline-block;
    cursor:pointer;
    margin-right: 15px;
  }
</style>
