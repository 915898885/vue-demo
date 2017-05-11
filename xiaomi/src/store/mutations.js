import * as types from './types'
const state={
	needLogin:true,
	userName:'登录/注册',
	shopMsg:[]
}
const mutations={
	[types.LOGIN](state,userName){
		state.needLogin=false;
		state.userName=userName;
	},
	addCar(state,message){
		state.shopMsg.push(message.message);
	}
}
const getters={
	haveUserName:(state)=>{
		return state.needLogin;
	},
	userName:(state)=>{
		return state.userName.userName
	},
	shopMsg:(state)=>{
		return state.shopMsg
	}
}
export default{
	state,
	mutations,
	getters
}