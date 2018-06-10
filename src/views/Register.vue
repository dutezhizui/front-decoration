<template>
  <div>
    <x-header>注册</x-header>
    <group label-width="5.5em" label-margin-right="2em" label-align="justify">
      <cell title="头像">
        <cropper title="头像" :headerImage="headerImage" @getHeaderImage="newHeaderImage"></cropper>
      </cell>
      <x-input title="手机号码" mask="99999999999" v-model="phone" :max="13" required is-type="china-mobile"></x-input>
      <x-input title="" class="weui-vcode" placeholder="请输入验证码" v-model="verifyCode">
        <x-button slot="right" type="primary" mini :disabled="!show" @click.native="getCode()">
          <span v-show="show">获取验证码</span>
          <span v-show="!show" class="count">{{count}} s</span>
        </x-button>
      </x-input>
      <x-input title="姓名" v-model="userName" required :max="10"></x-input>
      <x-input title="密码" type="password" :max="10" required :min="6" v-model="password"></x-input>
      <x-input title="确认密码" type="password" :max="10" required :min="6" v-model="confirmPassword"></x-input>
      <popup-radio title="身份" :options="userTypeOptions" v-model="userType" placeholder="请选择"></popup-radio>
      <x-button text="注册" type="primary" style="margin-top:1cm;border-radius:99px;"
                @click.native="register()"></x-button>
    </group>
  </div>
</template>

