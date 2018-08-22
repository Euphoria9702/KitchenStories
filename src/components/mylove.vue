<template>
    <div class='mylove'>

        <div class='nothing' v-if='data.length==0'>
            <p class='tip1'>您好像还未收藏任何食谱哦</p>
            <img src='../assets/images/nothing2.jpg'>
            <p class='tip2'>如果你喜欢食谱或者文章，只需点击心形图标就可收藏！随时可以找到。</p>
        </div>

        <ul class='list' v-if='data.length!=0'>
            <li v-for='v in data'>
                <div class='td_image'>
                    <img :src='v.src'>
                    <div class='shade'></div>
                    <span class='like'>
                        <i class='iconfont icon-heart'></i>
                        <span>{{v.like}}</span>
                    </span>
                </div>
                <p class='title'>{{v.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                data:[]
            }
        },
        methods: {
            handleClick: function() {
                this.$toast(0.5);
            }
        },
        mounted(){
            this.$axios.get('json/mylove.json').then(res=>{
                console.log(res.data.data)
                this.data=res.data.data
                console.log(this.data)
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .list{
        display:flex;
        flex-wrap:wrap;
    }
    .list li{
        width:48.53%;
        margin:10px 0;
    }
    .list li:nth-of-type(2n){
        margin-left:10px;
    }
    .title{
        font-size:15px;
    }
    .td_image{
        position:relative;
        width:100%;
        height:200px;
        border-radius:12px;
        overflow:hidden;
        margin:10px 0;
    }
    .td_image img{
        width:100%;
        display:block;
    }
    .shade{
        position:absolute;
        height:100%;
        left:0;
        top:0;
        width:100%;
        background:linear-gradient(to bottom,rgba(0,0,0,0) 60%,rgba(0,0,0,0.5) 100%)
    }
    .like{
        position:absolute;
        height:25px;
        bottom:10px;
        left:10px;
        color:#fff;
    }
    .like .iconfont{
        font-size:25px;
    }
    .like span{
        display:inline-block;
        height:100%;
        vertical-align:top;
        line-height:25px;
        font-size:14px;
    }

    .nothing{
        width:100%;
        text-align:center;
        padding:75px 0 0 0;
    }
    .nothing img{
        width:100%;
        margin:20px 0 30px 0;
    }
    .tip1{
        font-size:18px;
    }
    .tip2{
        font-size:13px;
        margin-bottom:10px;
    }
</style>