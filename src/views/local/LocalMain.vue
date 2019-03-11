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
    <div class="nav">
      <MenuList ref="changeColor" />
    </div>
    <!-- 主体部分 -->
    <div class="main0">
      <div class="main0_layout">
        <!-- 路径显示 -->
        <div class="main0_route">
          <div class="main0_route_layout">
            <ul>
              <li><a>首页</a></li>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
              <li><a class="main0_route_font">当地日游</a></li>
            </ul>
          </div>
        </div>
        <!-- 表格 -->
        <div class="main0_top">
          <ul>
            <li>
              <div class="table_list"></div>
            </li>
            <li>
              <div class="table_list"></div>
            </li>
            <li>
              <div class="table_list"></div>
            </li>
            <li>
              <div class="table_list"></div>
            </li>
            <li>
              <div class="table_list"></div>
            </li>
            <li>
              <div class="table_list"></div>
            </li>
          </ul>
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
      <Anchor show-ink :offset-bottom="250">
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
  import MenuList from '@/components/header/MenuList.vue'
  export default {
    name: 'LocalMain',
    components: {
      HeaderTop,
      FloatFrame,
      LRFooter,
      MenuList
    },
    data () {
      return {
      }
    },
    methods: {
      changeColor () {
          console.log(this.$refs.changeColor) // 返回的是一个vue对象，所以可以直接调用其方法
          this.$refs.changeColor.getColor(1)
      }
    },
    mounted () {
      this.changeColor()
    }

  }
</script>

<style scoped>
  /*公用*/
  ul li {
    list-style:none;
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
    height: 40px;
    background-color: #00be7c;
  }
  /*内容主体部分*/
  .main0 {
    padding-bottom: 10px;
    background-color: #f1f5f9;
    overflow:hidden;
  }
  .main0_layout {
    width: 1200px;
    padding-bottom: 10px;
    background-color: #f3aff9;
    margin: 20px auto;
  }
  /*路径显示*/
  .main0_route {
    width: 1200px;
    height: 30px;
  }
  .main0_route_layout {
    width: 1180px;
    height: 30px;
    margin: 0 auto;
  }
  .main0_route_layout ul li {
    display: inline-block;
    cursor:pointer;
    text-align: center;
  }
  .main0_route_layout ul li a {
    color: #686868;
  }
  .main0_route_layout ul li a:hover {
    text-decoration: underline;
  }
  .main0_route_font {
    font-weight: bold;
  }
  /*信息表格*/
  .main0_top {
    height: 300px;
    background-color: burlywood;
    }
  .table_list {
    width: 1200px;
    background-color: #a3beb8;
    padding-bottom: 43px;
    border: 1px solid #e8e8e8;
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