<script>
  import {
    ButtonTab,
    GroupTitle,
    Group,
    ButtonTabItem,
    Divider,
    XInput,
    XButton,
    Cell,
    XImg,
    Selector,
    XHeader,
    PopupRadio,
    md5,
    Toast,
    ToastPlugin,
    Alert
  } from 'vux'
  import cropper from "@/components/cropper"

  const TIME_COUNT = 60;
  export default {
    data() {
      return {
        phone: '',
        userName: '',
        password: '',
        confirmPassword: '',
        headerImage: '',
        verifyCode: '',
        userType: '',
        headerImageUrl: '',
        userTypeOptions: [{
          key: '1',
          value: '工人'
        }, {
          key: '2',
          value: '业主'
        }, {
          key: '3',
          value: '建材商'
        }],
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
      XHeader,
      cropper, md5, PopupRadio, Alert,
      Toast, ToastPlugin
    },
    methods: {
      newHeaderImage(newImg) {
        this.headerImage = newImg;
        this.postImg()
      },
      postImg() {
        let param = new FormData()  // 创建form对象
        param.append('headerImage', this.postHeaderImg)
        this.$http({
          method: 'post',
          url: 'upload/v1/uploadHeadImage',
          data: this.$qs.stringify({
            headerImage: this.headerImage
          }),
          withCredentials: true,
        }).then((res) => {
          let response = res;
          console.log("response=" + response.data.code)
          if (response.data.code == 200) {
            console.log("imageUrl="+response.data.data)
            this.$vux.toast.text('上传成功')
            this.headerImageUrl = response.data.data;
          } else {
            this.$vux.toast.text('上传失败')
          }
        }).catch(function () {
          this.$vux.toast.text('上传失败')
        });
      },
      register() {
        console.log("headUrl==="+this.headerImageUrl)
        this.$http({
          method: 'post',
          url: 'user/v1/register',
          data: {
            headUrl: this.headerImageUrl,
            verifyCode: this.verifyCode,
            userName: this.userName,
            password: this.password,
            confirmPassword: this.confirmPassword,
            userType: this.userType,
            phone: this.phone
          },
          //headers:{'Content-Type':'application/json'}
        }).then((response) => {
          if (response.data.code === 200) {
            localStorage.setItem('token', response.data.data.token)
            this.$router.push({path: 'mine'})
          } else {
            this.$vux.toast.text('注册失败')
          }
        }).catch(function (response) {
          console.error(response)
        })
      },
      getCode() {
        let param = new URLSearchParams();
        param.append("phone", this.phone);
        param.append("codeType", 2);
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
          data: param
        }).then((response) => {
          if (response.data.code === 200) {
            this.$vux.toast.text('发送成功')
          } else {
            this.$vux.toast.text('发送失败')
          }
        }).catch(function (response) {
          this.$vux.toast.text('发送失败')
        })
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #demo #button {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background: white;
  }

  #demo .show {
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    border: 1px solid #d5d5d5;
  }

  #demo .picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #demo .container {
    z-index: 99;
    position: fixed;
    padding-top: 60px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 1);
  }

  #demo #image {
    max-width: 100%;
  }

  .cropper-view-box, .cropper-face {
    border-radius: 50%;
  }

  /*!
   * Cropper.js v1.0.0-rc
   * https://github.com/fengyuanchen/cropperjs
   *
   * Copyright (c) 2017 Fengyuan Chen
   * Released under the MIT license
   *
   * Date: 2017-03-25T12:02:21.062Z
   */

  .cropper-container {
    font-size: 0;
    line-height: 0;

    position: relative;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    direction: ltr;
    -ms-touch-action: none;
    touch-action: none
  }

  .cropper-container img {
    /* Avoid margin top issue (Occur only when margin-top <= -height) */
    display: block;
    min-width: 0 !important;
    max-width: none !important;
    min-height: 0 !important;
    max-height: none !important;
    width: 100%;
    height: 100%;
    image-orientation: 0deg
  }

  .cropper-wrap-box,
  .cropper-canvas,
  .cropper-drag-box,
  .cropper-crop-box,
  .cropper-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .cropper-wrap-box {
    overflow: hidden;
  }

  .cropper-drag-box {
    opacity: 0;
    background-color: #fff;
  }

  .cropper-modal {
    opacity: .5;
    background-color: #000;
  }

  .cropper-view-box {
    display: block;
    overflow: hidden;

    width: 100%;
    height: 100%;

    outline: 1px solid #39f;
    outline-color: rgba(51, 153, 255, 0.75);
  }

  .cropper-dashed {
    position: absolute;

    display: block;

    opacity: .5;
    border: 0 dashed #eee
  }

  .cropper-dashed.dashed-h {
    top: 33.33333%;
    left: 0;
    width: 100%;
    height: 33.33333%;
    border-top-width: 1px;
    border-bottom-width: 1px
  }

  .cropper-dashed.dashed-v {
    top: 0;
    left: 33.33333%;
    width: 33.33333%;
    height: 100%;
    border-right-width: 1px;
    border-left-width: 1px
  }

  .cropper-center {
    position: absolute;
    top: 50%;
    left: 50%;

    display: block;

    width: 0;
    height: 0;

    opacity: .75
  }

  .cropper-center:before,
  .cropper-center:after {
    position: absolute;
    display: block;
    content: ' ';
    background-color: #eee
  }

  .cropper-center:before {
    top: 0;
    left: -3px;
    width: 7px;
    height: 1px
  }

  .cropper-center:after {
    top: -3px;
    left: 0;
    width: 1px;
    height: 7px
  }

  .cropper-face,
  .cropper-line,
  .cropper-point {
    position: absolute;

    display: block;

    width: 100%;
    height: 100%;

    opacity: .1;
  }

  .cropper-face {
    top: 0;
    left: 0;

    background-color: #fff;
  }

  .cropper-line {
    background-color: #39f
  }

  .cropper-line.line-e {
    top: 0;
    right: -3px;
    width: 5px;
    cursor: e-resize
  }

  .cropper-line.line-n {
    top: -3px;
    left: 0;
    height: 5px;
    cursor: n-resize
  }

  .cropper-line.line-w {
    top: 0;
    left: -3px;
    width: 5px;
    cursor: w-resize
  }

  .cropper-line.line-s {
    bottom: -3px;
    left: 0;
    height: 5px;
    cursor: s-resize
  }

  .cropper-point {
    width: 5px;
    height: 5px;

    opacity: .75;
    background-color: #39f
  }

  .cropper-point.point-e {
    top: 50%;
    right: -3px;
    margin-top: -3px;
    cursor: e-resize
  }

  .cropper-point.point-n {
    top: -3px;
    left: 50%;
    margin-left: -3px;
    cursor: n-resize
  }

  .cropper-point.point-w {
    top: 50%;
    left: -3px;
    margin-top: -3px;
    cursor: w-resize
  }

  .cropper-point.point-s {
    bottom: -3px;
    left: 50%;
    margin-left: -3px;
    cursor: s-resize
  }

  .cropper-point.point-ne {
    top: -3px;
    right: -3px;
    cursor: ne-resize
  }

  .cropper-point.point-nw {
    top: -3px;
    left: -3px;
    cursor: nw-resize
  }

  .cropper-point.point-sw {
    bottom: -3px;
    left: -3px;
    cursor: sw-resize
  }

  .cropper-point.point-se {
    right: -3px;
    bottom: -3px;
    width: 20px;
    height: 20px;
    cursor: se-resize;
    opacity: 1
  }

  @media (min-width: 768px) {

    .cropper-point.point-se {
      width: 15px;
      height: 15px
    }
  }

  @media (min-width: 992px) {

    .cropper-point.point-se {
      width: 10px;
      height: 10px
    }
  }

  @media (min-width: 1200px) {

    .cropper-point.point-se {
      width: 5px;
      height: 5px;
      opacity: .75
    }
  }

  .cropper-point.point-se:before {
    position: absolute;
    right: -50%;
    bottom: -50%;
    display: block;
    width: 200%;
    height: 200%;
    content: ' ';
    opacity: 0;
    background-color: #39f
  }

  .cropper-invisible {
    opacity: 0;
  }

  .cropper-bg {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
  }

  .cropper-hide {
    position: absolute;

    display: block;

    width: 0;
    height: 0;
  }

  .cropper-hidden {
    display: none !important;
  }

  .cropper-move {
    cursor: move;
  }

  .cropper-crop {
    cursor: crosshair;
  }

  .cropper-disabled .cropper-drag-box,
  .cropper-disabled .cropper-face,
  .cropper-disabled .cropper-line,
  .cropper-disabled .cropper-point {
    cursor: not-allowed;
  }


</style>

