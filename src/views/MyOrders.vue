<template>
	<div class="myOrders">
    <x-header>收货地址</x-header>
		<tab :line-width="2" custom-bar-width="45px">
			<tab-item :selected="selected == 1" @on-item-click="getOrderList(1)">全部</tab-item>
			<tab-item :selected="selected == 2" @on-item-click="getOrderList(2)">待付款</tab-item>
			<tab-item :selected="selected == 3" @on-item-click="getOrderList(3)">待收货</tab-item>
			<tab-item :selected="selected == 4" @on-item-click="getOrderList(4)">待评价</tab-item>
		</tab>
		<!--显示全部-->
		<div class="order-all">
			<div v-for="item in orderAll" v-show="item.status == selected || selected == 1">
				<div class="vux-1px-b">
					<span>订单编号:{{item.orderNo}}</span>
					<span v-if="item.status == 2" style="color:#f53c27">{{item.status | filterState}}</span>
					<span v-if="item.status == 3" style="color:#f59a27 ">{{item.status | filterState}}</span>
	    			<span v-if="item.status==4" style="color:#3a3a3c ">{{item.status | filterState}}</span>
	    		</div>
	    		<div class="img-box ">
	    			<div>
		    			<img v-for="imgItem in item.imgs" :src="imgItem"/>
	    			</div>
	    		</div>
	    		<div class="vux-1px-t ">
	    			<span>共{{item.quantity}}件&nbsp;合计:<span>￥{{item.amount}}</span></span>
	    			<button class="btn " @click.native="getOrderList(1)">{{item.status | filterBtnTxt}}</button>
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
				orderAll: '',
				orderImgWidth: 300,
				selected: this.$route.query.selected ? this.$route.query.selected : 1,//tab选中状态
			}
		},
    created(){
      this.selected = 1;
      this.getOrderList(1);
    },
		components: {
			Tab,
			TabItem,XHeader
		},
		methods: {
      getOrderList(status){
        let param = new URLSearchParams();

        if (status==1){
          this.selected=1
          status=''
        } else if(status==2){
          this.selected=2
        }else if(status==3){
          this.selected=3
        }else if(status==4){
          this.selected=4
        }
        param.append("status", status);
        this.$http({
          method: 'get',
          url: 'order/v1/orderList',
          params: param
        }).then((response) => {
          if (response.data.code === 200) {
            this.orderAll=response.data.data
            console.log("response.data.data=="+JSON.stringify(response.data.data))
          } else {
            this.$vux.toast.text('获取订单失败')
          }
        }).catch(function (response) {
          console.error(response)
        })
      },
      directView(){
        console.log("status=")
      }
		},
		mounted(){
			//console.log("mounted==="+this.$route.query.selected);

		},
		filters: {
			filterState: function(value){
				if(value == 2){
					value = '待付款';

				}else if(value == 3){
					value = '待收货';
				}else if(value == 4){
					value = '待评价';
				}
				return value;
			},
			filterBtnTxt: function(value){
				if(value == 2){
					value = '立即支付';
				}else if(value == 3){
					value = '确认收货';
				}else if(value == 4){
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
