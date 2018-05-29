<template>
  <div>
    <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
    <swiper :list="demo01_list" auto v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    <div>
      <grid :col="2">
        <grid-item>
          <div class="countent-mid">
          <a href="tel:4000055002">
            <img src="../assets/images/tel-img.png">
            <span>400-0055-002</span>
            <p>服务热线</p>
          </a>
          </div>
        </grid-item>
        <grid-item>
          <div class="countent-mid">
            <a href="tel:4000055002">
              <img src="../assets/images/service-img.png">
              <span>专业顾问在线解答</span>
              <p>让顾问帮助</p>
            </a>
          </div>
        </grid-item>
      </grid>
    </div>

    <div class="classify-box">
      <ul>
        <li>
          <a href="">
            <i>
              <img src="../assets/images/gonshang.png">
              <span class="new">热销</span>
            </i>
            <p>改水电</p>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <img src="../assets/images/kuaiji.png">
              <span class="new">热销</span>
            </i>
            <p>铺地砖</p>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <img src="../assets/images/jianzhu.png">
            </i>
            <p>打家具</p>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <img src="../assets/images/gengduo.png">
            </i>
            <p>更多服务</p>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <img src="../assets/images/daikuan.png">
            </i>
            <p>瓷砖地砖</p>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <img src="../assets/images/shangbiaozhuce.png">
            </i>
            <p>壁纸壁布</p>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <img src="../assets/images/zhuanli.png">
            </i>
            <p>水管电缆</p>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <img src="../assets/images/gengduo.png">
            </i>
            <p>更多建材</p>
          </a>
        </li>
      </ul>
    </div>
    <!--新闻热点start-->
    <div class="xd-hot-point">
      <div class="hot-point-box">
        <div class="left-img">
          <img src="../assets/images/xd-hot.png" alt="">
          <span class="md"></span>
        </div>
        <div >
        <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
          <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
          <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
          <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></swiper-item>
          <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
          <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></swiper-item>
          <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></swiper-item>
        </swiper>
        </div>
        <!--<div class="clear"></div>-->
      </div>
    </div>

    <div class="con-box i-want-company">
      <div class="con-big-til"><a href="#">进入服务大厅</a></div>
      <div class="want-company-box coun-box coun-box-new">
        <div>

          <grid :col="4">
            <grid-item link="">
              <div >
                  <div class="details coun-body">
                    <img slot="icon" src="../assets/images/20170320150717_img_dailijizhang.png" alt="">
                  </div>
              </div>
            </grid-item>
            <grid-item>
              <div >
                <a href="">
                  <div class="details coun-body">
                    <img src="../assets/images/20170320150717_img_dailijizhang.png" alt="">
                  </div>
                </a>
              </div>
            </grid-item>

            <grid-item>
              <div >
                <a href="">
                  <div class="details coun-body">
                    <img src="../assets/images/20170320150717_img_dailijizhang.png" alt="">
                  </div>
                </a>
              </div>
            </grid-item>
            <grid-item>
              <div >
                <a href="">
                  <div class="details coun-body">
                    <img src="../assets/images/20170320150717_img_dailijizhang.png" alt="">
                  </div>
                </a>
              </div>
            </grid-item>
          </grid>
        </div>
      </div>
    </div>
    <div class="con-box enterprise-support">
      <div class="con-big-til"><a href="#">进入建材市场</a></div>
      <div class="enterprise-support-box coun-box coun-box-new">
        <div class="swiper-wrapper" style="padding-left: 0px; padding-right: 0px; width: 478px; height: 169px;">
          <grid :col="4">
            <grid-item>
              <div >
                <a href="">
                  <div class="details coun-body">
                    <img src="../assets/images/20170320150821_img_r.png" alt="">
                  </div>
                </a>
              </div>
            </grid-item>
            <grid-item>
              <div >
                <a href="">
                  <div class="details coun-body">
                    <img src="../assets/images/20170320150837_img_law.png" alt="">
                  </div>
                </a>
              </div>
            </grid-item>

            <grid-item>
              <div >
                <a href="">
                  <div class="details coun-body">
                    <img src="../assets/images/20170413140320_daikuan.jpg" alt="">
                  </div>
                </a>
              </div>
            </grid-item>
            <grid-item>
              <div >
                <a href="">
                  <div class="details coun-body">
                    <img src="../assets/images/20170413140721_zhuanli.jpg" alt="">
                  </div>
                </a>
              </div>
            </grid-item>
          </grid>


        </div>
      </div>

      <div class="coun-bottom">
        <div class="coun-bottom-body">
          <div class="bottom-menu">
            <div class="bottom-menu-list">
              <router-link to="/login">登陆</router-link>
              <router-link to="/register">注册</router-link>
              <router-link to="/helppingCenter">帮助中心</router-link>
              <router-link to="/aboutMe">关于兔老板</router-link>
            </div>
            <p><span>©</span>1996-2016 兔老板 版权所有 </p>
            <p><a href="tel:4000055002">服务热线：400-0000-000</a></p>
          </div>
        </div>
      </div>
    </div>
    <tabbar style="position:fixed">
      <tabbar-item selected link="/index">
        <img slot="icon" src="../assets/images/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/worker">
        <img slot="icon" src="../assets/images/icon_nav_msg.png">
        <span slot="label">工人</span>
      </tabbar-item>
      <tabbar-item  link="/materials">
        <img slot="icon" src="../assets/images/icon_nav_article.png">
        <span slot="label">建材</span>
      </tabbar-item>
      <tabbar-item link="/mine">
        <img slot="icon" src="../assets/images/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import FooterNav from '@/components/footer.vue'
  import {ButtonTab, SwiperItem, GroupTitle, Group, ButtonTabItem, Divider, XInput, XButton, Cell, XImg,Selector,Search,Swiper,
    Grid, GridItem,Tabbar, TabbarItem } from 'vux'
  const baseList = [{
    url: 'http://m.baidu.com',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'http://m.baidu.com',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'http://m.baidu.com',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
    title: '送你一次旅行'
  }]
  export default {
    ready () {
      document.querySelector('body').style.height = '100%'
      document.querySelector('html').style.height = '100%'
      document.querySelector('#app').style.height = '100%'
    },
    data () {
      return {
        demo01_list: baseList,
        demo01_index: 0,
        autoFixed: false,
        userType: localStorage.getItem('userType')
      }
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        this.results = val ? getResult(this.value) : []
      },
      demo01_onIndexChange (index) {
        this.demo01_index = index
      },
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      }
    },
    components: {
      SwiperItem,
      ButtonTab,
      ButtonTabItem,
      Divider,
      XInput,
      GroupTitle,
      Group,
      XButton,
      Cell,
      XImg,
      Selector,
      Search,
      Swiper,Grid, FooterNav, GridItem,
      Tabbar, TabbarItem,
    }
  }
</script>
<style scoped>
  @import "../assets/css/newWap-index.css";
  @import "../assets/css/newWap-public.css";
  @import "../assets/css/idangerous.css";
  .copyright {
    font-size: 12px;
    color: #ccc;
    text-align: center;
  }
  .text-scroll {
    border: 1px solid #ddd;
    border-left: 1px;
    border-right: 1px;
  }
  .text-scroll p{
    font-size: 12px;
    text-align: center;
    line-height: 30px;
  }
  .black {
    background-color: #000;
  }
  .title{
    line-height: 100px;
    text-align: center;
    color: #fff;
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  .swiper-demo-img img {
    width: 100%;
  }

  .float-test{
    width:200px;
    height:400px;
    background-color:#459898;
    float:left;
    margin:20px;
  }
</style>
