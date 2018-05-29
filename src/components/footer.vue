<template>
  <div>
    <tabbar style="position:fixed">
      <tabbar-item selected link="/index">
        <img slot="icon" src="../assets/images/icon_index.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/worker">
        <img slot="icon" src="../assets/images/icon_worker.png">
        <span slot="label">工人</span>
      </tabbar-item>
      <tabbar-item link="/materials">
        <img slot="icon" src="../assets/images/icon_contructing.png">
        <span slot="label">建材</span>
      </tabbar-item>
      <tabbar-item link="/mine">
        <img slot="icon" src="../assets/images/icom_mine.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>
