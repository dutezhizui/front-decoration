<template>
  <div>
    <x-header title="兔老板"></x-header>
    <group>
      <cell title="修改密码" link="/modifyPassword"></cell>
      <x-switch title="退出" v-model="show7"></x-switch>
    </group>

    <div v-transfer-dom>
      <popup v-model="show7" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
          <div style="padding:20px 15px;">
            <x-button type="primary">确定</x-button>
            <x-button @click.native="show7 = false">取消</x-button>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
  import { TransferDom, Popup, Group, Cell, XButton, XSwitch, Toast,XHeader } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Popup,
      Group,
      Cell,
      XSwitch,
      Toast,
      XButton,
      XHeader
    },
    data () {
      return {
        show7: false
      }
    },
    methods: {
      log (str) {
        console.log(str)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/close.less';
  .popup0 {
    padding-bottom:15px;
    height:200px;
  }
  .popup1 {
    width:100%;
    height:100%;
  }
  .popup2 {
    padding-bottom:15px;
    height:400px;
  }
  .position-vertical-demo {
    background-color: #ffe26d;
    color: #000;
    text-align: center;
    padding: 15px;
  }
  .position-horizontal-demo {
    position: relative;
    height: 100%;
    .vux-close {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) scale(4);
      color: #000;
    }
  }
</style>
