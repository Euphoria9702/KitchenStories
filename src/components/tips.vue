<template>
    <div class='tips'>
    	<header>
            <h3>小贴士</h3>
        </header>
        <h2 class='page_title'>小贴士</h2>
        <div class='container'>
            <p class='title Stitle'>
                用刀技巧
                <span class='link_all'>查看全部
                    <i class='iconfont icon-more'></i>
                </span>
            </p>
            <div class='drag cut'>
                <ul class="wdrag_list">
                    <li class='wdrag_el' v-for='v in data[0].knife'>
                        <div class='drag_imgbox'>
                            <img :src='v.src'>
                            <span class='Bigvedio'>
                                <i class='iconfont icon-shipin'></i>
                            </span>
                        </div>
                        <p class='title Stitle'>{{v.title}}</p>
                        <p class='subtitle'>{{v.time}} 分钟 - {{v.like}} 次观看</p>
                    </li>
                </ul>
            </div>

            <p class='title Stitle'>
                日常基础烹调法
                <span class='link_all'>查看全部
                    <i class='iconfont icon-more'></i>
                </span>
            </p>
            <div class='drag cut'>
                <ul class="wdrag_list">
                    <li class='wdrag_el' v-for='v in data[1].daily'>
                        <div class='drag_imgbox'>
                            <img :src='v.src'>
                            <span class='Bigvedio'>
                                <i class='iconfont icon-shipin'></i>
                            </span>
                        </div>
                        <p class='title Stitle'>{{v.title}}</p>
                        <p class='subtitle'>{{v.time}} 分钟 - {{v.like}} 次观看</p>
                    </li>
                </ul>
            </div>

            <p class='title Stitle'>
                烘焙方法
                <span class='link_all'>查看全部
                    <i class='iconfont icon-more'></i>
                </span>
            </p>
            <div class='drag cut'>
                <ul class="wdrag_list">
                    <li class='wdrag_el' v-for='v in data[3].baking'>
                        <div class='drag_imgbox'>
                            <img :src='v.src'>
                            <span class='Bigvedio'>
                                <i class='iconfont icon-shipin'></i>
                            </span>
                        </div>
                        <p class='title Stitle'>{{v.title}}</p>
                        <p class='subtitle'>{{v.time}} 分钟 - {{v.like}} 次观看</p>
                    </li>
                </ul>
            </div>

            <p class='title Stitle'>
                自制
                <span class='link_all'>查看全部
                    <i class='iconfont icon-more'></i>
                </span>
            </p>
            <div class='drag'>
                <ul class="wdrag_list">
                    <li class='wdrag_el' v-for='v in data[2].diy'>
                        <div class='drag_imgbox'>
                            <img :src='v.src'>
                            <span class='Bigvedio'>
                                <i class='iconfont icon-shipin'></i>
                            </span>
                        </div>
                        <p class='title Stitle'>{{v.title}}</p>
                        <p class='subtitle'>{{v.time}} 分钟 - {{v.like}} 次观看</p>
                    </li>
                </ul>
            </div>
        </div>
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
            this.$axios.get('json/tips.json').then(res=>{
                this.data=res.data.data
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .title{
        font-weight:600;
        margin-bottom: 0.25rem;
    }
    .subtitle{
        font-size:14px;
        color: #979797;
    }
    .Stitle{
        padding:0 10px;
    }
    .link_all{
        float:right;
        color: #0a7f78;
        font-size:14px;
        font-weight: 500;
    }
    .cut{
        margin-bottom:40px;
    }
    .drag{
        overflow-x:scroll;
        padding:5px 10px 10px 10px;
    }
    .wdrag_list{
        display:flex;
        min-width:1760px;
    } 
    .wdrag_el{
        width:240px;
        margin-right:1rem;
    }
    .drag_imgbox{
        border-radius:12px;
        overflow:hidden;
        position:relative;
        margin-bottom:10px;
    }
    .drag_imgbox img{
        width:100%;
        display:block;
    }
    .Bigvedio{
        position:absolute;
        z-index:80;
        height: 50px;
        margin-right:-25px;
        margin-bottom:-25px;
        bottom:50%;
        right:50%;
        border-radius:50%;
        background:rgba(0,0,0,0.2)
    }
    .Bigvedio .iconfont{
        font-size:50px;
        color:#fff;
    }
</style>