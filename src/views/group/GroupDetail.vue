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
        <MenuList />
      </div>
      <!-- 主体部分 -->
      <div class="main0">
        <div class="main0_main">
          <div class="main_layout">
            <!-- 路径显示 -->
            <div class="main_route">
              <div class="main_route_layout">
                <ul>
                  <li><a>首页</a></li>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
                  <li><a>跟团旅行</a></li>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;
                  <li><a class="main_route_font">其他</a></li>
                </ul>
              </div>
            </div>
            <!-- 团游旅行介绍 -->
            <div class="main_content1 center_parent">
              <div class="content1_layout center_child">
                <!-- 图片日历部分 -->
                <div class="content1_layout_left">
                  <div class="content1_carousel"></div>
                  <div class="content1_calender"></div>
                </div>
                <!-- 简介部分 -->
                <div class="content1_layout_right">
                  <div class="content1_business">
                    <div class="business_sign">跟团旅游</div>
                    <div class="business_info ml20">产品编号：342342</div>
                    <div class="business_info">|&emsp;出发地点：广州</div>
                    <div class="business_info">|&emsp;供应商：旅游推荐平台</div>
                  </div>
                  <!--简介标签-->
                  <div class="content1_signal mt10 ellipsis0">
                    重庆+武隆双飞4日3晚纯玩团●天坑地缝圣诞节福利是打发算法地心之旅 印象武隆VIP通道 高山草原仙女山 打望洪崖洞夜景 体验重庆轻轨穿楼
                  </div>
                  <div class="isfood mt10">
                    <div class="isfood_cont">包全餐包住宿</div>
                  </div>
                  <!-- 价格情况 -->
                  <div class="content1_price mt10">
                    <div class="price_info center_parent">
                      <div class="price_layout center_child">
                        <span class="price_num">22322</span>
                        <span style="font-size: 15px">&ensp;起&nbsp;/&nbsp;人</span>
                        <span class="price_description"><a>起价说明</a></span>
                        <span class="price_recommond"><i>237438</i>&nbsp;人&nbsp;推荐</span>
                      </div>
                    </div>
                    <div class="price_ico center_parent">
                      <div class="ico_layout center_child">
                        <span class="ico_1">
                          <img src="/static/img/ico/generateIntegral.png"/>
                        </span>
                        <span class="ico_1">
                          <img src="/static/img/ico/instantConfirmation.png"/>
                        </span>
                      </div>
                    </div>
                  </div>
                  <!-- 推荐介绍 -->
                  <div class="content1_recommend mt10">
                    <Scroll :on-reach-bottom="handleReachBottom" height="365">
                      <!--<Card dis-hover v-for="(item, index) in list1" :key="index">-->
                        <!--Content {{ item }}-->
                      <!--</Card>-->
                      <div style="font-size: 30px">ewrewr所发生的</div>
                      <div style="font-size: 30px">方式奋斗</div>
                      <div style="font-size: 30px">sfsdaf</div>
                      <div style="font-size: 30px">算法阿尔个人的</div>
                      <div style="font-size: 30px">的风格的十分关注</div>
                      <div style="font-size: 30px">梵蒂冈地方公共奋斗过</div>
                      <div style="font-size: 30px">豆腐干豆腐是个人</div>
                      <div style="font-size: 30px">大范甘迪发发呆</div>
                      <div style="font-size: 30px">放的广告和公司电话的</div>
                      <div style="font-size: 30px">地方国土上对方</div>
                    </Scroll>

                  </div>
                  <!-- 广告-->
                  <div class="content1_ad mt10">
                    <img src="/static/img/ico/customPhone.png"/>
                  </div>
                </div>
              </div>
            </div>
            <!-- 下单部分 -->
            <div class="main_order mt20">
              <div class="order_layout center_parent">
                <div class="order_form mt25 center_child">
                  <Form :model="formItem" :label-width="80">
                      <Row>
                        <span class="">出行时间</span>
                        <DatePicker type="date" :options="DateOption" placeholder="请选择开始日期！" v-model="formItem.date" style="width: 150px"></DatePicker>
                        <span>成人</span>
                        <Select v-model="formItem.adult" style="width: 80px">
                          <Option value="0">0</Option>
                          <Option value="1">1</Option>
                          <Option value="2">2</Option>
                          <Option value="3">3</Option>
                          <Option value="4">4</Option>
                          <Option value="5">5</Option>
                          <Option value="6">6</Option>
                          <Option value="7">7</Option>
                          <Option value="8">8</Option>
                          <Option value="9">9</Option>
                        </Select>
                        <span>儿童</span>
                        <Select v-model="formItem.child" style="width: 80px">
                          <Option value="0">0</Option>
                          <Option value="1">1</Option>
                          <Option value="2">2</Option>
                          <Option value="3">3</Option>
                          <Option value="4">4</Option>
                          <Option value="5">5</Option>
                          <Option value="6">6</Option>
                          <Option value="7">7</Option>
                          <Option value="8">8</Option>
                          <Option value="9">9</Option>
                        </Select>
                      </Row>
                  </Form>
                </div>
                <div class="order_total mt20 mr20">
                  <div class="order_money mt10">
                    <span>总价</span>
                    <span class="money">￥234783</span>
                  </div>
                  <div class="order_handle">
                    <a>立即订购</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- 跟团旅游详情目录 -->
            <div class="main_content2 mt20">
              <div class="content2_layout">
                <ul>
                  <li><a id="a1" href="javascript:void(0);" @click="myTab(1),changeColor(1)" style="color: #00be7c;">产品说明</a></li>
                  <li><a id="a2" href="javascript:void(0);" @click="myTab(2),changeColor(2)" >行程介绍</a></li>
                  <li><a id="a3" href="javascript:void(0);" @click="myTab(3),changeColor(3)" >费用说明</a></li>
                  <li><a id="a4" href="javascript:void(0);" @click="myTab(4),changeColor(4)" >预订须知</a></li>
                  <li><a id="a5" href="javascript:void(0);" @click="myTab(5),changeColor(5)" >用户评价</a></li>
                </ul>
              </div>
              <div class="content2_prompt">
                温馨提示：谁都会发生地方的洛杉矶
              </div>
            </div>
            <!-- 跟团旅游详情介绍 -->
            <div class="main_content3 mt20">
              <div id="d1" class="content3_layout">
                <div class="detail_head">
                  <div class="detail_layout">
                    <Icon type="md-bookmarks" size="25" color="#00be7c" />
                    &ensp;产品描述
                  </div>
                </div>
                <Divider />
                <div class="detail_main">
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                </div>
              </div>
              <div id="d2" class="content3_layout nodisplay">
                <div class="detail_head">
                  <div class="detail_layout">
                    <Icon type="ios-pin" size="25" color="#00be7c"/>
                    &ensp;行程介绍
                  </div>
                </div>
                <Divider />
                <div class="detail_main"></div>
              </div>
              <div id="d3" class="content3_layout nodisplay">
                <div class="detail_head">
                  <div class="detail_layout">
                    <Icon type="logo-yen" size="20" color="#00be7c"/>
                    &ensp;费用说明
                  </div>
                </div>
                <Divider />
                <div class="detail_main"></div>
              </div>
              <div id="d4" class="content3_layout nodisplay">
                <div class="detail_head">
                  <div class="detail_layout">
                    <Icon type="ios-calendar" size="25" color="#00be7c"/>
                    &ensp;预订须知
                  </div>
                </div>
                <Divider />
                <div class="detail_main">
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                  <div>testDemo</div>
                </div>
              </div>
              <div id="d5" class="content3_layout nodisplay">
                <div class="detail_head">
                  <div class="detail_layout">
                    <Icon type="ios-chatbubbles" size="25" color="#00be7c"/>
                    &ensp;用户评价
                  </div>
                </div>
                <Divider />
                <div class="detail_main"></div>
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
    name: 'GroupDetail',
    components: {
      HeaderTop,
      FloatFrame,
      LRFooter,
      MenuList
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
    height: 40px;
    background-color: #00be7c;
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
  .main_route_font {
    font-weight: bold;
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
  .content1_business {
    height: 25px;
    overflow:hidden
  }
  .business_sign {
    background-color: #ee7b77;
    width: 65px;
    height: 25px;
    color: #fafafa;
    text-align: center;
    line-height: 25px;
    font-size: 14px;
    border-radius:2px;
    float: left;
  }
  .business_info {
    width: 27%;
    height: 25px;
    color: #555555;
    float: left;
    line-height: 25px;
    font-size: 12px;
  }
  /*简介标签*/
  .content1_signal {
    width: 100%;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
  }
  .isfood {
    height: 25px;
  }
  .isfood_cont {
    width: 20%;
    height: 25px;
    border: 1px solid red;
    line-height: 25px;
    color: red;
    text-align: center;
  }
  /*价格框样式*/
  .content1_price {
    height: 120px;
    border: 1px solid #00be7c;
    background-color: #f0f8f7;
  }
  .price_info {
    width: 92%;
    height: 72px;
    margin: 0 auto;
    border-bottom: 1px solid #bfbfbf;
  }
  .price_layout {
    height: 46px;
    margin: 13px auto;
    overflow:hidden;
  }
  .price_num {
    font-size: 35px;
    color: red;
  }
  .price_description {
    font-size: 13px;
    margin-left: 25px;
    cursor: default;
  }
  .price_description a {
    text-decoration: underline;
    cursor: default;
    color: #656565;
  }
  .price_recommond {
    float: right;
    font-size: 15px;
    margin-top: 23px;
    margin-right: 20px;
  }
  .price_recommond i {
    color: #00be7c;
  }
  .price_ico {
    width: 92%;
    height: 46px;
    margin: 0 auto;
  }
  .ico_layout {
    height: 20px;
    margin: 13px auto;
  }
  .ico_1 {
    width: 88px;
    height: 20px;
    margin-right: 30px;
  }
  /*推荐介绍*/
  .content1_recommend {
    height: 365px;
    background-color: burlywood;
  }
  .content1_ad {
    height: 50px;
    background-color: burlywood;
  }
  /*用户下单入口*/
  .main_order {
    height: 124px;
    border: 1px solid #f26d57;
  }
  .order_layout {
    height: 86px;
    background-color: #feede8;
  }
  .order_form {
    width: 50%;
    height: 32px;
  }
  .order_form span{
    margin-left: 35px;
    margin-right: 10px;
  }
  .order_total {
    width: 25%;
    height: 45px;
    float: right;
    overflow: hidden;
  }
  .order_money {
    float: left;
    font-size: 15px;
    text-align: center;
    height: 35px;
    line-height: 35px;
  }
  .money {
    font-size: 26px;
    color: red;
  }
  .order_handle {
    width: 130px;
    height: 45px;
    background-color: #f26d57;
    text-align: center;
    line-height: 45px;
    float: right;
  }
  .order_handle a {
    color: #fff;
    font-size: 18px;
  }
  /* 跟團旅行詳情目錄*/
  .main_content2 {
    padding-bottom: 10px;
    background-color: #fbfbfb;
    border: 1px solid #eeeeee;
  }
  .content2_layout {
    height: 50px;
    border-bottom: 1px solid #bababa;
    line-height: 50px;
  }
  .content2_layout ul li a {
    color: #6c6c6c;
    font-size: 17px;
    margin: auto 20px;
  }
  .content2_layout ul li a:hover {
    border-bottom: 2px solid #00be7c;
  }
  .content2_prompt {
    font-size: 15px;
    color: #f26d57;
    width: 96%;
    margin: 10px auto;
  }
  /*跟团旅游详情内容*/
  .main_content3 {
    background-color: #fbfbfb;
    border: 1px solid #eeeeee;
  }
  .content3_layout {
    width: 97%;
    padding-bottom: 20px;
    margin: 20px auto;
  }
  /*详情——产品说明部分*/
  .detail_head {
    height: 40px;
  }
  .detail_layout {
    width: 25%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #6c6c6c;
    text-align: center;
    margin: 0 auto;
  }
  .detail_main {
    padding-bottom: 10px;
    text-align: center;
    background-color: #9efdff;
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
