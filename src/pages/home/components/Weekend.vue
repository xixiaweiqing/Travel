<template>
  <div>
    <div class="title">周末去哪儿玩</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of recommendList"
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
  data () {
    return{
      recommendList:[{
        id:'0001',
        imgUrl:'https://imgs.qunarzz.com/sight/p0/1601/1c/1cdfd6a29fd1813990.img.jpg_710x360_f9eedd89.jpg',
        title:'南浔古镇',
        desc:'水乡古镇九十九，不如南浔走一走'
      },
      {
        id:'0002',
        imgUrl:'https://imgs.qunarzz.com/sight/p0/1603/8f/8fff2332dff679ec90.water.jpg_710x360_cc96a62e.jpg',
        title:'普陀山风景区',
        desc:'普陀山，与山西五台山、四川峨眉山、安徽九华山并称为中国佛教四大名山，是观世音菩萨教化众生的道场。'
      },
      {
        id:'0003',
        imgUrl:'https://imgs.qunarzz.com/sight/p0/1706/e1/e1dbcc2f0ad04fe0a3.img.jpg_710x360_cc6886ba.jpg',
        title:'丽水冒险岛水世界 ',
        desc:'中世纪欧洲维驯龙主题，开启奇幻水上之旅'
      },
      ]
    }
    
    
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
