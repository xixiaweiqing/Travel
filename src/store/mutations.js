export default{
  changeCity(state,city){
    state.city=city/* 改变store里面的city ，随点击而变化*/
    try{
      localStorage.city=city
    }catch(e){}
  }
}