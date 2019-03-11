<template>
    <div class="info_wrapper">
      <div class="info_content1 center_parent">
        <div class="info_layout2 center_child">
          <div class="info_layout1"/>
          <HomeHead></HomeHead>
        </div>
      </div>
      <div class="body_content">
        <div>
          <MenuList />
        </div>
        <div class="carousel_content3">
          <div class="carousel_layout">
            <HomeCarousel></HomeCarousel>
          </div>
        </div>
        <!-- 当地日游推荐 -->
        <div class="perimeter_content4 center_parent">
          <div class="perimeter_layout center_child">
            <div class="perimeter_title">
              <div class="perimeter_icon">
                <img src="../../assets/img/homePage/car.png">
              </div>
              <div class="perimeter_font">当地日游</div>
              <div class="perimeter_more"><a>更多 >></a></div>
            </div>
            <div class="perimeter_menu">
              <div  class="card" v-for="item in parkList" :key="item.id">
                <div class="card_img">
                  <img v-bind:src="getImageUrl(item.parkImg)" />
                </div>
                <div class="card_detail card_detail_font" >
                  <!--这里是多少了分离技术的积分是对方立刻就埃里克森多久了飞机上的都十分了解多少垃圾分类的-->
                  <i>[最近推荐]</i>{{item.parkWord}}
                </div>
                <div class="card_price">
                  <div class="card_price_layout">
                    <a>门票价：<i>¥ {{item.parkPrice}}</i></a>
                  </div>
                  <div class="card_price_dist">距：{{item.dist}}&nbsp;m
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 周边推荐活动 -->
        <div class="perimeter_content4 center_parent">
          <div class="perimeter_layout center_child">
            <div class="perimeter_title">
              <div class="perimeter_icon">
                <img src="../../assets/img/homePage/car.png">
              </div>
              <div class="perimeter_font">周边推荐</div>
              <div class="perimeter_more"><a>更多 >></a></div>
            </div>
            <div class="perimeter_menu">
              <div  class="card" v-for="item in localParkList" :key="item.id">
                <div class="card_img">
                  <img v-bind:src="getImageUrl(item.parkImg)" />
                </div>
                <div class="card_detail card_detail_font" >
                  <i>[最热推荐]</i>{{item.parkWord}}
                </div>
                <div class="card_price">
                  <div class="card_price_layout">
                    <a>{{item.parkCity}}</a>
                  </div>
                  <div class="card_price_dist">
                    <i style="font-size: 15px; color: #00be7c">{{item.parkPopularity}}</i>&nbsp;人推荐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 跟团旅行推荐活动 -->
        <div class="perimeter_content4 center_parent">
          <div class="perimeter_layout center_child">
            <div class="perimeter_title">
              <div class="perimeter_icon">
                <img src="../../assets/img/homePage/car.png">
              </div>
              <div class="perimeter_font">跟团旅行</div>
              <div class="perimeter_more"><a>更多 >></a></div>
            </div>
            <div class="perimeter_menu">
              <div  class="card" v-for="item in localParkList" :key="item.id">
                <div class="card_img">
                  <img v-bind:src="getImageUrl(item.parkImg)" />
                </div>
                <div class="card_detail card_detail_font" >
                  <i>[最热推荐]</i>{{item.parkWord}}
                </div>
                <div class="card_price">
                  <div class="card_price_layout">
                    <a>活动价：<i>¥ {{item.parkPrice}}</i></a>
                  </div>
                  <div class="card_price_dist">
                    <i style="font-size: 15px; color: #00be7c">{{item.parkPopularity}}</i>&nbsp;人推荐
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 定制旅游 -->
        <div class="perimeter_content4 center_parent">
          <div class="perimeter_layout center_child">
            <div class="perimeter_title">
              <div class="perimeter_icon">
                <img src="../../assets/img/homePage/car.png">
              </div>
              <div class="perimeter_font">定制旅游</div>
              <div class="perimeter_more"><a>更多 >></a></div>
            </div>
            <div class="perimeter_menu">
              <!--<div v-for="item in items" :key="item.id" class="card" >-->
                <!--<div class="card_img"></div>-->
                <!--<div class="card_detail"></div>-->
                <!--<div class="card_price"></div>-->
              <!--</div>-->
            </div>
          </div>
        </div>
        <!-- 景区介绍 -->
        <div class="perimeter_content4 center_parent">
          <div class="perimeter_layout center_child">
            <div class="perimeter_title">
              <div class="perimeter_icon">
                <img src="../../assets/img/homePage/car.png">
              </div>
              <div class="perimeter_font">景点介绍</div>
              <div class="perimeter_more"><a>更多 >></a></div>
            </div>
            <div class="perimeter_menu">
              <div class="card">
                <div class="card_img"></div>
                <div class="card_detail"></div>
                <div class="card_price"></div>
              </div>
              <div class="card">
                <div class="card_img"></div>
                <div class="card_detail"></div>
                <div class="card_price"></div>
              </div>
              <div class="card">
                <div class="card_img"></div>
                <div class="card_detail"></div>
                <div class="card_price"></div>
              </div>
              <div class="card">
                <div class="card_img"></div>
                <div class="card_detail"></div>
                <div class="card_price"></div>
              </div>
              <div class="card" style="margin-right: 0">
                <div class="card_img"></div>
                <div class="card_detail"></div>
                <div class="card_price"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_footer">
        <img src="../../assets/img/homePage/footer.png" style="width: 1349px"/>
      </div>
      <!-- 左边小浮框-->
      <div class="body_left">
        nihao
      </div>
      <!-- 右边小浮框-->
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
    </div>
