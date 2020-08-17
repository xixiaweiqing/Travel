<template>
  <div>
    <div class="header">城市选择</div>
    <router-link to="/">
     <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
  
</template>

<script>
export default {
  name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import"~styles/varibles.styl"
  .header
    position :relative
    background :$bgColor
    height :$headerHeight
    line-height:$headerHeight
    color :#fff
    font-size :.32rem
    text-align :center
    overflow :hidden
  .header-back
    font-size :.36rem
    text-align :center
    width :.64rem
    position:absolute
    line-height :$headerHeight
    color :#fff
    top:0
    left :0
    font-weight :bold
  
   

</style>