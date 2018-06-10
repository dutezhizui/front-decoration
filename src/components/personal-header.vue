<template>
  <div style="">
    <blur :blur-amount=10 :url="url" >
      <p class="center"><img :src="url"></p>
    </blur>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Blur } from 'vux'
  export default {
    created(){
      console.log("created==="+localStorage.getItem('token'))
      this.getUserInfo()
    },
    methods: {
      getUserInfo() {
        let param = new URLSearchParams();
        this.$http({
          method: 'get',
          url: 'user/v1/userInfo',
          data: param
        }).then((response) => {
          if (response.data.code === 200) {
            this.url=response.data.data.headUrl;
          } else {
            console.log("get userInfo error")
          }
        }).catch(function (response) {
          console.log("get userInfo error")
        })
      }
    },
    components: {
      Blur,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        images: [
          'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
          'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
          'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
        ],
        url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
      }
    }
  }
</script>

<style scoped>
  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
</style>
