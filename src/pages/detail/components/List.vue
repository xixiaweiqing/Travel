<template>
  <div class="container">
  <!--   <div class="item" 
    v-for="(item,index) of list" 
    :key="index">
      <div class="item-title border-bottom
      " >
        <span class="item-title-icon">{{item.title}}</span>
        <span class="item-price">{{item.price}}</span>
        <span class="iconfont list-icon">&#xe64a;</span>
        <div v-for="(children,index) in item" :key="index" class="item-content">{{children.content}}</div>
      </div>
    </div>
     -->
    
  </div>
</template>

<script>
export default {
  name:'DetailList',
  props:{
    list:Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
 .container
   background :#fff 
  .item-title 
    background :#fff
    padding :.2rem
    font-size :.32rem
    font-weight :bold
  .list-icon
    color:#ccc
    margin-left:.1rem
  .item-price
    color:orange
    margin-left:4.3rem
    font-weight :normal
    font-size:.38rem
  .item-children
    margin-left:.2rem
  .item-content
    font-size:.30rem
    font-weight :normal
    margin .2rem
    background:#eee
    padding :.1rem
</style>