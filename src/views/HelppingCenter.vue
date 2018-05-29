<template>
  <div>
    <x-header>帮助中心</x-header>
    <tab :line-width=2 active-color='#fc378c' v-model="index">
      <tab-item class="vux-center" v-for="(item, index) in listItem" :key="index">{{item}}</tab-item>
    </tab>
    <panel :list="list1" :type="type" v-if="index==0"></panel>
    <panel :list="list2" :type="type" v-else-if="index==1"></panel>
    <panel :list="list3" :type="type" v-else-if="index==2"></panel>
    <panel :list="list4" :type="type" v-else-if="index==3"></panel>

  </div>
</template>

<script>
  import {Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem, XHeader, Panel} from 'vux'

  const list = () => ['注册登录', '账号安全', '下单支付', '服务方式']
  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      XHeader,
      Panel
    },
    data() {
      return {
        listItem: list(),
        index: 0,
        type: '2',
        getBarWidth: function (index) {
          return (index + 1) * 22 + 'px'
        },
        list1: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '如何注册一个账号？',
          desc: '进入“注册页面”，设置用户名、登录密码，完善资料并验证手机号即可即完成注册。'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '身份认证有什么作用？',
          desc: '通过身份认证来提高用户的真实性与可信度，同时在一定程度上保证用户的信息质量。',
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        },{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '忘记登录密码怎么办？',
          desc: '可在登录页面使用手机号及验证码进行验证并修改密码。'
        },{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '同一个账号是否可以购买顶呱呱内所有业务的服务？',
          desc: '账号在顶呱呱内都是通用的。'
        }],
        list2: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '如何修改账号密码？',
          desc: '进入“个人中心-个人信息”，点击“登录密码”后的“修改”，根据引导即可完成密码修改。',
          url: '/component/cell'
        },{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '我和我公司的信息会泄露吗？',
          desc: '我们会对客户的资料信息严格保密。',
          url: '/component/cell'
        },{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '在线支付是否会存在风险？',
          desc: '在线支付我们都是调用第三方支付接口或者是网银网站进行支付，若您谨慎操作，支付过程中我泄露支付信息不轻信骗局，不会出问题。',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '如何修改个人资料？',
          desc: '进入“个人中心-个人信息”进行修改。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }],
        list3: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '如何下单？',
          desc: '1. 登陆站好-选择服务项-填写订单-提交订单。<br>\n' +
          '              2. 选择服务项-快捷登陆-填写订单-提交订单。',
          url: '/component/cell'
        },{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '如何在线办理业务？',
          desc: '直接标价业务可自行完成订单，完成后立即会有专人联系您完成服务；未直接标价业务可申请服务，提交相关信息后我们会有专人联系您继续完成订单。',
          url: '/component/cell'
        },{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '完成订单之后如何服务？',
          desc: '购买相应的服务项后，我们会立即有专人与您联系，提供一对一的服务。',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '订单已提交成功，如何付款？',
          desc: '选择支付方式进行在线支付；提交订单-支付-选择支付（支付平台），微信支付、财付通等第三方支付平台，选择后自动跳转至各支付平台进行支付。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }],
        list4: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '如何在线办理业务？',
          desc: '直接标价业务可自行完成订单，完成后立即会有专人联系您完成服务；未直接标价业务可申请服务，提交相关信息后我们会有专人联系您继续完成订单。',
          url: '/component/cell'
        },{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '因为市场政策等原因致使服务无法完成怎么办？',
          desc: '顾客购买服务后，若因政策变化等发生无法完成服务的情况，经沟通核实后顾客可线下取消订单。',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '完成订单之后如何服务？',
          desc: '购买相应的服务项后，我们会立即有专人与您联系，提供一对一的服务。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }],
        footer: {
          title: '更多',
          url: 'http://vux.li'
        }
      }
    },
    methods: {
      switchTabItem(index) {
        console.log('on-before-index-change', index)
        this.$vux.loading.show({
          text: 'loading'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.index01 = index
        }, 1000)
      },
      onImgError(item, $event) {
        console.log(item, $event)
      },
      onItemClick(index) {
        console.log('on item click:', index)
      },
      addTab() {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab() {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next() {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev() {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';

  .box {
    padding: 15px;
  }

  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }

  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }

  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }

  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
</style>
