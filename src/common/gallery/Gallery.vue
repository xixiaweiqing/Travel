<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) of imgs" :key='index'>
          <img class="gallery-img"  :src='item'>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
 export default{
   name:'CommonGallery',
   props:{
     imgs:{
       type:Array,
       default () {
         return [
           

         ]
       }
     }
   },
   data (){
     return{
       swiperOptions:{
         pagination:'.swiper-pagination',
         paginationType:'fraction',
         observer:true,
         observeParents:true
       }
     }
   },
   methods:{
     handleGalleryClick (){
       this.$emit('close')
     }
   }
 }
</script>

<style lang="stylus" scoped>
  .container >>>.swiper-container
    overflow:inherit
  .container
    z-index:5
    display:flex
    flex-direction:column
    justify-content :center
    position:fixed
    top :0
    right:0
    left :0
    bottom:0
    background:#000
    .wrapper
      background:#fff
      .gallery-img
        width :100%
      .swiper-pagination
        color:#fff
        bottom:-1rem

</style>