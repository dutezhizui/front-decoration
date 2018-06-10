<template>
  <div class="addAddress">
    <x-header>添加收货地址</x-header>
    <group>
      <x-input title="收件人" placeholder="请输入您的姓名" v-model="name" required text-align="left" label-width="80px"></x-input>
      <x-input title="手机号" name="mobile" placeholder="请输入您的手机号" v-model="phone" keyboard="number"
               is-type="china-mobile" required text-align="left" label-width="80px"></x-input>
      <x-address title="省市区" placeholder="请选择地区" v-model="region" :list="addressData" value-text-align="left"
                 label-width="80px"></x-address>
      <x-input title="详细地址" placeholder="请输入详细地址" v-model="detailAddress" required text-align="left"
               label-width="80px"></x-input>
    </group>
    <check-icon class="is-default" :value.sync="isDefault" @click.native="handleCheckedItem">默认地址</check-icon>
    <x-button type="primary" class="add-btn" @click.native="handleAddAddress">确认添加</x-button>
  </div>
</template>

<script>
  import {XInput, Group, XButton, XAddress, ChinaAddressV4Data, CheckIcon, XHeader} from 'vux'

  export default {
    name: 'addAddress',
    data() {
      return {
        addressData: ChinaAddressV4Data,
        name: '',//收件人
        phone: '',//手机号
        province: '',//省，
        city: '',//市
        country: '',//区
        region: [],//地区
        address: '',//详细地址
        isDefault: false,
        detailAddress: ''
      }
    },
    methods: {
      handleCheckedItem() {
        console.log("isdefault=="+this.isDefault)
        if (this.isDefault==true){
          this.isDefault=true
        }else {
          this.isDefault=false
        }
      },
      handleAddAddress() {
        this.$http({
          method: 'post',
          url: 'address/v1/addAddress',
          data: {
            region: this.region,
            name: this.name,
            phone: this.phone,
            detailAddress: this.detailAddress,
            isDefault: this.isDefault
          }
        }).then((response) => {
          if (response.data.code === 200) {
            this.$vux.toast.text('添加地址成功')
            this.$router.push({
              path: '/MyAddress'
            })
          } else {
            this.$vux.toast.text('添加地址失败')
            /*this.$vux.alert.show({
              content: '登录失败'
            })*/
          }
        }).catch(function (response) {
          console.error(response)
        })
      }
    },
    components: {
      XInput,
      XButton,
      Group,
      XAddress,
      CheckIcon, XHeader
    },
  }
</script>

<style scoped lang="less">
  .is-default {
    margin-left: 10px;
    margin-top: 10px;
  }

  .add-btn {
    position: fixed;
    bottom: 0px;
    left: 0px;
    font-size: 14px;
    height: 50px;
  }
</style>
