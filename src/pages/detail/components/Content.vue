<template>
  <div class="container">
   <div class="content-intro">
     <div class="content-intro-mark">
       <div class="mark-left">
         <span><i>4.9</i>分 <em>很棒</em></span>
         <p>17053条评论 53条攻略</p>
       </div>
       <div class="line-colomn"></div>
       <div class="mark-right">
         <span>景点介绍</span>
         <p>开放时间、贴士</p>
       </div>
     </div>
     <div class="line-row"></div>
     <div class="address">
       <div class="iconfont content-icon">&#xe63f;</div>浙江省湖州市南浔区南浔镇人瑞路51号
       </div>
   </div>
   <div class="content-recommend">
     <p>去哪儿推荐</p>
     <div class="recommend-wrapper" >
       <div class="recomment-content" 
            v-for="(item,index) of list"
            :key="index">
         <div class="content-left ">
           <div class="item-title">{{item.title}}</div>
           <div class="item-content">{{item.content}}</div>
         </div>
         <div class="content-right">
           <div class="item-price">{{item.price}}</div>
           <div class="item-btn">立即预定</div>
         </div>
         <div class="lineB"></div>
       </div>
     </div>
   </div>
   <div class="content-recommend">
     <p>特惠推荐</p>
     <div class="recommend-wrapper" >
       <div class="recomment-content" 
            v-for="(item,index) of list"
            :key="index">
         <div class="content-left ">
           <div class="item-title">{{item.title}}</div>
           <div class="item-content">{{item.content}}</div>
         </div>
         <div class="content-right">
           <div class="item-price">{{item.price}}</div>
           <div class="item-btn">立即预定</div>
         </div>
         <div class="lineB"></div>
       </div>
     </div>
   </div>
  <div class="content-recommend">
     <p>景点门票</p>
     <div class="recommend-wrapper" >
       <div class="recomment-content" 
            v-for="(item,index) of list"
            :key="index">
         <div class="content-left ">
           <div class="item-title">{{item.title}}</div>
           <div class="item-content">{{item.content}}</div>
         </div>
         <div class="content-right">
           <div class="item-price">{{item.price}}</div>
           <div class="item-btn">立即预定</div>
         </div>
         <div class="lineB"></div>
       </div>
     </div>
   </div>

  </div>
</template>

<script>
export default {
  name:'DetailContent',
  props:{
    list:Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .content-intro
    background :#fff
    height :0
    overflow :hidden
    padding-bottom:24%
    border-bottom-left-radius:5%
    border-bottom-right-radius:5%
    .content-intro-mark
      padding:.1rem
      display :flex
      .mark-left
        float :left
        margin:.1rem .1rem
        span 
         margin-left:.7rem 
         font-size:0.32rem
         color:orange
         i 
          font-size:0.4rem
         em
            margin-left :.1rem
            color:orange
        p
          margin-top:.1rem
          color:#ccc
      .line-colomn
        width :.01rem
        height :.8rem
        background:#ccc 
        margin:.1rem .2rem 0rem .5rem  
      .mark-right
        right :right
        margin-top:.1rem
        span 
          font-size:.32rem
          margin-left:1rem
        p
          margin-top:.1rem
          margin-left:.7rem
          color:#ccc
     .line-row
      width :95%
      height :.01rem
      background:#ccc 
      margin:-0.1rem .2rem .1rem .2rem  
    .address
      display :flex
      margin:.2rem
      .content-icon
        margin-right:.2rem
  .content-recommend
    background :#fff
    margin:.2rem 0
    height :0
    overflow :hidden
    padding-bottom:100%
    p
      font-size: 0.4rem
      font-weight :bold
      margin: .4rem .2rem
    .recommend-wrapper
      background :#f8f8f8
      height :0
      overflow :hidden
      padding-bottom:78%
      width:90%
      margin-left:.35rem
      border-bottom-left-radius:5%
      border-bottom-right-radius:5%
      border-top-left-radius:5%
      border-top-right-radius:5%
      .recomment-content
        padding:.4rem .2rem
        margin-top:.3rem 
        border-bottom:solid .8px #ccc
        .content-left
          float:left
          width :70%
          .item-title
            font-size:.32rem
            margin-bottom:.2rem
            ellipsis()
          .item-content
            font-size:.28rem
            color :$bgColor
            ellipsis()
        .content-right
          float:right
          margin-top:-.1rem
          .item-price
            color :orange
            font-size:.38rem
            margin-bottom:.1rem
          .item-btn
            font-size:.24rem
            color:#fff
            background :orange
            border-radius :.4rem
            padding:.1rem
      .lineB
        width :90%
        height :.02rem
        background:#f8f8f8
        margin-top:.86rem
</style>