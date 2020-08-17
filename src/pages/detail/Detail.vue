<template>
  <div class="container">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <detail-list :list="list"></detail-list>
    <div class="expandHeight"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default{
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data (){
    return{
      list: [{title:'成人票',price:'￥90起'},
            {title:'儿童票',price:'￥30起'},
            {title:'学生票',price:'￥45起'}
            ]
    }
  },
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
  .expandHeight
    height :50rem
  .container
    background:#eee
</style>