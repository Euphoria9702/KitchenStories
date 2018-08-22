<template>
    <div class='mylove'>
        <div class='nothing' v-if='data.length==0'>
            <p class='tip1'>您尚未创建任何烹饪书。</p>
            <img src='../assets/images/nothing.jpg'>
            <p class='tip2'>烹饪书能帮您更好的归类食谱</p>
            <span class='btn'>开始编辑你的烹饪书</span>
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
            this.$axios.get('json/mybook.json').then(res=>{
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
    .btn{
        padding:5px 0;
        display:block;
        width:45%;
        margin:0 auto;
        background:#268e87;
        border-radius:3px;
        color:#fff;
        font-size:13px;
    }
</style>