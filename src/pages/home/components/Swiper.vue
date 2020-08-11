<template>
   <div class="wrapper">
   <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" > </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeSwiper',
  data () {
    return{
      swiperOptions:{
        pagination:'.swiper-pagination',
        loop:true
      },
       swiperList:[{
        id:'0001',
        imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20207/dc289642046cfdd6543b87794a0f9735.jpg_890x330_9419eeff.jpg'
      },{
        id:'0002',
        imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20208/91d516ade2556cb2f64aae392e6b35ce.jpg_890x330_ba143e24.jpg'
      }]

    } 
    
  }
}
  
</script>

<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active
  background #fff
 .wrapper
  overflow:hidden
  width:100%
  height:0
  padding-bottom:35%
  background:#eee
 .swiper-img
   width:100%
</style>