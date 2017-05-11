<template>
	<div class="mine">
		<div class="header">
			<div class="userImg">
				<img src="../images/我的.png">
			</div>
			<span><router-link to='/Login' tag="span" v-show="showUserName">登录/注册</router-link>{{userName}}</span>
		</div>
		<div class="order">
			<span class="left">我的订单</span>
			<span class="lright">全部订单<i class="el-icon-arrow-right"></i></span>
		</div>
		<div class="line"></div>
		<div class="speed">
			<div class="cont"><img src="../images/订单.png"><div>待付款</div></div>
			<div class="cont"><img src="../images/订单.png"><div>待收货</div></div>
			<div class="cont"><img src="../images/维修.png"><div>退换修</div></div>
		</div>
		<div class="bigline"></div>
		<div class="youhui">
			<img src="../images/优惠.png"><span>我的优惠</span><i class="el-icon-arrow-right"></i>
		</div>
		<div class="bigline"></div>
		<div class="youhui">
			<img src="../images/服务.png"><span>
			服务中心</span><i class="el-icon-arrow-right"></i>
		</div>
		<div class="line"></div>
		<div class="youhui">
			<img src="../images/小米.png"><span>小米之家</span><i class="el-icon-arrow-right"></i>
		</div>
		<div class="bigline"></div>
		<div class="youhui">
			<img src="../images/设置.png"><span>设置</span><i class="el-icon-arrow-right"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				showUserName:true
			}
		},
		computed:{
			userName(){
				return this.$store.getters.userName;
			}
		},
		mounted(){
			if(this.userName==undefined){
				this.showUserName=true;
			}else{
				this.showUserName=false;
			}
		}
	}
</script>
<style lang="less" scoped>
.mine{
	.header{
		height:1.4rem;
		width:6.4rem;
		line-height: 1.4rem;
		background-color: #ff7f00;
		.userImg{
			background:orange;
			height:0.9rem;
			width:0.9rem;
			border-radius: 0.45rem;
			float:left;
			border:0.02rem #fff solid;
			margin:0.2rem 0.2rem 0 0.4rem;
			img{
				margin:0.18rem;
			}

		}
		span{
			font-size: 0.25rem;
			color:#fff;
		}
	}
	.order{
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
	.line{
		width:6.4rem;
		height: 0.05rem;
		background-color: #eee;
	}
	.speed{
		height:1.2rem;
		display: flex;
		.cont{
			flex:1;
			text-align: center;
			margin:0.22rem 0 0 0;
			div{
				margin-top:0.1rem;
				color:#666;
				font-size:0.22rem;
			}
		}
	}
	.bigline{
		height:0.12rem;
		width:6.4rem;
		background-color: #eee;
	}
	.youhui{
		height:1rem;
		width:6.4rem;
		line-height: 1rem;
		img{
			margin:0.25rem;
			width:0.5rem;
		}
		span{
			font-size:0.25rem;
			color:#666;
		}
		.el-icon-arrow-right{
			float:right;
			margin:0.38rem 0.3rem 0 0;
			font-size:0.25rem;
			color:#888;
		}
	}
}
</style>
