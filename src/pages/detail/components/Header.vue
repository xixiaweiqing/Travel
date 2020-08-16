<template>
  <div>
    <router-link 
    tag='div' 
    to="/" 
    class="header-abs" 
    v-show="absShow" >
    <div class="iconfont header-abs-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" 
    v-show="!absShow"
    :style="styleOpacity">
      <router-link to="/">
       <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      <div class="fontTitle">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailHeader',
  data (){
    return{
      absShow: true,
      styleOpacity:{
        opacity:0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log(scroll)
      const top = document.documentElement.scrollTop
      if ( top>60) {
        let opacity=top/140
        opacity=opacity>1?1:opacity
        this.styleOpacity={opacity}
        this.absShow = false
      } else {
        this.absShow = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated (){
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
@import"~styles/varibles.styl"
  .header-abs
    z-index :1
    position :absolute
    top:.2rem
    left:.2rem
    background:rgba(0,0,0,0.6)
    border-radius :.4rem
    height :.9rem
    width: .9rem
    line-height :.9rem
    text-align :center
    .header-abs-icon
      color :#fff
      font-size:.32rem
  .header-fixed
    z-index:2
    position:fixed
    top:0
    left:0
    right:0
    height:$headerHeight
    background:$bgColor
    line-height:$headerHeight
    .header-fixed-back
      z-index:2
      font-size :.36rem
      text-align :center
      width :.64rem
      position:relative
      line-height :$headerHeight
      color:#fff
      top:0
      left:0
      font-weight:bold
    .fontTitle
      z-index:2
      font-size :.32rem
      position:absolute
      left:3rem
      line-height :$headerHeight
      color:#fff
      top:0
</style>