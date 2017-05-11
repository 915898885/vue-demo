import Vue from 'vue'
import App from './App.vue'
import stores from './store/'
import {Input,Icon,Form,ButtonGroup,FormItem,RadioButton,RadioGroup,Button,InputNumber,Checkbox} from 'element-ui'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import axios from 'axios'
import animate from 'animate.css'
require('./assets/css/swiper.min.css');
require('./assets/js/swiper.js');
require('./assets/css/base.css');
require('./assets/js/rem.js');
Vue.use(VueRouter);
Vue.use(Input);
Vue.use(Icon);
Vue.use(ButtonGroup);
Vue.use(FormItem);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Form);
Vue.use(Button);
Vue.use(InputNumber);
Vue.use(Checkbox);
const router=new VueRouter({
	mode:'history',
	routes:routes
});
Vue.prototype.$http=axios;
new Vue({
  el: '#app',
  router,
  store:stores,
  render: h => h(App)
})
