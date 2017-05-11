<template>
  <div class="app">
    <div class="top" :class={bgColor:isActive}>
      <img src="../images/logo_e6453b2.png"/>
         <div class="search"><i class="el-icon-search searcht"></i><input type="text" placeholder="搜索的商品"></div>
      <span class="login" @click="login">登录</span>
    </div>
    <div class="scrollImg">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../images/1677822ee55a9b956eaf24d6fc9151a9.jpg">
            </div>
            <div class="swiper-slide">
              <img src="../images/6c7464a5-b8b5-dcbb-d060-67d461b841d8.jpg">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="shopmoon">
      <div><img src="../images/shopmoon.png"></div>
    </div>
    <div class="shopping1">
      <div class="left"><img src="../images/redminote4.jpg"></div>
      <div class="right"><img class="imgR" src="../images/nengzhichanpin.jpg">
          <img src="../images/jiantwo.jpg">
      </div>
      <div class="bottom"><img src="../images/xiaomimax.jpg"></div>
    </div>
    <div class="startdan">
      <img src="../images/startdan.jpg">
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      input6:'',
      isActive:false
    }
  },
  mounted(){
    this.scrollImg();
    this.scrollEvent();
  },
  methods:{
    scrollEvent(){
      var _this=this;
      window.addEventListener('scroll',function(){
        var y=window.pageYOffset;
        // console.log(y);//405
        if(y>=213){
          _this.isActive=true
        }else{
          _this.isActive=false
        }
      })
    },
    scrollImg(){
        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay:3000,
        autoplayDisableOnInteraction:false
      });
    },
    login(){
      this.$router.push({path:'/Login'})
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 1rem;
}
.bgColor{
  background-color: #ff7f00;
}
.top{
  position:fixed;
  width:6.4rem;
  height:0.6rem;
  padding-top: 0.2rem;
  z-index:999;
  img{
    width:0.5rem;
    height:0.3rem;
    margin-left:0.2rem;
    margin-top:0.05rem;
    float:left;
  }
  .search{
    background:#fff;
    height:0.45rem;
    float:left;
    margin-left:0.2rem;
    border-radius: 0.05rem;
  }
  input{
    width:4rem;
    display: inline-block;
    background-color: #fff;
    height:0.43rem;
    font-size:0.24rem;
    padding-left:0.1rem;
    padding-top:0.02rem;
     border-radius: 0.05rem;
  }
  .searcht{
    font-size:0.26rem;
    padding:0.11rem 0 0 0.12rem;
    color:#ccc;
    background-color: #fff;
    float:left;
     border-radius: 0.05rem;
  }
  .login{
    font-size:0.26rem;
    color:#fff;
    margin:0.04rem 0 0 0.2rem;
    display: inline-block;
  }
}
.scrollImg{
  width:6.4rem;
  height:4rem;
  .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        img{
          width:6.4rem;
        }
    }
    .swiper-pagination{
      margin-left:2.8rem;
    }
}
.shopmoon{
  width:6.4rem;
  height:1rem;
  img{
    height:1rem; 
  }
}
.shopping1{
  width:6.4rem;
  .left{
    width:3.16rem;
    margin-bottom:0.1rem;
    img{
      width:100%;
    }
  }
  .right{
    width:3.16rem;
    float:right;
    img{
      width:100%;
    }
    .imgR{
      margin-bottom:0.035rem;
    }
  }
  .bottom{
    width:6.4rem;
    img{
      width:100%;
    }
  }
}
.startdan{
  width:6.4rem;
  img{
    width:100%;
  }
}

</style>
