<template>
<div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/sight/p0/1601/1c/1cdfd6a29fd1813990.img.jpg_600x330_8f32a7e9.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">南浔古镇(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe60b;</span>39</div>
      </div>
    </div>
    <common-gallery 
    :imgs="imgs"
     v-show="showGallery"
     @close="handleGalleryClick"> </common-gallery>
 </div> 
</template>

<script>
import CommonGallery from 'common/gallery/Gallery.vue'
export default{
  name:'DetailBanner',
  data (){
    return {
      showGallery:false,
      imgs:["http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png","http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"]
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
    CommonGallery
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