<template>
<div>
	<div class="product" v-for="message in allmessage">
		<div class="last" @click="goBack">
			<i class="el-icon-arrow-left"></i>
		</div>
		<div class="productImg">
			<img :src="message.imgUrl">
		</div>
		<div class="name">{{message.name}}</div>
		<div class="jieshao">{{message.jieshao}}</div>
		<div class="price"><span>￥</span>{{message.price}}</div>
		<div class="chioce">{{message.chioce}}<br><div>{{message.chioce1}}{{message.num}}</div></div>
		<div class="footer1">
			<div class="footer1left1 left1"><img src="../images/首页-首页 (1).png"><br>首页</div>
			<div class="footer1left2 left1"><img src="../images/购物车.png"><br>购物车</div>
			<div class="footer1right1 right1" @click="addCar">加入购物车</div>
			<div class="footer1right2 right1">立即购买</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				allmessage:[]
			}
		},
		mounted(){
			this.loading();
			this.scrollImg1();
		},
		methods:{
			goBack(){
				window.history.go(-1);
			},
			addCar(){
				console.log(this.$store.getters.haveUserName);
				if(this.$store.getters.haveUserName==false){
					var _this=this;
					this.$store.commit({
						type:'addCar',
						message:_this.allmessage
					});
					this.$router.push({path:'/shoppingcar'})
				}else{
					this.$router.push({path:'/Login'});
				}
				
			},
			loading(){
				var id='../../../src/static/shoppings/'+this.$route.params.id+'.json';
				this.$http.get(id).then(res=>{
					this.allmessage=res.data;
				})
			},
			scrollImg1(){
				 var swiper = new Swiper('.swiper-container', {
			        pagination: '.swiper-pagination',
			        paginationClickable: true,
			        nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
			        spaceBetween: 30
			    });
			}
		}
	}
</script>
<style lang="less" scoped>
.product{
	overflow: hidden;
	.last{
		z-index:2;
		position: fixed;
		left:0.2rem;
		top:0.2rem;
		width:0.7rem;
		height:0.7rem;
		border-radius: 0.35rem;
		text-align: center;
		vertical-align: text-top;
		background-color: #999;
		.el-icon-arrow-left{
			color:#fff;
			font-size:0.3rem;
			margin-top:0.15rem;
		}
	}
	.productImg{
		margin-bottom:0.2rem;
		width:6.4rem;
		img{
			width:100%;
		}
	}
	.name{
		font-size:0.3rem;
		margin-left:0.2rem;
	}
	.jieshao{
		margin-left:0.2rem;
		font-size:0.21rem;
		line-height: 0.28rem;
	}
	.chioce{
		margin:0.1rem 0 0 0.2rem;
		font-size:0.21rem;
		div{
			font-size:0.22rem;
			margin-top:0.1rem;
		}
	}
	.price{
		font-size:0.3rem;
		color:#ff7f00;
		margin:0.1rem 0 0 0.2rem;
	}
	.footer1{
		position: fixed;
		bottom:0;
		width:6.4rem;
		div{
			float:left;
		}
		.left1{
			width:1.2rem;
			height:0.88rem;
			text-align: center;
			padding-top:0.12rem;
		}
		.right1{
			font-size:0.25rem;
			font-weight: bold;
			height:0.7rem;
			color:#fff;
			text-align: center;
			padding-top:0.3rem;
		}
		.footer1right1{
			width:2.2rem;
			background-color: orange;
		}
		.footer1right2{
			background-color: #ff7f00;
			width:1.8rem;
		}
	}
	
}
</style>