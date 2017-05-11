import * as types from './types.js'
export default{
	login:({
		commit,state
	})=>{
		commit(types.LOGIN);
	}
}