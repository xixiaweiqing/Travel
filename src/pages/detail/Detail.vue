<template>
  <div class="container">
    
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <!-- <detail-list :list="list"></detail-list> -->
    <detail-content :list='list'></detail-content>
  </div>
</template>

<script>

import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailContent from './components/Content'

/* import DetailList from './components/List' */
export default{
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailContent
  /*   DetailList */
  },
  data (){
    return{
      list: [{title:'南浔古镇门票+侠客大会套餐双人票',content:'可订明日，预定后1小时可用',price:'￥168'},
            {title:'南浔古镇门票+虾客大会套餐券成人票',content:'16:00前随买随用',price:'￥95'},
            {title:'南浔古镇成人票',content:'16:30前随买随用',price:'￥95'}
            ]
    }
  },
  components:{
    DetailBanner,
    DetailHeader,
    DetailContent
  /*   DetailList */
  }
}
</script>

<style lang="stylus" scoped>
  .container
    background:#eee
</style>