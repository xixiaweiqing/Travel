<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom"
          v-for="item of recommendList"
          :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'HomeRecommend',
  data () {
    return{
      recommendList:[{
        id:'0001',
        imgUrl:'https://imgs.qunarzz.com/p/tts8/1808/8f/4c6dc42175b85902.jpg_r_390x260x95_8016ad7d.jpg',
        title:'三亚纯玩6日游',
        desc:'【跟团游】三亚纯玩6日游|2晚高档海景房+买送千元代金券|蜈支洲一整天+南山+天堂'
      },
      {
        id:'0002',
        imgUrl:'https://imgs.qunarzz.com/p/tts2/2007/17/837a696919aea402.png_r_390x260x95_ff646122.png',
        title:'丽江4晚5日游',
        desc:'【跟团游】<中国国旅>【私家团+2人起订】丽江、泸沽湖4晚5日游（双飞、国际五星希尔顿+挂五酒店+高端湖景房、酒吧狂欢+酒水畅饮、自助大餐+温泉净桑、篝火晚会）'
      },
      {
        id:'0003',
        imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/292cc76a-f2ba-4051-b419-8793fe2943e8.jpg_r_390x260x95_0b26a4e9.jpg',
        title:'探秘可可西里',
        desc:'【跟团游】纯玩探秘可可西里🔥青海湖+茶卡盐湖+敦煌+嘉峪关+张掖+门源9日杭州'
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
