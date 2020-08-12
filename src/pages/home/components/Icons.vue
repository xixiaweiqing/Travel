<template>
  <div class="icons ">
    <swiper :options="swiperOptions"> 
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" 
            v-for="item of page"
            :key="item.id">
          <div class="icon-img">
            <img class='icon-img-content' :src="item.imgUrl">
          </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
       
    </swiper>
  </div>
</template>

<script>

  export default{
    name:'HomeIcons',
    props:{
      list:Array
    },
    data () { /* data这里必须是函数，特殊写法，data后一定加空格 */
      return {
        swiperOptions: {autoplay:false },
      }
    },
    computed :{
          pages(){
            const pages=[]
            this.list.forEach((item,index)=>{
            const page=Math.floor(index/8)/* 前8个被放到第一页，后8个不变 */
              if(!pages[page]){//如果当前页面不存在
                pages[page]=[]
              }//不太懂
              pages[page].push(item)
            })
            return pages;
          }
        }
  }
  
</script>

<style lang="stylus" scoped>
@import'~styles/varibles.styl'
@import'~styles/mixins.styl'
  .icons >>>.swiper-container
    overflow: hidden
    height :0
    padding-bottom:50%
    .icon
      margin-top:.1rem
    .icon
      position: relative
      float:left
      overflow: hidden
      width :25%
      height :0
      padding-bottom:25%
    .icon-img
    
      position :absolute
      top :0
      right:0
      left :0
      bottom :.44rem
      box-sizing :border-box
      padding:.1rem
      .icon-img-content
        height :80%
        display:block
        margin:0 auto
    .icon-desc
      position :absolute
      left:0
      right :0
      bottom :0.2rem
      height .44rem
      line-height .44rem
      text-align :center
      color :$darkTextColor
      ellipsis()

</style>