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
      <h1>这是定制旅游主页</h1>
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
    name: 'CustomMain',
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
        this.$refs.changeColor.getColor(4)
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
    height: 40px;
    background-color: #00be7c;
  }
  /*内容主体部分*/
  .main0 {
    width: 100%;
    padding-bottom: 10px;
    background-color: #f1f5f9;
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
