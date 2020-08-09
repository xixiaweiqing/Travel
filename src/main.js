import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router';
import fastClick from 'fastclick'
import 'swiper/swiper-bundle.css'
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
Vue.config.productionTip = false

fastClick .attach(document.body);/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  components:{App},
  template:'<App/>'

  ,render: h => h(App) 
})
