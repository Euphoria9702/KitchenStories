<template>
    <div class='search'>
        <header>
            <h3>查找</h3>
        </header>
        <h2 class='page_title'>查找</h2>

        <div class='container'>
        <input type='text' placeholder='饿了？' class='ipt'>

        <ul class='type_list'>
            <li>
                <img src='../assets/images/icon_svg/icon1.svg'>
                <p class='title'>亚洲风味</p>
            </li>
            <li class='separate'>
                <img src='../assets/images/icon_svg/icon2.svg'>
                <p class='title'>主菜</p>
            </li>
            <li>
                <img src='../assets/images/icon_svg/icon3.svg'>
                <p class='title'>甜点</p>
            </li>
            <li>
                <img src='../assets/images/icon_svg/icon4.svg'>
                <p class='title'>快手菜</p>
            </li>
            <li class='separate'>
                <img src='../assets/images/icon_svg/icon5.svg'>
                <p class='title'>无肉也欢</p>
            </li>
            <li>
                <img src='../assets/images/icon_svg/icon6.svg'>
                <p class='title'>意面</p>
            </li>
        </ul>
        <mt-cell title="所有食谱" class='more' is-link></mt-cell>
        <mt-cell title="所有故事" class='more' is-link></mt-cell>
        </div>
    </div>
</template>

<style scoped>
    .container{
        padding:0 10px 50px 10px;
    }
    .ipt{
        width:100%;
        padding:10px 20px;
        border-radius:8px;
        box-sizing:border-box;
        border:1px solid #d6d5d5;
         margin: 10px 0 0 0;
    }
    .type_list{
        width:100%;
        margin: 10px 0 0 5px;
        text-align:center;
        display:flex;
        flex-wrap:wrap
    }
    .type_list li{
        position:relative;
        background:rgba(242,242,242,0.5);
        border-radius:5px;
        margin: 10px 0;
        width:30.6%;
        box-sizing:border-box;
        height:150px;
    }
    .type_list li p{
        position:absolute;
        bottom:20px;
        left:0;
        vertical-align:bottom;
        width:100%;
    }
    .type_list li.separate{
        margin-left:10px;
        margin-right:10px;
    }
    .type_list img{
        position:absolute;
        top:50%;
        left:50%;
        margin-top:-25px;
        margin-left:-25px;
        width:50px;
    }
</style>