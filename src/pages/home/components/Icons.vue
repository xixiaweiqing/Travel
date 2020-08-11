<template>
  <div class="icons">
    <swiper> 
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
    data () { /* data这里必须是函数，特殊写法，data后一定加空格 */
      return {
        iconList:[{
          id:'01',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc:'酒店',
        },
          {
          id:'02',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc:'机票',
        },
          {
          id:'03',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc:'景点',
        },
        {
          id:'04',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/train.png',
          desc:'火车票',
        },
        {
          id:'05',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc:'门票',
        },
        {
          id:'06',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/train.png',
          desc:'火车票',
        },
        {
          id:'07',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc:'门票',
        },
        {
          id:'08',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc:'机票',
        },
        {
          id:'09',
          imgUrl:'//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc:'酒店',
        },{
          id:'10',
          imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc:'机票',
        }]
      }
    },
    computed :{
          pages(){
            const pages=[]
            this.iconList.forEach((item,index)=>{
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