</template>

<script>
  import '../../assets/css/common.css'
  import HomeHead from './components/HomeHead.vue'
  import HomeCarousel from './components/HomeCarousel.vue'
  import BMap from 'BMap'
  import MenuList from '@/components/header/MenuList.vue'
  export default {
    name: 'HomeInfo',
    components: {
      HomeCarousel,
      HomeHead,
      MenuList
    },
    filter: {
      ellipsis (value) {
        if (!value) return ''
        if (value.length > 25) {
          return value.slice(0, 25) + '...'
        }
        return value
      }
    },
    data () {
      return {
        LngLatParam: {
          parkLng: 0,
          parkLat: 0
        },
        // parkInfo: {
        //   parkImg: '',
        //   parkWord: '',
        //   parkPrice: '',
        //   dist: ''
        // }
        parkList: [],
        localParkList: [],
        parkProvince: '',
        userInfo: this.$jwtCookies.userInfo
      }
    },

    methods: {
      // 自动——获取当前位置的经纬度
      getLngLat () {
        const geolocation = new BMap.Geolocation()
        geolocation.getCurrentPosition((position) => {
          let pspt = position.point
          this.LngLatParam.parkLng = pspt.lng - 0.0200
          this.LngLatParam.parkLat = pspt.lat - 0.0067
          this.getDayTourList()
          this.parkProvince = position.address.province // 获取省份信息
          this.getLocalParkList()
        })
      },
      // 获取当地日游推荐的景区（根据距离和人气推荐）
      getDayTourList () {
        this.$http.post('/api/tourism/home/dayTour', this.LngLatParam).then(response => {
          let res = response.data.data
          this.parkList = res
        }).catch(error => {
          alert('请求失败!' + error)
        })
      },
      // 拼接图片路径，获取图片
      getImageUrl (parkImg) {
        let imgSrc = '/static/img/park/'
        let imageSrc = imgSrc + parkImg
        return imageSrc
      },
      // 获取周边推荐的列表（范围:省内）
      getLocalParkList () {
        this.$http.get('/api/tourism/home/localTour/' + this.parkProvince).then(response => {
          let res = response.data.data
          this.localParkList = res
          console.log(res)
        }).catch(error => {
          alert('请求失败!' + error)
        })
      }
    },
    mounted () {
      this.getLngLat()
    }
  }
</script>

