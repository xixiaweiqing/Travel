<template>
<div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/sight/p0/1601/1c/1cdfd6a29fd1813990.img.jpg_600x330_8f32a7e9.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">南浔古镇(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe60b;</span>39</div>
      </div>
    </div>
    <fade-animation>
    <common-gallery 
    :imgs="imgs"
     v-show="showGallery"
     @close="handleGalleryClick"> </common-gallery>
     </fade-animation>
 </div> 
</template>

<script>
import CommonGallery from 'common/gallery/Gallery.vue'
import FadeAnimation from 'common/fade/FadeAnimation.vue'
export default{
  name:'DetailBanner',
  data (){
    return {
      showGallery:false,
      imgs:["https://imgs.qunarzz.com/sight/p0/1601/1c/1cdfd6a29fd1813990.img.jpg_350x240_3b10163a.jpg","https://imgs.qunarzz.com/sight/p0/2005/55/55889dc6d90e7bcaa3.water.jpg_350x240_9b07e330.jpg","https://imgs.qunarzz.com/sight/p0/2005/2a/2a7ddb6a18bb558ca3.water.jpg_350x240_b7f89f47.jpg"]
    }
  },
  methods:{
    handleBannerClick (){
      this.showGallery=true
    },
    handleGalleryClick(){
      this.showGallery=false
    }
  },
  components:{
    CommonGallery,
    FadeAnimation
    }
}
</script>

<style lang="stylus" scoped>
  .banner
    position :relative
    overflow: hidden
    height :0
    padding-bottom:55%
    .banner-img
      width :100%
      z-index :0
    .banner-info
      display :flex
      position:absolute
      bottom:0
      right :0
      left :0
      line-height :.6rem
      color:#fff
      background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex:1
        font-size 0.38rem
        padding :0 .2rem
      .banner-number
        padding:0 .4rem
        height:.4rem
        line-height:.4rem
        border-radius:.2rem
        background :#000
        font-size :.32rem
        opacity :.8
        .banner-icon
          font-size:.38rem
</style>