<template>
<div class="classify">
	<div class="header">
		<i class="el-icon-arrow-left"></i>
		<span>商品分类</span>
		<i class="el-icon-search"></i>
	</div>
	<div class="banner" :class="{fixed:isFixed}" ref="banner">
		<span :class='{span1:isActive1}'>手机电话卡</span>
		<span :class='{span1:isActive2}'>笔记本 平板</span>
		<span :class='{span1:isActive3}'>电视 盒子</span>
	</div>
	<div class="banner" v-show="ding"></div>
	<div class="line"></div>
	<div class="bigImg">
		<img src="../images/classImg.jpg">
	</div>
	<div class="line"></div>
	<div class="iphonecard clear">
		<div class="title">
			<span>手机 电话卡</span>
		</div>
		<div class="content" v-for="message in messages">
			<div tag="div" class="shoppings left" @click="click1(message.id)">
				<img :src="message.imgUrl">
				<div class="name">{{message.name}}</div>
				<div class="price">{{message.price}}</div>
			</div>
		</div>
	</div>
	<div class="line"></div>
	<div class="bigImg">
		<img src="//i8.mifile.cn/v1/a1/1be909a0-0d9b-54cc-2490-a1c51dec1e7e.webp?width=720&heihgt=280">
	</div>
	<div class="iphonecard">
		<div class="title">
			<span>笔记本 平板</span>
		</div>
		<div class="content" v-for="message1 in messages1">
			<div class="shoppings left">
				<img :src="message1.imgUrl">
				<div class="name">{{message1.name}}</div>
				<div class="price">{{message1.price}}</div>
			</div>
		</div>
	</div>
	<div class="bigImg">
		<img src="//i8.mifile.cn/v1/a1/04732260-4e7b-3f37-6c85-418cd2b7c444.webp?width=720&heihgt=280">
	</div>
	<div class="iphonecard">
		<div class="title">
			<span>电视 盒子</span>
		</div>
		<div class="content" v-for="message2 in messages2">
			<div class="shoppings left">
				<img :src="message2.imgUrl">
				<div class="name">{{message2.name}}</div>
				<div class="price">{{message2.price}}</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				messages:[],
				messages1:[],
				messages2:[],
				isActive1:true,
				isActive2:false,
				isActive3:false,
				isFixed:false,
				ding:false
			}
		},
		mounted(){
			this.load();
			this.scrollEvent();
		},
		methods:{
			scrollEvent(){
				window.addEventListener('scroll',()=>{
					let y=window.pageYOffset;
					// let a=this.$refs.banner.offsetTop;
					if(y>=48){
						this.isFixed=true;
						this.ding=true;
					}else{
						this.isFixed=false;
						this.ding=false;
					};
					if(y>=770&&y<1200){
						this.isActive1=false;
						this.isActive2=true;
						this.isActive3=false;
					}else if(y>=1200){
						this.isActive1=false;
						this.isActive2=false;
						this.isActive3=true;
					}else{
						this.isActive1=true;
						this.isActive2=false;
						this.isActive3=false;
					}
				})
			},
			click1(str){
				const path='/product/'+str;
				this.$router.push({path:path});
			},
			load(){
				var _this=this;
				this.$http.get('src/static/Classify.json').then(function(res){
					_this.messages=res.data;
				});
				this.$http.get('src/static/Classify1.json').then(function(res){
					_this.messages1=res.data;
					console.log(typeof _this.messages1)
				});
				this.$http.get('src/static/Classify2.json').then(function(res){
					_this.messages2=res.data;
				})
			}
		}
	}
</script>
<style lang="less" scoped>
.classify{
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
	.fixed{
		position:fixed;
		top:0;
	}
	.banner{
		height:0.7rem;
		width:6.4rem;
		line-height: 0.7rem;
		display: flex;
		background-color: #fff;
		span{
			flex:1;
			text-align: center;
			color:#777;
			font-size:0.22rem;
		}
		.span1{
			color:#ff7f00;
		}
	}
	.line{
		width:6.4rem;
		height: 0.1rem;
		background-color: #eee;
	}
	.bigImg{
		width:6.4rem;
		img{
			width:100%;
		}
	}
	.iphonecard{
		width:6.4rem;			
		overflow: hidden;
		.title{
			width:6.4rem;
			height:0.7rem;
			line-height: 0.7rem;
			text-align: center;
			font-size:0.24rem;
			color:#333;
		}
		.content{

			width:6.4rem;
			.shoppings{
				display: inline-block;
				text-align: center;
				width:2.093rem;
				font-size:0.25rem;
				color:#666;
				margin:0.2rem 0;
				.price{
					display: none;
				}
				img{
					width:1.2rem;
				}
			}
		}
	}
}
	
</style>