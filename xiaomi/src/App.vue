<template>
  <div id="app">
<router-view></router-view>
    
    <div :class="{show:isActive}" class="footer">
      <div class="footer1"><router-link tag="div" to="/Index" class="div1"><img src="./assets/images/首页-首页.png"></router-link>首页</div>
      <div class="footer1"><router-link tag="div" to='/classify' class="div2"><img src="./assets/images/分类 (1).png"></router-link>分类</div>
      <div class="footer1"><router-link tag="div" to='/shoppingcar' class="div3"><img src="./assets/images/购物车 (1).png"></router-link>购物车</div>
      <div class="footer1"><router-link tag="div" to='/myself' class="div4"><img src="./assets/images/我的.png"></router-link>我的</div>
    </div>
  </div>
</template>

<script>
import Index from './assets/component/index.vue'
export default {
  component:{
    Index
  },
  name: 'app',
  data(){
    return{
      isActive:false
    }
  },
  watch:{
    $route(to){
      var path=to.path.substring(1,8);
      var path1=to.path.substring(1,6);
      if(path=='product'||path1=='Login'){
        this.isActive=true;
      }else{
        this.isActive=false;
      }
    }
  }
}
</script>
<style lang="less" scope>
  .show{
    display: none;
  }
  .footer{
  position: fixed;
  width:6.4rem;
  height:1rem;
  bottom:0;
  background-color: #fff;
  .footer1{
    float:left;
    text-align:center;
    width:1.6rem;
    background-color: #fff;
    font-size:0.25rem;
    color:#aaa;
    text-align: center;
    .div1{
     
    }
    div{
      width:0.6rem;
      height:0.6rem;
      margin:0 auto;
      img{
        width:100%;
      }
    }
  }
}
</style>


