<template>
  <div>
    <div>
      <x-header>修改密码</x-header>
      <group label-width="5.5em" label-margin-right="2em"  label-align="justify">
        <x-input title="旧密码" type="password" :max="10" :min="6" v-model="oldpassword"></x-input>
        <x-input title="新密码" type="password" :max="10" :min="6" v-model="newpassword"></x-input>
        <x-input title="确认密码" type="password" :max="10" :min="6" v-model="confirmPassword"></x-input>
        <x-button text="确认修改" type="primary" @click.native="modifyPassword()" style="margin-top:1cm;border-radius:99px;"></x-button>
      </group>
    </div>
  </div>
</template>

<script>
  import {GroupTitle, Group, Divider, XInput, XButton, Cell, XHeader } from 'vux'
  export default {
    data() {
      return {
        oldpassword: '',
        newpassword: '',
        confirmPassword: ''
      }
    },
    components: {
      Divider,
      XInput,
      GroupTitle,
      Group,
      XButton,
      Cell,
      XHeader
    },
    methods: {
      modifyPassword() {
        let param = new URLSearchParams();
        param.append("phone", this.phone);
        param.append("codeType", 2);

        this.$http({
          method: 'post',
          url: 'user/v1/modifyPassword',
          data: {
            newPassword: this.newpassword,
            oldPassword: this.oldpassword,
            confirmPassword: this.confirmPassword
          }
        }).then((response) => {
          if (response.data.code === 200) {
            this.$vux.toast.text('修改成功')
            this.$router.push({path: 'setting'})
          } else {
            this.$vux.toast.text('修改失败')
          }
        }).catch(function (response) {
          this.$vux.toast.text('发送失败')
        })
      }
    }
  }
</script>

<style scoped>

</style>
