<template>
  <div>
    <x-header>我的收藏</x-header>
    <div class="myCollection">

      <div v-for="item in collectionList" key="item.goodsId">
        <div class="goods-img">
          <img :src="item.img"/>
        </div>
        <div class="goods-info">
          <p>{{item.name}}</p>
          <div><span>￥{{item.price}}</span><a href="javascript:;">取消收藏</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {CheckIcon, XButton, XHeader} from 'vux'

  export default {
    name: 'myCollection',
    data() {
      return {
        collectionList: [{
          goodsId: '1',
          name: 'MD100*0.5-DKSKK+125这是一个什么玩意',
          price: '2142',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
        }, {
          goodsId: '2',
          name: 'MD100*0.5-DKSKK+125这是一个什么玩意',
          price: '2142',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
        }, {
          goodsId: '3',
          name: 'MD100*0.5-DKSKK+125这是一个什么玩意',
          price: '2142',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
        }, {
          goodsId: '4',
          name: 'MD100*0.5-DKSKK+125这是一个什么玩意',
          price: '2142',
          img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
        }]
      }
    },
    components: {
      CheckIcon, XButton, XHeader
    }
  }
</script>

<style scoped lang="less">
  .myCollection > div {
    padding: 17.5px 20px;
    height: 90px;
    background-color: #FFFFFF;
    font-size: 14px;
    margin-bottom: 10px;
    .goods-img {
      width: 90px;
      height: 90px;
      margin-right: 17.5px;
      overflow: hidden;
      border-radius: 6px;
      background-color: #eaeeef;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .goods-info {
      height: 90px;
      float: left;
      width: calc(~"100% - 107.5px");
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      > p {
        line-height: 20px;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      > div a {
        float: right;
      }
    }
  }
</style>
