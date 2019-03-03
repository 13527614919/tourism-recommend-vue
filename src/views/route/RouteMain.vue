<template>
  <div class="wrap">
    <!-- 头部 -->
    <div class="header center_parent">
      <div class="header_center center_child">
        <div class="header_layout">
          <HeaderTop></HeaderTop>
        </div>
      </div>
    </div>
    <!-- 导航栏菜单列表 -->
    <div class="nav center_parent">
      <div class="nav_menu center_child">
        <ul>
          <li><a href="javascript:;"><router-link to="/">首页</router-link></a></li>
          <li><a href="javascript:;"><router-link to="/tour/localMain">当地日游</router-link></a></li>
          <li><a href="javascript:;"><router-link to="/tour/ambitusMain">周边推荐</router-link></a></li>
          <li><a href="javascript:;"><router-link to="/tour/groupAction">跟团旅行</router-link></a></li>
          <li><a href="javascript:;"><router-link to="/tour/customMain">定制旅游</router-link></a></li>
          <li><a href="javascript:;"><router-link to="/tour/parkMain">景区介绍</router-link></a></li>
          <li  style="border-bottom: 2px solid #fff" ><a href="javascript:;"><router-link to="/tour/routeMain">路线查询</router-link></a></li>
        </ul>
      </div>
    </div>
    <!-- 主体部分 -->
    <div class="main0">
      <div class="main0_main">
        <div class="main_layout">
          <!-- 路径显示 -->
          <div class="main_route">
            <div class="main_route_layout">
              <ul>
                <li><a href="javascript:;"><router-link to="/">首页</router-link></a></li>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
                <li><a href="javascript:;"><router-link to="/tour/routeMain">路线查询</router-link></a></li>
              </ul>
            </div>
          </div>
          <!-- 路线查询介绍 -->
          <div class="main_content1 center_parent">
            <div class="content1_layout center_child">
              <!-- 图片日历部分 -->
              <div class="content1_layout_left">
                <div class="content1_carousel"></div>
                <div class="content1_calender"></div>
              </div>
              <!-- 简介部分 -->
              <div class="content1_layout_right">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer0">
      <LRFooter/>
    </div>
    <!-- 右边小浮框-->
    <FloatFrame />
    <!--左侧小镖苗浮框 -->
    <div class="anchor_box">
      <Anchor show-ink offset-bottom="250">
        <AnchorLink href="#basic_usage" title="产品" scroll-offset="40" />
        <AnchorLink href="#static_position" title="行程" scroll-offset="40" />
        <AnchorLink href="#API" title="费用" scroll-offset="40" />
        <AnchorLink href="#static_position" title="须知" scroll-offset="40" />
        <AnchorLink href="#API" title="评价" scroll-offset="40" />
      </Anchor>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/common.css'
  import HeaderTop from '@/components/header/HeaderTop.vue'
  import FloatFrame from '@/components/FloatFrame.vue'
  import LRFooter from '@/components/LRFooter.vue'
  export default {
    name: 'GroupDetail',
    components: {
      HeaderTop,
      FloatFrame,
      LRFooter
    },
    data () {
      return {
        formItem: {
          date: new Date(new Date().getTime() - 518400000),
          adult: '0',
          child: '0'
        },
        DateOption: {
          disabledDate (date) {
            return date && date.valueOf() < Date.now() - 86400000
          }
        }
      }
    },
    methods: {
      myTab (num) {
        console.log(num)
        let i
        for (i = 1; i <= 5; i++) {
          if (i === num) {
            document.getElementById('d' + i).style.display = 'block'
          } else {
            document.getElementById('d' + i).style.display = 'none'
          }
        }
      },
      changeColor (num) {
        let i
        for (i = 1; i <= 5; i++) {
          if (i === num) {
            document.getElementById('a' + i).style.color = '#00be7c'
          } else {
            document.getElementById('a' + i).style.color = '#6c6c6c'
          }
        }
      }
    }

  }
</script>

<style scoped>
  /*公用*/
  ul li {
    list-style:none;
    display: inline-block;
    cursor:pointer;
    text-align: center;
  }
  .mt10 {
    margin-top: 10px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mt25 {
    margin-top: 25px;
  }
  .ml20 {
    margin-left: 20px;
  }
  .mr20 {
    margin-right: 20px;
  }
  .ellipsis0 {
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .nodisplay {
    display:none;
  }
  /*头部*/
  .wrap {
    width: 100%;
    padding-bottom: 0;
  }
  .header {
    width: 100%;
    height: 100px;
  }
  .header_center {
    width:1030px;
    height: 100px;
    margin: auto;
  }
  .header_layout {
    width:100%;
    height: 3px;
    margin: 1px auto;
  }
  /*导航栏菜单*/
  .nav {
    width: 100%;
    height: 40px;
    background-color: #00be7c;
  }
  .nav_menu {
    width: 1050px;
    height: 40px;
    margin: 0 auto;
  }
  .nav_menu ul li{
    width: 100px;
    height: 40px;
    line-height:40px;
  }
  .nav_menu ul li a {
    color: #ffffff;
    font-size: 16px;
    display: block;
    height: 40px;
  }
  /*鼠标移动时，样式变化,顺序为link→visited→hover→active*/
  .nav_menu ul li a:hover{
    font-size: 19px;
    border-bottom: 2px solid #fff;
  }
  /*内容主体部分*/
  .main0 {
    width: 100%;
    padding-bottom: 10px;
    background-color: #f1f5f9;
  }
  .main0_main {
    width: 1200px;
    padding-bottom: 10px;
    margin: 0 auto;
    overflow:hidden;
  }
  .main_layout {
    width: 1200px;
    padding-bottom: 10px;
    float: left;
    margin: 20px auto;
  }
  .main_route {
    width: 1200px;
    height: 30px;
  }
  .main_route_layout {
    width: 1180px;
    height: 30px;
    margin: 0 auto;
  }
  .main_route_layout ul li a {
    color: #686868;
  }
  .main_route_layout ul li a:hover {
    text-decoration: underline;
  }
  /*跟团旅游简单介绍部分*/
  .main_content1 {
    height: 735px;
    background-color: #fbfbfb;
    border: 1px solid #eeeeee;
  }
  .content1_layout {
    width: 1160px;
    height: 695px;
    margin: 20px auto;
    overflow:hidden;
  }
  /*简单介绍——图片日历部分*/
  .content1_layout_left {
    width: 50%;
    float: left;
    height: 100%;
    background-color: #00be7c;
  }
  .content1_carousel{
    width: 100%;
    height: 45%;
    background-color: #f4a0ff;
  }
  .content1_calender{
    width: 100%;
    height: 51%;
    background-color: #f4a0ff;
    margin: 28px auto;
  }
  /*产品简介信息部分*/
  .content1_layout_right {
    width: 46%;
    float: right;
    height: 100%;
  }
  .order_handle a {
    color: #fff;
    font-size: 18px;
  }
  .content2_layout ul li a {
    color: #6c6c6c;
    font-size: 17px;
    margin: auto 20px;
  }
  .content2_layout ul li a:hover {
    border-bottom: 2px solid #00be7c;
  }
  /*底部*/
  .footer0 {
    height: 216px;
    background-color: #fe99a5;
  }
  /*左边浮框*/
  .anchor_box {
    position: fixed;
    left: 15px;
  }
</style>
