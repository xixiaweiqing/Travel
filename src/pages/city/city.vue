<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities" @change="handelLatterChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return{
      cities:{},
      hotCities:[],
      letter:''
    }
    
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json')
           .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if(res.ret&&res.data){//ret是mock数据里值为true的确认值，data是所有数据统称
        const data =res.data
        this.hotCities=data.hotCities
        this.cities=data.cities
      }
    },
    handelLatterChange(letter){
      this.letter=letter;
    }

  },
  mounted(){
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>