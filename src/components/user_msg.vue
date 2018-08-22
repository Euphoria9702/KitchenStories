<template>
    <div class='usermsg'>
        <div class='imgbox'>
            <img :src="data[0].src">
        </div>
        <mt-cell title="名字" is-link :value="data[0].name" id='msg_el'></mt-cell>
        <mt-cell title="密码" is-link value="••••••" id='msg_el'></mt-cell>
        <p class='title'>您的邮箱地址：</p>
        <p>{{data[0].mail}}</p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                data:[]
            }
        },
        mounted(){
            this.$axios.get('json/user.json').then(res=>{
                this.data=res.data.data;
            })
        }
    }
</script>

<style scoped>
    .usermsg{
        height: 93%;
        background: #f3f3f3;
    }
    .imgbox{
        text-align:center;
    }
    .usermsg img{
        width:100px;
        height:100px;
        border-radius:10px;
        margin:20px 0;
    }
    .usermsg>p{
        padding-left:10px;
        font-size:13px;
        color:#7f7f7f;
    }
    .usermsg .title{
        margin-top:10px;
    }
    #msg_el{
        border-bottom:1px solid #d6d5d5;
    }
</style>