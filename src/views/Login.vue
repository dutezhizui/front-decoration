<template>
  <div>
    <div style="padding: 15px;">
      <button-tab>
        <button-tab-item @on-item-click="changeLoginWay(1)">快速登录</button-tab-item>
        <button-tab-item @on-item-click="changeLoginWay(2)" selected>账号登录</button-tab-item>
      </button-tab>
      <div align="center">
        <img type="vertical-align:middle;" src="../assets/images/logo.png">
      </div>
      <div v-if="logWay">
        <group title="" label-width="5.5em" label-margin-right="2em" label-align="justify">
          <x-input title="用户名" v-model="account" placeholder="请输入手机号"></x-input>
          <x-input title="密码" type="password" v-model="password" placeholder="请输入密码"></x-input>
        </group>
      </div>
      <div v-else>
        <group>
          <x-input title="手机号码" mask="99999999999" placeholder="请输入手机号" v-model="phone" :max="13" is-type="china-mobile"></x-input>
          <x-input title="" class="weui-vcode" placeholder="请输入验证码" v-model="verifyCode">
            <x-button slot="right" type="primary" mini :disabled="!show" @click.native="getCode()">
              <span v-show="show">获取验证码</span>
              <span v-show="!show" class="count">{{count}} s</span>
            </x-button>
          </x-input>
        </group>
      </div>
      <x-button text="立即登录" type="primary" @click.native="login" style="margin-top:1cm;border-radius:99px;"></x-button>
      <div class="other-box clear" align="center" style="margin-top: 1cm">
        <router-link to="/register" style="margin-right: 5px" >立即注册</router-link>
        <router-link to="/forgetPassword" style="margin-left: 5px">忘记密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {ButtonTab, GroupTitle, Group, ButtonTabItem, Divider, XInput, XButton, Cell, XImg,md5,Toast,ToastPlugin,Alert} from 'vux'
  const TIME_COUNT = 60;
  export default {
  data() {
    return {
      account: '',
      password: '',
      phone: '',
      verifyCode: '',
      logWay: true,
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
      Alert,
      Toast,ToastPlugin
    },
    methods: {
      changeLoginWay(index) {
        if (index===1){
          this.logWay=false
          console.log("index1==="+this.logWay)
        }else {
          this.logWay=true
        }
      },
      login: function () {
        if (this.logWay===true){
          this.$http({
            method: 'post',
            url: 'user/v1/commonLogin',
            data: {
              account: this.account,
              password: this.password
            }
          }).then((response) => {
            if (response.data.code === 200) {
              localStorage.setItem('token', response.data.data.token)
              this.$router.push({path: 'mine'})
            } else {
              this.$vux.toast.text('登录失败')
              /*this.$vux.alert.show({
                content: '登录失败'
              })*/
            }
          }).catch(function (response) {
            console.error(response)
          })
        } else {
          this.$http({
            method: 'post',
            url: 'user/v1/fastLogin',
            data: {
              phone: this.phone,
              verifyCode: this.verifyCode
            }
          }).then((response) => {
            if (response.data.code === 200) {
              localStorage.setItem('token', response.data.data.token)
              this.$router.push({path: 'mine'})
            } else {
              this.$vux.toast.text('登录失败')
              /*this.$vux.alert.show({
                content: '登录失败'
              })*/
            }
          }).catch(function (response) {
            console.error(response)
          })
        }

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
          url: 'sms/v1/send',
          data: {
            phone: this.phone,
            codeType: 1
          }
        }).then((response) => {
          if (response.data.code === 200) {
            localStorage.setItem('token', response.data.data.token)
            this.$router.push({path: 'mine'})
          } else {
            this.$vux.toast.text('登录失败')
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
<style lang="css" >
  body{
    background-color: #fff;
  }

    .logoPic{
      width:100%;
      height:4.25rem;
      text-align: center;
      display:block;
      margin-bottom:0.7rem;
    }
    .borderLeft {
      float:right;
      display: block;
      font-size: 12px;
      height:12px;
      line-height:12px;
      color:#00BBCC;
      font-weight:600;
      margin:0.3rem 1.5rem 0 0;
      font-family:'PingFangSC-Regular';
    }
    .weui-cells{
      width:60%;
      margin-left:20%;
      font-size:14px;

    }
    .borderTop{
      border-top:none;
    }

      .success{
        color:#00CCC2;
        border-bottom:2px solid #81E8E2;
      }

    .btn{
      color:#00BBCC;
      font-family: PingFangSC-Regular;
      background-color: #fff;
      border:none;
    }
    .grayBtn{
      color:#B3B3B3;
    }

</style>
