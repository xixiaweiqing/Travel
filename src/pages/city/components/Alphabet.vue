<template>
  <div>
    <ul class="list">
      <li class="item" 
      @click="handleLetterClick" 
      v-for="item of letters" 
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      >{{item}}</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name:'CityAlphabet',
  props:{
    cities:Object
  },
  computed:{
    letters(){
      const letters=[]
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
    }
  },
  data (){
    return{
      touchStatus:false,
      startY:0,
      timer:null
    }
  },
  updated(){
    this.startY=this.$refs['A'][0].offsetTop
  },
  methods:{
    handleLetterClick(e){
      this.$emit('change',e.target.innerText)
    },
    handleTouchStart(){
      this.touchStatus=true
    },
    handleTouchMove(e){
    if(this.touchStatus=true){  
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer=setTimeout(()=>{
        const touchY=e.touches[0].clientY-79/* 79:首部高度 */
        const index=Math.floor((touchY-this.startY)/20)/*20:字母高度  */
        if(index >= 0&&index<this.letters.length){/* 范围限制 */
          this.$emit('change',this.letters[index])
        
      }
      },16)
      }
    },
    handleTouchEnd(){
      this.touchStatus=false
    }


  }
}
</script>

<style lang="stylus" scoped>
@import"~styles/varibles.styl"
  .list
    display:flex
    flex-direction :column
    justify-content:center/* 垂直居中 */
    position :absolute
    top:1.58rem
    right:0
    bottom :0
    width :.4rem
    .item
      text-align :center
      color :$bgColor
      line-height :.4rem
</style>