<template>
    <div class='detail'>
        <div class='detail_header'>
            <span @click='back()' class='back_btn'>
                <i class='iconfont icon-left'></i>
            </span>
            <p class='icon'>
                <i class='iconfont icon-cc-heart-o'></i>
                <i class='iconfont icon-icon-test'></i>
                <i class='iconfont icon-fenxiang'></i>
            </p>
        </div>
        <div class='bg_box'>
            <img :src='con[$route.params.id].src' class='bg_img'>
        </div>
        <div class='shade'>
            <p class='title'>{{con[$route.params.id].title}}</p>
        </div>
        <div class='container'>

            <div class='grade'>
                <div class='star'>
                    <i class='iconfont icon-star active'></i>
                    <i class='iconfont icon-star active'></i>
                    <i class='iconfont icon-star active'></i>
                    <i class='iconfont icon-star active'></i>
                    <i class='iconfont icon-star'></i>
                    <p>4评分</p>
                </div>
                <div class='icon'>
                    <span><i class='iconfont icon-cc-heart-o'></i>{{con[$route.params.id].like}}</span>
                    <span><i class='iconfont icon-icon-test'></i>保存</span>
                    <span><i class='iconfont icon-fenxiang'></i>分享</span>
                </div>
            </div>

            <div class='comment'>
                <div class='com_header'>
                    新食记
                    <span class='link_all'>查看全部
                        <i class='iconfont icon-more'></i>
                    </span>
                    <span class='com_data'>0 照片 - 4 评论</span>
                </div>
                <div class='com_el'>
                    <img src='../../assets/images/touxiang01.jpg' class='user_img'>
                    <p class='user_name'>echo</p>
                    <p class='txt'>这是如此美味🤤，令人垂涎欲滴，味道如此之好，以前从未有过这样的东西</p>
                </div>
            </div>

            <div class='degree'>
                <p>难度：易</p>
            </div>

            <div class='cooking_time'>
                <div class="time-graph">  
                <li class='time' v-for='v in con[$route.params.id].time'><span>{{v}}</span> 分钟</li>
                </div> 
                <ul>
                    <li>烹饪时间</li>
                    <li>烘焙时间</li>
                    <li>静置时间</li>
                </ul>
            </div>

            <div class='material'>
                <p>食材</p>
                <div class='number'>
                    2份数
                    <ul>
                        <li><i class='iconfont icon-jian'></i></li>
                        <li><i class='iconfont icon-tianjia'></i></li>
                    </ul>
                </div>
                <ul class='material_list'>
                    <li><span>200克</span>米饭(熟)</li>
                    <li><span>2</span>青葱</li>
                    <li><span>½</span>胡萝卜</li>
                    <li><span>2</span>鸡蛋</li>
                    <li><span>30毫升</span>料酒</li>
                    <li><span></span>盐</li>
                    <li><span></span>胡椒</li>
                    <li><span></span>煎炒用植物油</li>
                </ul>
                <div class='btn'>
                    <span class='change'><i class='iconfont icon-cheng-danse'></i></span>
                    <span class='add'>添加至购物车</span>
                </div>
            </div>
            <div class='tips'>
                <p>小贴士视频</p>
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
            </div>

            <div class='degree'>
                <p>用具</p>
                <p class='tool'>刀，砧板，浸入式搅拌机，煎锅，大锅</p>
            </div>

             <div class='Nut'>
                <p class='N_title'>每份所含营养</p>
                <ul class='Nutrition'>
                    <li>卡路里</li>
                    <li>蛋白质</li>
                    <li>脂肪</li>
                    <li>碳水化合物</li>
                </ul>
                <ul class='Nutrition'>
                    <li class='num'>685</li>
                    <li class='num'>11g</li>
                    <li class='num'>18g</li>
                    <li>97g</li>
                </ul>
            </div>

            <ul class='step'>
                <li class='step1'>
                    <p class='step_num'><span>烹饪步骤 1/4</span></p>
                    <img src='../../assets/images/step01.jpg' class='step_img'>
                    <ul>
                        <li><i class='iconfont icon-canyinshiwuyinliao'></i>4 黄桃 - ½香草豆荚</li>
                        <li class='tl'><i class='iconfont icon-shaguo-'></i>刀 - 砧板</li>
                        <li>桃子切半，去核。刮出香草豆荚的籽。</li>
                    </ul>
                </li>
                <li class='step2'>
                    <p class='step_num'><span>烹饪步骤 2/4</span></p>
                    <img src='../../assets/images/step02.jpg' class='step_img'>
                    <ul>
                        <li><i class='iconfont icon-canyinshiwuyinliao'></i>200 毫升 白葡萄酒 - 1 柠檬（皮碎）- 100 克 糖</li>
                        <li class='tl'><i class='iconfont icon-shaguo-'></i>大锅</li>
                        <li>将白葡萄酒、刮过的香草豆荚和籽、柠檬皮和糖放入大锅中，中火加热。搅拌至糖溶解，放入桃子，小火煮5分钟，这样桃子既能保持结实，还能浸入香味。将桃子从锅中捞出，继续煮糖浆3分钟，或直至糖浆浓缩，关火取下。</li>
                    </ul>
                </li>
                <li class='step3'>
                    <p class='step_num'><span>烹饪步骤 3/4</span></p>
                    <img src='../../assets/images/step03.jpg' class='step_img'>
                    <ul>
                        <li><i class='iconfont icon-canyinshiwuyinliao'></i>50 克 杏仁片</li>
                        <li class='tl'><i class='iconfont icon-shaguo-'></i>煎锅</li>
                        <li>在煎锅中，中火将杏仁片烤成金色。</li>
                    </ul>
                </li>
                <li class='step4'>
                    <p class='step_num'><span>烹饪步骤 4/4</span></p>
                    <img src='../../assets/images/step04.jpg' class='step_img'>
                    <ul>
                        <li><i class='iconfont icon-canyinshiwuyinliao'></i>175 克 覆盆子-20 克糖粉-1 茶匙 柠檬汁-佐餐用覆盆子-佐餐用香草冰淇淋</li>
                        <li class='tl'><i class='iconfont icon-shaguo-'></i>浸入式搅拌机</li>
                        <li>将部分覆盆子和糖粉、柠檬汁搅打到一起。装盘时，将2半桃子分别放到盘中，淋上糖浆、覆盆子酱，放上杏仁片、新鲜覆盆子和一勺香草冰淇淋。尽情享用吧！</li>
                    </ul>
                </li>
                <span class='kaji'>
                    <i class='iconfont icon-camera1'></i>
                    咔擦一下，分享你的美食！
                </span>
                <img src='../../assets/images/chengping01.jpg' class='step_img'>
            </ul>

            <div class='degree'>
                <p>标签</p>
                <span>#坚果</span><span>#冰激凌</span><span>#搅拌</span><span>#甜</span><span>#苏果</span>
                <span>#甜点</span><span>#浆果</span><span>#爽心美食</span><span>#法国菜</span>
            </div>
        </div>
    </div>
