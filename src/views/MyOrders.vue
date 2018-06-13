<template>
	<div class="myOrders">
    <x-header>收货地址</x-header>
		<tab :line-width="2" custom-bar-width="45px">
			<tab-item :selected="selected == 'All'" @on-item-click="selected = 'All'">全部</tab-item>
			<tab-item :selected="selected == 'waitPay'" @on-item-click="selected = 'waitPay'">待付款</tab-item>
			<tab-item :selected="selected == 'waitGet'" @on-item-click="selected = 'waitGet'">待收货</tab-item>
			<tab-item :selected="selected == 'waitAccess'" @on-item-click="selected = 'waitAccess'">待评价</tab-item>
		</tab>
		<!--显示全部-->
		<div class="order-all">
			<div v-for="item in orderAll" v-show="item.state == selected || selected == 'All'">
				<div class="vux-1px-b">
					<span>订单编号:{{item.number}}</span>
					<span v-if="item.state == 'waitPay'" style="color:#f53c27">{{item.state | filterState}}</span>
					<span v-if="item.state == 'waitGet'" style="color:#f59a27 ">{{item.state | filterState}}</span>
	    			<span v-if="item.state=='waitAccess'" style="color:#3a3a3c ">{{item.state | filterState}}</span>
	    		</div>
	    		<div class="img-box ">
	    			<div>
		    			<img v-for="imgItem in item.imgs" :src="imgItem"/>
	    			</div>
	    		</div>
	    		<div class="vux-1px-t ">
	    			<span>共{{item.count}}件&nbsp;合计:<span>￥{{item.totalPrice}}</span></span>
	    			<button class="btn ">{{item.state | filterBtnTxt}}</button>
	    		</div>
	    	</div>
	    </div>
	</div>
</template>

<script>
	import { Tab, TabItem,XHeader } from 'vux'
	export default {
		name: 'myOrders',
		data() {
			return {
				orderAll:[{
					number:'123412521234',
					count:3,
					totalPrice:43522.23,
					state:'waitPay',
					imgs:[require('../assets/images/demo.png'),require('../assets/images/demo.png'),require('../assets/images/demo.png'),
            require('../assets/images/demo.png'),require('../assets/images/demo.png'),require('../assets/images/demo.png')]
				},{
					number:'123412521234',
					count:3,
					totalPrice:43522.23,
					state:'waitGet',
					imgs:[require('../assets/images/demo.png'),require('../assets/images/demo.png'),require('../assets/images/demo.png')]
				},{
					number:'123412521234',
					count:3,
					totalPrice:43522.23,
					state:'waitAccess',
					imgs:[require('../assets/images/demo.png'),require('../assets/images/demo.png'),require('../assets/images/demo.png')]
				},{
					number:'123412521234',
					count:3,
					totalPrice:43522.23,
					state:'waitPay',
					imgs:[require('../assets/images/demo.png'),require('../assets/images/demo.png'),require('../assets/images/demo.png')]
				}],
				orderImgWidth:300,
				selected:this.$route.query.selected ? this.$route.query.selected : 'All',//tab选中状态
			}
		},
		components: {
			Tab,
			TabItem,XHeader
		},
		methods: {
      getCode(){

        this.$http({
          method: 'get',
          url: 'api/orderList/v1/orderList',
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
		},
		mounted(){
			console.log(this.$route.query);

		},
		filters: {
			filterState: function(value){
				if(value == 'waitPay'){
					value = '待付款';
				}else if(value == 'waitGet'){
					value = '待收货';
				}else if(value == 'waitAccess'){
					value = '待评价';
				}
				return value;
			},
			filterBtnTxt: function(value){
				if(value == 'waitPay'){
					value = '立即支付';
				}else if(value == 'waitGet'){
					value = '确认收货';
				}else if(value == 'waitAccess'){
					value = '立即评价';
				}
				return value;
			}
		}
	}
</script>

<style scoped lang="less">
	@white:#FFFFFF;
	@black:#393a3e;
	.order-all{
		margin-bottom: 15px;
		>div{
			padding-left: 15px;
			background-color: @white;
			font-size:12px;
			margin-top:15px;
			overflow-x:scroll;
			color:#666666;
			>div:first-of-type,>div:last-of-type{
				height: 45px;
				line-height: 45px;
				padding-right: 10px;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			>div:last-of-type{
				>span span{
					color: @black;
				}
				button{
					width: 70px;
					height: 27px;
					border: none;
					background-color: @black;
					color: @white;
					font-size: 0.85em;
				}
			}
			.img-box{
				padding: 10px 15px 10px 0px;
				>div{
					overflow: scroll;
					width: auto;
					white-space:nowrap;
					img{
						width: 60px;
						height: 60px;
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
