<template>
  <div>
    <div><personal-header></personal-header></div>
    <div>
    <group>
      <cell title="我的订单" link="/orderList"></cell>
      <cell title="我的收藏" link="/myCollection"></cell>
      <cell title="收货地址" link="/myAddress"></cell>
      <cell title="编辑信息" link="/profile"></cell>
      <cell title="帮助中心" link="/helppingCenter"></cell>
      <cell title="设置" link="/setting" style="margin-bottom: 1.5cm"></cell>
    </group>
    </div>
    <tabbar style="position:fixed">
      <tabbar-item link="/index">
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
      <tabbar-item selected link="/mine">
        <img slot="icon" src="../assets/images/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  import FooterNav from '@/components/footer.vue'
  import PersonalHeader from '@/components/personal-header.vue'
  import {ButtonTab, GroupTitle, Group, ButtonTabItem, Divider, XInput, XButton, Cell, XImg,Selector,XHeader ,Tabbar, TabbarItem} from 'vux'
  export default {
    ready () {
      document.querySelector('body').style.height = '100%'
      document.querySelector('html').style.height = '100%'
      document.querySelector('#app').style.height = '100%'
    },
    data () {
      return {
        userType: localStorage.getItem('userType')
      }
    },
    components: {
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
      XHeader,
      FooterNav,
      PersonalHeader,Tabbar, TabbarItem
    }
  }
</script>
<style>
</style>
