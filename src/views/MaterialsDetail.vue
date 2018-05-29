<template>
  <div>
    <x-header>建材详情</x-header>
    <div class="mui-content">
      <div class="sevrice-body">
        <div id="sevrice-main" class="sevrice-main coun-tab-con">
          <div class="banner">
            <!--建材或服务图片--><img height="220" src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg">
          </div>
          <div class="sevrice-main-title">
            <div class="sevrice-main-name">
              <!--建材或服务标题--><h3>地砖</h3>
              <!--建材或服务简介--><p>最爱的地砖，中国第一</p>
            </div>
            <p>1200关注量 丨100笔成交<span class="price"><label id="priceBox">￥9999</label></span></p>
          </div>
          <div class="choose-service">
            <div class="service-title choose-classily"><span>服务类型</span>
              <div class="service-choose">墙砖地砖</div>
            </div>
            <div class="service-body"><a href="javascript:void(0);" class="choose-address">区域:<span>广东省/深圳市/宝安区</span></a>
            </div>
          </div>
        </div>

        <div class="sevrice-other" style="padding-bottom:60px">
          <ul class="clear">
            <li><img src="../assets/images/search-icon1.png">
              <p>价格透明</p></li>
            <li><img src="../assets/images/search-icon2.png">
              <p>安全保障</p></li>
            <li><img src="../assets/images/search-icon3.png">
              <p>准时保质</p></li>
            <li><img src="../assets/images/search-icon4.png">
              <p>售后无忧</p></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="adviserBox" class="bottom">
      <div class="bottom-btn"><a class="choose-TA">去支付</a></div>
    </div>

  </div>
</template>
<script>

  export default {
    data () {
      return {
        mainActive: true,
        detailActive: false,
        displayName: 'block',
        materialsDetail: null
      }
    },
    created () {

    },
    mounted () {
      this.getMaterials()
    },
    components: {},
    computed: {},
    methods: {
      mainPage: function () {
        this.mainActive = true
        this.detailActive = false
        this.displayName = 'block'
      },
      getMaterials () {
        this.$http({
          method: 'post',
          url: 'api/materials/getMaterialsById',
          data: {
            materialsId: null
          }
        }).then((response) => {
          if (response.data.code === 200) {
            this.materialsDetail = response.data.data
          } else {
            mui.alert(response.data.message)
          }
        }).catch(function (response) {
          console.error(response)
        })
      }
    }
  }
</script>
<style>
  @import "../assets/css/newWap-service.css";
</style>
