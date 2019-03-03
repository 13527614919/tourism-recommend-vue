<template>
    <div class="head_content">
      <div class="layout_left">
        <img src="../../../assets/img/homePage/logo.png"  class="logo" />
      </div>
      <div class="layout_left location_content center_parent">
        <div class="location center_child">
          <div class="location_logo">
            <Icon type="ios-pin" size="22" color="red" />
          </div>
          <!-- 自动定位显示城市 -->
          <div class="location_city">
            <p class="location_font">{{ LocationCity }}</p>
          </div>
        </div>
      </div>
      <div class="search_content layout_left">
        <div class="search">
          <Input search enter-button placeholder="Enter something..." size="small"/>
        </div>
        <div class="search_hotword">
          <span>热门搜索 ：</span>
          <span>白云山 &nbsp; 湖光岩 &nbsp; 越秀公园</span>
        </div>
      </div>
      <div class="layout_left phone_content center_parent" >
        <div class="phone_logo_layout center_child">
          <img src="../../../assets/img/homePage/phoneLogo.png" class="phone_logo"/>
        </div>
        <div class="layout_left phone_info center_child ">
          <div>
            <p class="phone_font">24h客户服务热线</p>
          </div>
          <div>
            <p class="phone_num">020 - 888 8888</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import '../../../assets/css/common.css'
  import BMap from 'BMap'
  export default {
    data () {
      return {
        /* 给渲染层定义一个初始值 */
        LocationCity: '正在定位',
        LngLatParams: {
        lng: '', // 经度
        lat: '' // 纬度
        }
      }
    },
    mounted () {
      /* 触发获取城市方法 */
      this.city()
    },
    methods: {
      /* 定义获取城市方法 */
      city: function () {
        let _this = this
        let geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition(function getinfo (position) {
          let city = position.address.city
          _this.LngLatParams.lng = position.point.lng - 0.0200
          _this.LngLatParams.lat = position.point.lat - 0.0067
          console.log('这是定位经度：' + _this.LngLatParams.lng)
          console.log('这是定位纬度：' + _this.LngLatParams.lat)
          _this.LocationCity = city
        }, function (error) {
          _this.LocationCity = '定位失败'
        }, {provider: 'baidu'})
      }
    }

  }
</script>

<style>
  .head_content {
    width:100%;
    height: 95px;
    overflow:hidden;
  }
  .logo {
    width: 264px;
    height: 95px;
  }
  .layout_left {
    float: left;
  }
  .location_content {
    width: 100px;
    height: 95px;
    margin-left: 20px;
  }
  .location {
    width: 100px;
    height: 35px;
    margin: auto 0;
    overflow:hidden;
  }
  .location_logo {
    width: 25px;
    height: 25px;
    float: left;
  }
  .location_city {
    width: 65px;
    height: 22px;
    float: left;
    margin-top: 3px;
  }
  .location_font {
    font-size: 15px;
  }
  .search_content {
    width: 320px;
    height: 95px;
    margin-left: 50px;
  }
  .search {
    width: 320px;
    height: 26px;
    margin-top: 30px;
  }
  .search_hotword {
    width: 290px;
    height: 20px;
    margin-top: 3px;
    margin-left: 10px;
  }
  .phone_content {
    width:150px;
    height:49px;
    margin-top: 15px;
    margin-left: 95px;
  }
  .phone_logo_layout {
    width: 20px;
    height: 20px;
    margin: auto 0;
  }
  .phone_logo {
    width: 20px;
    height: 20px;
  }
  .phone_info {
    width: 120px;
    height: 40px;
    margin: auto 35px;
  }
  .phone_font {
    font-size: 13px;
    color: #6d6969;
  }
  .phone_num {
    font-size: 13px;
    color: red;
    font-weight: bold;
    font-style: italic;
  }
</style>
