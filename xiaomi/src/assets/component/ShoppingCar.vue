<template>
	<div class="shoopingcar">
		<div class="header">
		<i class="el-icon-arrow-left"></i>
		<span>购物车</span>
		<i class="el-icon-search"></i>
		</div>
		<div class="needLogin" v-show="haveUserName">
			<span class="left">登录后享受更多优惠</span>
			<router-link tag="span" to="/Login" class="lright">去登陆<i class="el-icon-arrow-right"></i></router-link>
		</div>
		<div class="emptycar" v-show="carShops==0">
			<div class="emptycarcon">
				<img src="../images/购物车 (1).png">
				<span>购物车还是空的</span>
				<router-link to="/Index" tag="span" class="btn">去逛逛</router-link>
			</div>
		</div>
		<div class="haveshopping" v-for="(data,index1) in message">
			
			<div class="shoppings clear" v-for="(shopMsg,index) in data">
			<!-- <div><el-checkbox class="check1" @change="ininini" v-model="checked[index1]"></el-checkbox></div> -->
				<div class="shopImg">
					<img :src="shopMsg.imgUrl">
				</div>
				<div class="shopmsg">
					<div class="shopName">{{shopMsg.name}}</div>
					<div class="shopprice"><span>￥</span>{{shopMsg.price}}</div>
					<div class="delShop" @click="delShop(index1)"><i class="el-icon-delete"></i></div>
				</div>
				<div class="price">
					<span>总价：<span class="onePrice">{{shopMsg.price*shopMsg.num}}</span></span>
					<div class="shopcount">
						<div class="count">
							<el-input-number class="inputNumber" v-model="shopMsg.num" @change="handleChange" @click="handleChange1" :min="1"></el-input-number>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="foryou">
			<div class="title">为你推荐</div>
			<div class="content">
				<div class="contents">
					<img src="//i8.mifile.cn/v1/a1/c843ebae-4a6d-c5a9-3964-10e7ca50e8d6.webp?width=720&height=720">
					<div class="introduce">12.5"笔记本 256GB</div>
					<div class="price">￥3999</div>
				</div>
				<div class="contents">
					<img src="//i8.mifile.cn/v1/a1/c843ebae-4a6d-c5a9-3964-10e7ca50e8d6.webp?width=720&height=720">
					<div class="introduce">12.5"笔记本 256GB</div>
					<div class="price">￥3999</div>
				</div>
				<div class="contents">
					<img src="//i8.mifile.cn/v1/a1/c843ebae-4a6d-c5a9-3964-10e7ca50e8d6.webp?width=720&height=720">
					<div class="introduce">12.5"笔记本 256GB</div>
					<div class="price">￥3999</div>
				</div>
				<div class="contents">
					<img src="//i8.mifile.cn/v1/a1/c843ebae-4a6d-c5a9-3964-10e7ca50e8d6.webp?width=720&height=720">
					<div class="introduce">12.5"笔记本 256GB</div>
					<div class="price">￥3999</div>
				</div>
				<div class="contents">
					<img src="//i8.mifile.cn/v1/a1/c843ebae-4a6d-c5a9-3964-10e7ca50e8d6.webp?width=720&height=720">
					<div class="introduce">12.5"笔记本 256GB</div>
					<div class="price">￥3999</div>
				</div>
				<div class="contents">
					<img src="//i8.mifile.cn/v1/a1/c843ebae-4a6d-c5a9-3964-10e7ca50e8d6.webp?width=720&height=720">
					<div class="introduce">12.5"笔记本 256GB</div>
					<div class="price">￥3999</div>
				</div>
			</div>
		</div>
		<div class="allPrice" v-show="carShops!=0">
			<div class="allPrices div">
				<div>共{{carShops}}件,金额：</div>
				<div><span>{{totalPrice}}</span>元</div>
			</div>
			<div class="continueBuy div div1" @click="continueBuy">继续购物</div>
			<div class="goMoney div div1">去结算</div>
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
	export default{
		data(){
			return{
				data:[],
				num1:[],
				count:0,
				onePrice:1299,
				price:'',
				checked:[],
				message:[]
			}
		},
		computed:{
			haveUserName(){
				return this.$store.getters.haveUserName
			},
			totalPrice(){
				var _this=this;
				let aaa=0;
				this.message.forEach(function(item,index){
					aaa+=item[0].price*item[0].num;
				})
				return aaa;
			},
			carShops(){
				return this.message.length
			}
		},
		methods:{
			ininini(message){
				console.log(message)
			},
			handleChange1(){
				this.caltotalPrice();
			},
			caltotalPrice(){
				var _this=this;
				let aaa=0;
				this.message.forEach(function(item,index){
					aaa+=item[0].price*item[0].num;
				})
				this.totalPrice=aaa;
			},
			handleChange(value) {
				this.price=this.onePrice*value;
				this.caltotalPrice();
		    },
		    continueBuy(){
		    	this.$router.push({
		    		path:'/classify'
		    	})
		    },
		    delShop(item){
		    	this.message.splice(item,1);
		    	this.caltotalPrice();
		    }
		},
		mounted(){
			this.$nextTick(function(){
				this.price=this.onePrice;
				this.message=this.$store.getters.shopMsg;
				// this.choice();
				// this.caltotalPrice();
				this.caltotalPrice();
			})
			
			// console.log(this.(shopMsg.price*num1[index1]));
		},
		beforeMount(){
			// this.allPriceooo();

		}

		
	}
