<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from './components/footer.vue';

export default {
  name: 'app',
  components:{
    'v-footer':footer
  }
}
</script>

<style>
  *{
    padding:0;
    margin:0;
    list-style:none;
  }
  body{
    color: #464646
  }
  a{
      text-decoration:none;
      color: #464646
  }
   header{
        position:fixed;
        width:100%;
        height:40px;
        box-sizing:border-box;
        background:#fff;
        z-index:999;
        padding:10px 0px;
        text-align:center;
        top:0;
    }
    header h3{
        display:none;
    }
    .page_title{
        height:40px;
        box-sizing:border-box;
        margin-top:40px;
        margin-bottom:10px;
        padding:0 10px 10px 20px;
        border-bottom:1px solid #d6d5d5;
    }
    .container{
        padding-bottom:50px;
    }
</style>
