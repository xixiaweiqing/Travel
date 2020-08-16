<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li"
       class="item border-bottom"
          v-for="item of list"
          :key="item.id"
          :to="`/detail/`+item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name:'HomeRecommend',
  props:{list: Array}
    
    
  }
</script>

<style lang="stylus" scoped>
@import'~styles/mixins.styl'
  .title
    width :100%
    background :#eee
    margin-top :.2rem
    line-height :.6rem
    text-indent:.2rem
    font-size: .4rem;
  .item
    overflow :hidden
    display:flex
    height :1.9rem
    .item-img
      width :1.7rem
      height :1.7rem
      padding :.1rem
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
