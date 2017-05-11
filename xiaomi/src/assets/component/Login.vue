<template>
<div class="container">
		<div class="last" @click="goBack">
			<i class="el-icon-arrow-left"></i>
		</div>
		<div class="logo">
			<img src="../images/logo_e6453b2.png">
		</div>
		<div class="xiaomi">小米账号登录</div>
	<div class="login">
		
		<div style="margin: 20px;"></div>
		<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
		  <el-form-item label="用户名">
		    <el-input v-model="formLabelAlign.name"></el-input>
		  </el-form-item>
		  <el-form-item label="密码">
		    <el-input v-model="formLabelAlign.region"></el-input>
		  </el-form-item>
		  <el-button class="btn" type="primary" @click="logining">登录</el-button>
		</el-form>
	</div>
</div>
</template>
<script>
	export default {
	    data() {
	      return {
	        labelPosition: 'right',
	        formLabelAlign: {
	          name: '',
	          region: ''
	        }
	      }
	    },
	    methods:{
	    	goBack(){
				window.history.go(-1);
			},
			logining(){
				if(this.formLabelAlign.name!=''&&this.formLabelAlign.region!=''){
					this.$store.commit({
						type:'LOGIN',
						userName:this.formLabelAlign.name
					});
					this.goBack();
				}
			}
	    }
	}
</script>
<style lang="less" scoped>
	.login{
		width:5.2rem;
		margin-left:0.23rem;
		.btn{
			margin:0.3rem 0 0 1.1rem;
			width:4rem;
		}
		
	}
	.xiaomi{
		font-size:0.3rem;
		text-align: center;
	}
	.logo{
			background-color: #ef5b00;
			width:1rem;
			height:1rem;
			text-align: center;
			border-radius: 0.2rem;
			margin:1.5rem auto 0.5rem;
			img{
				width:0.6rem;
				height:0.4rem;
				margin-top:0.3rem;
			}
		}
		.last{
		z-index:2;
		position: fixed;
		left:0.4rem;
		top:0.4rem;
		width:0.7rem;
		height:0.7rem;
		border-radius: 0.35rem;
		text-align: center;
		vertical-align: text-top;
		.el-icon-arrow-left{
			color:#999;
			font-size:0.3rem;
			margin-top:0.15rem;
		}
	}
</style>