</script>
<style lang="less" scoped>
.shoopingcar{
	margin-bottom:1rem;
		.header{
		height:0.7rem;
		width:6.4rem;
		background-color: #eee;
		color:#666;
		line-height: 0.7rem;
		text-align: center;
			span{
				font-size:0.3rem;
				margin:0 auto;
			}
			.el-icon-arrow-left{
				color:#999;
				font-size: 0.3rem;
				margin:0.2rem 0 0 0.1rem;
				float:left;
			}
			.el-icon-search{
				font-size:0.35rem;
				float:right;
				color:#999;
				margin:0.2rem 0.1rem 0 0;
			}
		}
		.needLogin{
			height:0.8rem;
			width:6.4rem;
			line-height: 0.8rem;
			font-size:0.27rem;
			.left{
				margin-left:0.2rem;
				color:#666;
			}
			.lright{
				float:right;
				font-size:0.23rem;
				color:#aaa;
				margin-right:0.2rem;
				.el-icon-arrow-right{
					font-size:0.2rem;
				}
			}
		}
		.emptycar{
			height:0.8rem;
			width:6.4rem;
			line-height: 0.8rem;
			background-color: #eee;
			text-align: center;
			img{
				width:0.6rem;
				height:0.6rem;
				margin-top:0.06rem;
			}
			span{
				font-size:0.25rem;
				color:#999;
			}
			.btn{
				border:0.02rem #ccc solid;
				border-radius: 0.02rem;
				margin-left:0.2rem;
				padding:0.05rem 0.09rem;
				color:#666;
			}
		}
		.foryou{
			.title{
				height:0.8rem;
				width:6.4rem;
				line-height: 0.8rem;
				font-size:0.27rem;
				color:#666;
				margin-left:0.2rem;
			}
			.content{
				width:6.4rem;
				.contents{
					display: inline-block;
					img{
						width:3.172rem;
					}
					.introduce{
						font-size:0.22rem;
						margin:0.15rem 0 0 0.2rem;
						color:#333;
					}
					.price{
						color:#ff7f00;
						font-size:0.23rem;
						margin:0.1rem 0 0 0.2rem;
					}
				}
			}
		}
		.haveshopping{
			width:6.4rem;
			
			.shoppings{
				border-bottom:0.02rem #ddd solid;
				padding:0.3rem 0;
				width:6.4rem;
				height:1.5rem;
				.check1{
				margin:0.56rem 0 0 0.1rem;
				float: left;
				}
				.shopImg{
					float:left;
					width:1.5rem;
					margin-left:0.5rem;
					img{
						width:1.5rem;
						height:1.5rem;
					}
				}
				.shopmsg{
					position: relative;
					float:left;
					height:0.8rem;
					width:4rem;
					margin-left:0.3rem;
					.delShop{
						font-size:0.3rem;
						position: absolute;
						right:0.2rem;
						top:0.39rem;
						color:#666;
					}
					.shopName{
						font-size:0.25rem;
						font-weight: bold;
					}
					.shopjieshao{
						width:2.3rem;
						margin-top:0.1rem;
						font-size:0.28rem;
						color:#999;
					}
					.shopprice{
						position: absolute;
						bottom:0;
						right:0.9rem;
						color:#ff7f00;
						font-size:0.28rem;

					}
				}
				.price{
					float:right;
					margin-right:0.2rem;
					height:0.8rem;
					position: relative;
					width:4rem;
					line-height: 0.8rem;
					span{
						font-size:0.3rem;
						float:right;
						display: inline-block;

					}
					.shopcount{
						margin-top:0.15rem;
						.count{
							width:2rem;
							height:0.3rem;
							background-color: #000;
							.inputNumber{
								font-size:0.1rem;
								width:2rem;
							}
						}
					}
				}
			}
		}
		.allPrice{
			position: fixed;
			bottom:0;
			z-index: 1000000;
			width:6.4rem;
			display: flex;
			justify-content:space-between;
			.div{
				flex:1;
				text-align: center;
				height:1rem;
			}
			.div1{
				line-height: 1rem;
				font-size:0.3rem;
			}
			.continueBuy{
				background-color: #eee;
			}
			.goMoney{
				background-color: #ff7f00;
				color:#fff;
			}
			.allPrices{
				background-color: #fff;
				div{
					margin-top:0.12rem;
					font-size:0.22rem;
					span{
						font-size:0.3rem;
						color:#ff7f00;
					}
				}
			}
		}
}
</style>