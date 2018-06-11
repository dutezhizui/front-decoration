<template>
	<div class="receiptAddress">
    <x-header>收货地址</x-header>
		<div class="addres-item" v-for="item in addressList" @click="handleSelect">
			<p>{{item.name}}&nbsp;&nbsp;{{item.phone}}</p>
			<p>{{item.provice}}{{item.city}}{{item.area}}{{item.detailAddress}}</p>
			<div>
				<check-icon :value.sync="item.isDefault" @click.native.stop="handleCheckedItem(item)">默认地址</check-icon>
				<router-link @click.native.stop :to="{path:'/addAddress',query:{addressId:item.id}}">编辑</router-link>
			</div>
		</div>
		<x-button type="primary" class="add-btn" @click.native="handleAddAddress">+ 添加收货地址</x-button>
	</div>
</template>

<script>
	import { CheckIcon, XButton,XHeader } from 'vux'
	export default {
		name: 'receiptAddress',
    created (){
		  this.getAddressList();
    },
		data() {
			return {
				checked:true,
				addressList:[{
					name:'张三',
					mobile:'18366667777',
					address:'上海上海市浦东新区超神一条街111号',
					isDefault:true
				},{
					name:'李四',
					mobile:'18366667777',
					address:'上海上海市浦东新区超神一条街111号',
					isDefault:false
				}]
			}
		},
		methods:{
			handleCheckedItem(item){
				this.addressList.forEach((item) => {
					item.isDefault = false;
				})
				item.isDefault = true;
			},
			handleAddAddress(){
				this.$router.push({
					path:'/AddAddress'
				})
			},
			handleSelect(){
				this.$router.push({
					path:'/PerfectOrder'
				})
			},
      getAddressList() {
        let param = new URLSearchParams();
        this.$http({
          method: 'get',
          url: 'address/v1/addressList',
          data: param
        }).then((response) => {
          if (response.data.code === 200) {
            console.log("addressList=="+ response.data.data)
            this.addressList=response.data.data

          } else {
            console.log("get userInfo error")
          }
        }).catch(function (response) {
          console.log("get userInfo error")
        })
      },
		},
		components: {
			CheckIcon,
			XButton,XHeader
		},
	}
</script>

<style scoped lang="less">
	.receiptAddress{
		padding-bottom: 50px;
	}
	.addres-item{
		height: 95px;
		padding: 15px;
		background-color: #FFFFFF;
		font-size: 13px;
		margin-bottom: 10px;
		p:first-of-type{
			font-weight: bold;
			font-size: 16px;
			margin-bottom: 5px;
		}
		p:last-of-type{
			height: 40px;
			line-height: 20px;
			-webkit-line-clamp: 2;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
		>div{
			height: 30px;
			line-height: 30px;
			a{
				float: right;
				display: inline-block;
				width: 60px;
				height: 100%;
				text-align: center;
			}
		}
	}
	.add-btn{
		position: fixed;
		bottom: 0px;
		left: 0px;
		font-size: 14px;
		height: 50px;
	}
</style>
