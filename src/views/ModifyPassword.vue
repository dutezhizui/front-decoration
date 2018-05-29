<template>
  <div>
    <div>
      <x-header>修改密码</x-header>
      <group label-width="5.5em" label-margin-right="2em"  label-align="justify">
        <x-input title="旧密码" type="password" :max="10" :min="6" v-model="oldpassword"></x-input>
        <x-input title="新密码" type="password" :max="10" :min="6" v-model="newpassword"></x-input>
        <x-input title="确认密码" type="password" :max="10" :min="6" v-model="confirmPassword"></x-input>
        <x-button text="确认修改" type="primary" style="margin-top:1cm;border-radius:99px;"></x-button>
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

    }
  }
</script>

<style scoped>

</style>
