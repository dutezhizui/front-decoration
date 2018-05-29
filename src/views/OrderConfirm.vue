<template>
  <div>
    <x-header>确认支付</x-header>
    <group>
      <div class="order-pay-box">
        <div class="order-pay-list1" style="padding:8px 0">
          <input name="pay" type="radio" value="">
          <label>
            <img src="../assets/images/pay-wx-icon.png" width="100">
          </label>
        </div>
      </div>
      <div class="order-pay-box">
        <div class="order-pay-list1" style="padding:8px 0">
          <input name="pay" type="radio" value="">
          <label>
            <img src="../assets/images/zfb.png" width="100">
          </label>
        </div>
      </div>
      <div class="title-box">联系方式</div>
      <div class="contact-box">
        <ul>
          <li>
            <input id="address_id" value="969" type="hidden">

            <span>姓名</span>
            <input id="address_personName" maxlength="10" value="赵二虎" placeholder="" type="text">
          </li>
          <li>
            <span>电话</span>
            <input id="address_mobile" maxlength="11" value="15149621088" placeholder="" type="tel">
          </li>
          <li>
            <span>地址</span>
            <input id="address_address" maxlength="50" value="广东省东莞市南城区南城步行街9号商铺" placeholder="" type="text">
          </li>
          <li>
            <span>价格</span>
            <input id="price" value="9998" placeholder="" type="text">
          </li>
        </ul>
        <x-button text="确认付款" type="primary" style="margin-top:1cm;border-radius:99px;"></x-button>
      </div>
    </group>
  </div>
</template>



<script>
  import { CellFormPreview, Group, Cell ,XHeader, XButton} from 'vux'

  export default {
    components: {
      CellFormPreview,
      Group,
      Cell,XHeader, XButton
    },
    data () {
      return {
        list: [{
          label: 'Apple',
          value: '3.29'
        }, {
          label: 'Banana',
          value: '1.04'
        }, {
          label: 'Fish',
          value: '8.00'
        }]
      }
    }
  }
</script>
<style>
  @import '../assets/css/order-pay.css';
  @import '../assets/css/newWap-public.css';
</style>
