import Index from './assets/component/index.vue'
import Classify from './assets/component/Classify.vue'
import ShoppingCar from './assets/component/ShoppingCar.vue'
import Mine from './assets/component/mine.vue'
import Product from './assets/component/Product.vue'
import Login from './assets/component/Login.vue'
export default[
	{
		path:'/classify',
		component:Classify
	},
	{
		path:'/Index',
		component:Index
	},
	{
		path:'/shoppingcar',
		component:ShoppingCar
	},
	{
		path:'/myself',
		component:Mine
	},
	{
		path:'/product/:id', 
		name:'Product',
		component:Product
	},
	{
		path:'/Login',
		component:Login
	},
	{
		path:'/',
		component:Index
	}
]