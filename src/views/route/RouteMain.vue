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
          <li><a href="javascript:;">
            <router-link to="/">首页</router-link>
          </a></li>
          <li><a href="javascript:;">
            <router-link to="/tour/localMain">当地日游</router-link>
          </a></li>
          <li><a href="javascript:;">
            <router-link to="/tour/ambitusMain">周边推荐</router-link>
          </a></li>
          <li><a href="javascript:;">
            <router-link to="/tour/groupAction">跟团旅行</router-link>
          </a></li>
          <li><a href="javascript:;">
            <router-link to="/tour/customMain">定制旅游</router-link>
          </a></li>
          <li><a href="javascript:;">
            <router-link to="/tour/parkMain">景区介绍</router-link>
          </a></li>
          <li style="border-bottom: 2px solid #fff"><a href="javascript:;">
            <router-link to="/tour/routeMain">路线查询</router-link>
          </a></li>
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
                <li><a href="javascript:;">
                  <router-link to="/">首页</router-link>
                </a></li>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
                <li><a href="javascript:;">
                  <router-link to="/tour/routeMain">路线查询</router-link>
                </a></li>
              </ul>
            </div>
          </div>
          <!-- 路线查询介绍 -->
          <div class="main_content1 center_parent">
            <div class="content1_layout center_child">
              <!-- 路线查询部分 -->
              <div class="content1_layout_left">
                <div class="content1_place center_parent">
                  <div class="place_top">请&nbsp;输&nbsp;入&nbsp;查&nbsp;询</div>
                  <div class="place_layout center_child">
                    <Form :model="formPlace" :label-width="70">
                      <FormItem label="出发点">
                        <Input v-model="formPlace.from" placeholder="Enter something..." clearable class="width210"/>
                      </FormItem>
                      <FormItem label="目的地">
                        <Input v-model="formPlace.to" placeholder="Enter something..." clearable class="width210"/>
                      </FormItem>
                      <FormItem>
                        <Button type="primary" @click="handleSearch('formPlace')" class="width80">查询</Button>
                      </FormItem>
                    </Form>
                  </div>
                </div>
                <div class="content1_plans">
                  <div class="place_top">路&nbsp;线&nbsp;方&nbsp;案</div>
                    <Scroll height="417">
                      <div id="res" v-show="mapIsShow">
                      </div>
                    </Scroll>
                </div>
              </div>
              <!-- 百度地图部分 -->
              <div id="mymap" class="content1_layout_right">
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
    <FloatFrame/>
    <!--左侧小镖苗浮框 -->
    <!-- <div class="anchor_box">
       <Anchor show-ink offset-bottom="250">
         <AnchorLink href="#basic_usage" title="产品" scroll-offset="40"/>
         <AnchorLink href="#static_position" title="行程" scroll-offset="40"/>
         <AnchorLink href="#API" title="费用" scroll-offset="40"/>
         <AnchorLink href="#static_position" title="须知" scroll-offset="40"/>
         <AnchorLink href="#API" title="评价" scroll-offset="40"/>
       </Anchor>
     </div>-->
  </div>
</template>

<script>
  import '@/assets/css/common.css'
  import BMap from 'BMap'
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
        formPlace: {
          from: '',
          to: ''
        },
        mapIsShow: true,
        map: null,
        transit: null
      }
    },
    methods: {
      handleSearch () {
        console.log('1111111' + this.formPlace.from + '22222' + this.formPlace.to)
        this.transit = new BMap.TransitRoute(this.map, {
          renderOptions: {map: this.map, panel: 'res'},
          onResultsHtmlSet: () => {
            this.mapIsShow = true
          }
        })
        this.transit.search('上下九', '广州塔')
      }
    },
    mounted () {
      let _this = this
      _this.map = new BMap.Map('mymap')
      _this.map.centerAndZoom(new BMap.Point(113.28764968, 23.1133491), 15)
      _this.map.enableScrollWheelZoom()

      // 定位到当前位置
      var geolocation = new BMap.Geolocation()
      console.log('這裡1' + JSON.stringify(geolocation))
      geolocation.getCurrentPosition(function (r) {
        console.log('這裡2' + r)
        if (this.getStatus() === 0) {
          r.point.lng = r.point.lng - 0.0200
          r.point.lat = r.point.lat - 0.0065
          const mk = new BMap.Marker(r.point)
          _this.map.addOverlay(mk)
          _this.map.panTo(r.point)
          alert('您的位置：' + r.point.lng + ',' + r.point.lat)
        } else {
          alert('failed' + this.getStatus())
        }
      }, {enableHighAccuracy: true})
      // 关于状态码
      // BMAP_STATUS_SUCCESS   检索成功。对应数值“0”。
      // BMAP_STATUS_CITY_LIST 城市列表。对应数值“1”。
      // BMAP_STATUS_UNKNOWN_LOCATION  位置结果未知。对应数值“2”。
      // BMAP_STATUS_UNKNOWN_ROUTE 导航结果未知。对应数值“3”。
      // BMAP_STATUS_INVALID_KEY   非法密钥。对应数值“4”。
      // BMAP_STATUS_INVALID_REQUEST   非法请求。对应数值“5”。
      // BMAP_STATUS_PERMISSION_DENIED 没有权限。对应数值“6”。(自 1.1 新增)
      // BMAP_STATUS_SERVICE_UNAVAILABLE   服务不可用。对应数值“7”。(自 1.1 新增)
      // BMAP_STATUS_TIMEOUT   超时。对应数值“8”。(自 1.1 新增)
    }
  }
</script>

<style scoped>
  /*公用*/
  ul li {
    list-style: none;
    display: inline-block;
    cursor: pointer;
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
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .nodisplay {
    display: none;
  }

  .width80 {
    width: 80px;
  }

  .width210 {
    width: 210px;
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
    width: 1030px;
    height: 100px;
    margin: auto;
  }

  .header_layout {
    width: 100%;
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

  .nav_menu ul li {
    width: 100px;
    height: 40px;
    line-height: 40px;
  }

  .nav_menu ul li a {
    color: #ffffff;
    font-size: 16px;
    display: block;
    height: 40px;
  }

  /*鼠标移动时，样式变化,顺序为link→visited→hover→active*/
  .nav_menu ul li a:hover {
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
    overflow: hidden;
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
    height: 700px;
    margin: 20px auto;
    overflow: hidden;
  }

  /*路线部分*/
  .content1_layout_left {
    width: 30%;
    float: left;
    height: 100%;
  }

  .content1_place {
    width: 100%;
    height: 30%;
    background-color: #f4f8fc;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .place_top {
    height: 30px;
    background-color: #00be7c;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
  }

  .place_layout {
    margin: 45px auto;
    width: 90%;
  }

  .content1_plans {
    width: 100%;
    height: 64%;
    background-color: #f4f8fc;
    margin: 28px auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  /*产品简介信息部分*/
  .content1_layout_right {
    width: 68%;
    float: right;
    height: 98%;
    background-color: #f4f8fc;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
