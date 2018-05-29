<template>
  <div>
    <x-header>修改密码</x-header>
    <group label-width="5.5em" label-margin-right="2em"  label-align="justify">
      <x-input title="手机" mask="99999999999" v-model="phone" :max="13" is-type="china-mobile"></x-input>
      <x-input title="发送验证码" class="weui-vcode" placeholder="请输入验证码" v-model="verifyCode">
        <x-button slot="right" type="primary" mini :disabled="!show" @click.native="getCode()">
          <span v-show="show">获取验证码</span>
          <span v-show="!show" class="count">{{count}} s</span>
        </x-button>
      </x-input>
      <x-input title="密码" type="password" :max="10" :min="6" v-model="password"></x-input>
      <x-input title="确认密码" type="password" :max="10" :min="6" v-model="confirmPassword"></x-input>
      <x-button text="确认" type="primary" @click.native="" style="margin-top:1cm;border-radius:99px;"></x-button>
    </group>
  </div>
</template>
<script>
  import {ButtonTab, GroupTitle, Group, ButtonTabItem, Divider, XInput, XButton, Cell, XImg,Selector,XHeader,Toast,ToastPlugin,Alert } from 'vux'
  const TIME_COUNT = 60;
  export default {
    data() {
      return {
        phone: '',
        verifyCode: '',
        password: '',
        confirmPassword: '',
        show: true,
        count: '',
        timer: null
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
      XHeader,Alert,
      Toast,ToastPlugin
    },
    methods: {
      modifyPassword() {
        this.$http({
          method: 'post',
          url: 'api/user/v1/forgetPassword',
          data: {
            phone: this.phone,
            verifyCode: this.verifyCode,
            password: this.password,
            confirmPassword: this.confirmPassword
          }
        }).then((response) => {
          if (response.data.code === 200) {
            localStorage.setItem('token', response.data.data.token)
            this.$router.push({path: 'mine'})
          } else {
            this.$vux.toast.text('修改密码失败')
            /*this.$vux.alert.show({
              content: '登录失败'
            })*/
          }
        }).catch(function (response) {
          console.error(response)
        })
      },
      getCode(){
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
        this.$http({
          method: 'post',
          url: 'api/sms/v1/send',
          data: {
            phone: this.phone,
            codeType: 2
          }
        }).then((response) => {
          if (response.data.code === 200) {
            localStorage.setItem('token', response.data.data.token)
            this.$router.push({path: 'mine'})
          } else {
            this.$vux.toast.text('发送失败')
            /*this.$vux.alert.show({
              content: '登录失败'
            })*/
          }
        }).catch(function (response) {
          console.error(response)
        })
      }
    }
  }
</script>

<style scoped>

</style>
