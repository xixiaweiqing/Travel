<template>
  <div>
    <div class="title">周末去哪儿玩</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of list"
          :key="item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl">
      </div>  
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'HomeWeekend',
  props:{
    list:Array
  }
    
    
  }


</script>

<style lang="stylus" scoped>
@import'~styles/mixins.styl'
  .title
    width :100%
    background :#eee
    line-height :.6rem
    text-indent:.2rem
    font-size: .4rem;
  .item
    overflow :hidden
    height :33.9%
    .item-img-wrapper

    .item-img
      width :8rem
      height :2.5rem
    .item-info
      flex :1/* 加不加影响不大 */
      padding .1rem
      min-width:0/* 保证内容局限在父盒子内。 */
      .item-title
        font-size: 0.32rem
        line-height:.54rem
        ellipsis()
      .item-desc
        color:#807f7f
        line-height :.4rem
        ellipsis()
      .item-button
        background :#ff9300
        line-height :.44rem
        margin-top:.16rem
        color :#fff
        padding:0 .2rem
        border-radius :.06rem
</style>