</template>

<script scoped>
    import $ from 'zepto'
    export default{
        data(){
            return{
                data:[],
                con:[],
                index:0
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            }
        },
         mounted(){
            this.$axios.get('json/tips.json').then(res=>{
                this.data=res.data.data
            })
            .catch(error=>{
                console.log(error)
            }),
             this.$axios.get('json/detail.json').then(res=>{
                this.con=res.data.data;
             })
             .catch(error=>{
                console.log(error)
            })
        }
    }

    //头部事件
    var flag=32;
    $(window).scroll(function(event) {
        if($(window).scrollTop()>=450){
            $('.detail_header').css('background','#fff');
            $('.detail_header').css('border-bottom','1px solid #ccc');
            $('.detail_header .icon-left').css('color','#0a7f78');
        }else{
            $('.detail_header').css('background','rgba(0,0,0,0)');
            $('.detail_header').css('border-bottom','none');
            $('.detail_header .icon-left').css('color','#fff');
        }
        
        if($(window).scrollTop()>=500){
            $('.detail_header .icon').show();
            if(flag>0){
                flag--;
                $('.detail_header .icon').css('top',flag);
            }
            else{
                $('.detail_header .icon').css('top',0);
            }
        }
        else{
            $('.detail_header .icon').hide();
            flag=32
        }
        if(($(window).scrollTop()>=1564)&&($(window).scrollTop()<1894)){
            $('.step1 .step_num').addClass('active1');
        }else{
            $('.step1 .step_num').removeClass('active1');
        }
        if(($(window).scrollTop()>=1894)&&($(window).scrollTop()<2457)){
            $('.step2 .step_num').addClass('active1');
        }else{
            $('.step2 .step_num').removeClass('active1');
        }
        if(($(window).scrollTop()>=2416)&&($(window).scrollTop()<2824)){
            $('.step3 .step_num').addClass('active1');
        }else{
            $('.step3 .step_num').removeClass('active1');
        }
        if(($(window).scrollTop()>=2824)&&($(window).scrollTop()<3300)){
            $('.step4 .step_num').addClass('active1');
        }else{
            $('.step4 .step_num').removeClass('active1');
        }
    })


