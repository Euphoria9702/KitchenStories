<template>
    <div class='mime'>
    	<div class='header'>
            <span class='back' v-if="$route.path.includes('/User')">
                <router-link to='/mime/nobody'><i class='iconfont icon-left'></i></router-link>
            </span>
           <h2 class='mime_title'>我的主页</h2>
           <ul class='mime_list' v-if="$route.path.includes('/my')">
                 <li :class="{active:$route.path=='/mime/mybook'}"><router-link to="/mime/mybook">烹饪书</router-link></li>
                <li :class="{active:$route.path=='/mime/mylove'}"><router-link to="/mime/mylove">最爱</router-link></li>
            </ul>
            <span class='set_btn' @click='popupVisible=1'>
                <i class='iconfont icon-shezhi'></i>
            </span>
        </div>
        <div class='container'>
            <router-view/>
        </div>
        <mt-popup v-model="popupVisible" position="bottom" :modal=false class='mint-popup-3'>
            <div class='set_header'>
                <p>设置</p>
                <span @click='popupVisible=0' class='success_btn'>完成</span>
            </div>
            <v-settinglist></v-settinglist>
        </mt-popup>
    </div>
</template>

<script>
    import settinglist from '../components/setting_list.vue';
    export default {
       data(){
            return{
                popupVisible:0
            }
        },
        components:{
            'v-settinglist':settinglist
        }
    }
</script>

<style scoped>
    .header{
        border-bottom:1px solid #d6d5d5;
        position: fixed;
        background:#fff;
        z-index:98;
        width:100%;
    }
    .set_btn{
        position: fixed;
        top:15px;
        right:15px;
        z-index:99;
    }
    .set_btn .iconfont{
        color:#268e87;
        font-size:18px;
    }
    .mime_title{
        height:40px;
        box-sizing:border-box;
        margin-top:40px;
        margin-bottom:10px;
        padding:0 10px 10px 20px;
    }
    .container{
        padding:144px 10px 50px 10px;
    }
    .mime_list{
        display:flex;
        border:1px solid #268e87;
        margin:0 10px 10px 10px;
        border-radius:5px;
    }
    .mime_list li{
        padding:10px;
        width:50%;
        box-sizing:border-box;
        text-align:center;
    }
    .mime_list li a{
        width:100%;
        display:block;
    }
    .mime_list li.active{
        background:#268e87;
    }
    .mime_list li.active a{
        color:#fff;
    }
    .mime_list li a{
         color:#268e87;
         text-decoration:none;
    }
    .mint-popup-3{
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    .set_header{
        text-align:center;
        width:100%;
        padding:10px 0;
        background:#fff;
        z-index:2019;
        border-bottom:1px solid #d6d5d5;
    }
    .set_header>p{
        font-weight:600;
    }
    .success_btn{
        position:fixed;
        top:10px;
        right:15px;
        color: #268e87;
    }
    .back{
        position: fixed;
        top: 10px;
        left: 15px;
        color: #268e87;
    }
    .back a{
        color: #268e87;
    }
</style>