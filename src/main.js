import Vue from 'vue'
import App from './App'
import router from './router/router.js'

import $ from 'zepto'

import Mint from 'mint-ui';

import "mint-ui/lib/style.css"
Vue.use(Mint);

import './assets/font/iconfont.css'

import axios from 'axios'
Vue.prototype.$axios=axios;


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})


 $(window).scroll(function(event) {
    if($(window).scrollTop()>=40){
        $('header').css('border-bottom','1px solid #d6d5d5');
        $('header h3').css('display','block');
    }else{
        $('header').css('border-bottom','none');
        $('header h3').css('display','none');
  }
})