</script>

<style scoped>
    .time-graph{
        display:flex;
    }
    .cooking_time ul{
        display:flex;
    }
    .cooking_time ul li,.time{  
        width: 27%;  
        height: 27%;  
        text-align:center;
        margin-top:10px;
    } 
    .cooking_time ul li:nth-child(2),.time:nth-child(2){
        margin: 0 9%;
        margin-top:10px;
    } 
    .time{
        border: 1px solid #268e87;
        border-radius: 3px;
        display:block;
        padding:5px 0;
        font-size:12px;
    }
    .time span{
        font-size:16px;
        font-weight:600;
        color:#268e87;
    }
    .active1{
        position: fixed;
        top: 40px;
        left: 0;
        width: 100%;
        padding-left: 10px;
        z-index: 999;
        background: #fff;
    }
    .active1 span{
         padding-left:10px;
    }
    .detail_header{
        position:fixed;
        text-align:center;
        width:100%;
        height:20px;
        padding:10px 0;
        background:rgba(0,0,0,0);
        z-index:2019;
        transition:all 0.5s;
        overflow:hidden;
    }
    .detail_header .icon{
        position:relative;
        top:32px;
        display:none;
        width: 80%;
        left: 50%;
        margin-left: -40%;
    }
    .detail_header .icon .iconfont{
        margin:0 5px;
        font-size:18px;
    }
    .detail_header .icon-left{
        font-size:20px;
    }
    .back_btn{
        position:fixed;
        top:10px;
        left:10px;
        color: #fff;
    }
    .bg_img{
        width:100%;
        display:block;
    }
    .bg_box{
        position:fixed;
        top:0px;
        left:0;
        z-index:-1;
        width:100%;
        height: 460px;
        overflow: hidden;
    }
    .shade{
        height:460px;
        width:100%;
        background:linear-gradient(to bottom,rgba(0,0,0,0) 60%,rgba(0,0,0,0.5) 100%);
        position:relative;
        z-index:99;
        color:#fff;
    }
    .shade>.title{
        position:absolute;
        bottom:25px;
        left:0;
        width:100%;
        text-align:center;
        font-size:20px;
        font-weight:600;
        letter-spacing:2px;
    }
    .container{
        width:100%;
        padding:0 10px;
        box-sizing:border-box;
        background:#fff;
    }
    .grade{
        border-bottom:1px dotted #ccc;
        padding:20px 0;
    }
    .star{
        text-align:center;
        font-size:12px;
        line-height:20px;
        margin-bottom:20px;
    }
    .star .icon-star{
        font-size:14px;
        color:#ccc;
    }
    .star .icon-star.active{
        color:#ffcd02;
    }
    .icon{
        width:100%;
        text-align:center;
        color:#767676;
    }
    .icon span{
        margin:0 8px;
    }
    .icon span .iconfont{
        margin:0 5px;
        font-size:20px;
    }
    .com_header{
        font-weight:500;
        margin-bottom: 0.25rem;
    }
    .comment{
        padding:20px 0;
        border-bottom:1px dotted #ccc;
    }
    .link_all{
        float:right;
        color: #0a7f78;
        font-size:14px;
        font-weight: 500;
    }
    .link_all .iconfont{
        font-size:14px;
    }
    .com_data{
        display:block;
        color: #767676;
        font-size:11px;
    }
    .com_el{
        margin-top:20px;
        font-size:14px;
    }
    .user_img{
        width:50px;
        height:50px;
        border-radius:5px;
        float:left;
        margin-right:10px;
    }
    .txt{
        float:rigth;
    }
    .degree{
        padding:20px 0;
        border-bottom:1px dotted #ccc;
    }
    .degree>span{
        display:inline-block;
        color: #268e87;
        margin-right:10px;
        font-size:14px;
        margin-top:10px;
    }

    .cooking_time{
        padding:20px 0;
        border-bottom:1px dotted #ccc;
    }
    .material{
        padding:20px 0;
        border-bottom:1px dotted #ccc;
    }
    .number{
        overflow:hidden;
        font-size:14px;
        margin-top:10px;
    }
    .number ul{
        display: flex;
        border: 1px solid #268e87;
        border-radius: 3px;
        float:right;
        width:20%;
    }
    .number ul li{
        width: 50%;
        box-sizing: border-box;
        text-align: center;
    }
    .number ul li:nth-child(1){
        border-right: 1px solid #268e87;
    }
    .number ul li .iconfont{
        color:#268e87;
    }
    .material_list{
        font-size:14px;
        margin-top:10px;
    }
    .material_list li span{
        display:inline-block;
        width:25%;
    }
    .btn span{
        display:inline-block;
        background:#268e87;
        color:#fff;
        border-radius: 3px;
        text-align:center;
        font-size:13px;
        padding:5px 0;
    }
    .btn{
        margin-top:10px;
    }
    .btn .change{
        width:8%;
        margin-right:1%;
    }
    .btn .add{
        width:89%;
    }
    .tips{
        padding:20px 0;
        border-bottom:1px dotted #ccc;
    }
    .drag{
        overflow-x:scroll;
        padding-top:10px;
    }
    .drag_imgbox{
        border-radius:12px;
        overflow:hidden;
        position:relative;
        margin-bottom:10px;
    }
    .wdrag_list{
        display:flex;
        min-width:1760px;
    } 
    .wdrag_el{
        width:240px;
        margin-right:1rem;
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
    .tool{
        margin-top:5px;
        font-size:14px;
    }
    .Nut{
        padding:20px 0;
    }
    .N_title{
        margin-bottom:5px;
    }
    .Nutrition{
        display:flex;
        font-size:14px;
    }
    .Nutrition li{
        padding:0 5px;
        box-sizing:border-box;
        width:25%;
        text-align:center;
    }
    .num{
        border-right:1px solid #ccc;
    }
    .step{
        padding-bottom:20px;
        border-bottom:1px dotted #ccc;
    }
    .step_num{
        padding:8px 0;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
    }
    .step_img{
        width:100%;
    }
    .step ul li{
        font-size:14px;
        padding:10px 0;
    }
    .step ul li .iconfont{
        font-size:18px;
        margin-right:10px;
    }
    .step ul li.tl{
        padding:0 0 10px 0;
        border-bottom:1px solid #ccc;
    }
    .kaji{
        margin:30px 0 20px 0;
        width:100%;
        padding:15px 0;
        border: 1px solid #268e87;
        border-radius: 5px;
        color:#268e87;
        display:block;
        box-sizing:border-box;
        text-align:center;
        font-size:14px;
    }
    .kaji .iconfont{
        font-size:25px;
    }
</style>