<style scoped>
  ::-webkit-scrollbar{
    display:none;
  }
  .info_wrapper {
    width: 100%;
    height: 2350px;/*235*/
  }
  .info_content1 {
    width: 100%;
    height: 100px;
  }
  .info_layout1 {
    width:100%;
    height: 3px;
    margin: 1px auto;
  }
  .info_layout2 {
    width:1030px;
    height: 100px;
    margin: auto;
  }
  .body_content {
    width: 100%;
    height: 1903px;
    background-color: #f1f5f9;
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
  .carousel_content3 {
    width: 100%;
    height: 350px;
  }
  .carousel_layout {
    width:1100px;
    height: 350px;
    background-color: #c3c1bd;
    margin: 0 auto;
  }
  /*具体推荐内容列表情况*/
  .perimeter_content4 {
    width: 100%;
    height: 300px;
  }
  .perimeter_layout {
    width:1100px;
    height: 280px;
    margin: 20px auto;
    background-color: #fff;
  }
  .perimeter_title {
    width:1050px;
    height: 40px;
    border-bottom: 1px solid #00be7c ;
    margin: 0 auto;
    overflow:hidden
  }
  .perimeter_icon {
    width: 40px;
    height: 37px;
    float:left;
  }
  .perimeter_icon img {
    width: 37px;
    height: 35px;
  }
  .perimeter_font {
    float:left;
    width: 80px;
    height: 28px;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    line-height:28px;
    margin-top: 11px;
  }
  .perimeter_more {
    float:right;
    width: 80px;
    height: 28px;
    font-size: 17px;
    text-align: center;
    line-height:28px;
    margin-top: 11px;
  }
  .perimeter_more a {
    color: #00be7c;
  }
  .perimeter_more a:hover {
    text-decoration:underline;
  }
  .perimeter_menu {
    width: 1100px;
    height: 230px;
    margin-top: 5px;
    overflow:hidden;
  }
  .card {
    width: 214px;
    height: 220px;
    float: left;
    margin-top: 5px;
    margin-right: 6px;
    background-color: #f8f8f8;
    cursor: pointer;
  }
  .card:hover{
    margin-top: -1px;
    box-shadow: 5px 8px 5px #cbc9c5;
  }
  .card_img {
    width: 214px;
    height: 140px;
    background-color: #e7eae4;
  }
  .card_detail {
    width: 214px;
    height: 40px;
    background-color: #ffeaf6;
    margin-top: 5px;
  }
  .card_detail_font {
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .card_detail i{
    font-size: 15px;
    font-weight: bold;
    color: #00be7c;
  }
  .card_price {
    width: 214px;
    height: 30px;
    margin-top: 5px;
    overflow:hidden;
  }
  .card_price_layout {
    width: 120px;
    height: 30px;
    font-size: 13px;
    line-height: 30px;
    float: left;
  }
  .card_price_layout a {
    color: #4a4a4a;
  }
  .card_price_layout i {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .card_price_dist {
    width: 94px;
    height: 23px;
    font-size: 13px;
    line-height: 23px;
    float: right;
    margin-top: 4px;
    text-align: right;
  }
  /* 首页底部*/
  .home_footer {
    width: 100%;
    height: 365px;
    background-color: #3c3c3c;
  }
  /*左边小浮框*/
  .body_left {
    top: 0;
    width: 36px;
    height: 657px;
    position: fixed;
    left: 0;
    background-color: #74818c;
    z-index: 2500;
  }
  /*右边返回顶部小浮框*/
  .back_top_box {
    bottom:50px;
    position: fixed;
    right: 30px;
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
    background: url(../../assets/img/homePage/chatIcon.png) no-repeat 0 0;
    overflow: hidden;
  }
  .user_icon {
    display: block;
    width: 24px;
    height: 24px;
    margin: 10px auto 5px;
    background: url(../../assets/img/homePage/userIcon.png) no-repeat 0 0;
    overflow: hidden;
  }
  .top_icon {
    display: block;
    width: 27px;
    height: 20px;
    margin: 10px auto 5px;
    background: url(../../assets/img/homePage/topIcon.png) no-repeat 0 0;
    overflow: hidden;
  }
</style>
