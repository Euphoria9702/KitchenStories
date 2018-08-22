<template>
    <div class='setting'>
        <div @click='popupVisibleUser=1'>
            <mt-cell :title="data[0].name" label="编辑个人资料" id='user'>
                <img slot="icon" :src="data[0].src" class='touxiang'>
                <span><i class="mint-cell-allow-right"></i></span>
            </mt-cell>
        </div>
        <div class='list'>
            <p>系统</p>
            <mt-cell title="语言" id='el'>
                <img slot="icon" src="../assets/images/icon_setting/01.svg" class='icon'>
                <span><i class="mint-cell-allow-right"></i></span>
            </mt-cell>
            <mt-cell title="度量系统" id='el'>
                <img slot="icon" src="../assets/images/icon_setting/02.svg" class='icon'>
                <span><i class="mint-cell-allow-right"></i></span>
            </mt-cell>
            <mt-cell title="自动播放" id='el'>
                <img slot="icon" src="../assets/images/icon_setting/03.svg" class='icon'>
                <span><i class="mint-cell-allow-right"></i></span>
            </mt-cell>
            <mt-cell title="通知" id='el'>
                <img slot="icon" src="../assets/images/icon_setting/04.svg" class='icon'>
                <span><i class="mint-cell-allow-right"></i></span>
            </mt-cell>
        </div>

        <div class='list'>
            <p>额外</p>
            <mt-cell title="关于我们" id='el'>
                <img slot="icon" src="../assets/images/icon_setting/05.svg" class='icon'>
                <span><i class="mint-cell-allow-right"></i></span>
            </mt-cell>
            <mt-cell title="给团队送点小鼓励吧！" id='el'>
                <img slot="icon" src="../assets/images/icon_setting/06.svg" class='icon'>
                <span><i class="mint-cell-allow-right"></i></span>
            </mt-cell>
            <mt-cell title="推荐应用程序" id='el'>
                <img slot="icon" src="../assets/images/icon_setting/07.svg" class='icon'>
            </mt-cell>
            <mt-cell title="评价APP" id='el'>
                <img slot="icon" src="../assets/images/icon_setting/08.svg" class='icon'>
            </mt-cell>
            <mt-cell title="反馈" id='el'>
                <img slot="icon" src="../assets/images/icon_setting/09.svg" class='icon'>
            </mt-cell>
            <mt-cell title="法律信息" id='el'>
                <img slot="icon" src="../assets/images/icon_setting/10.svg" class='icon'>
                <span><i class="mint-cell-allow-right"></i></span>
            </mt-cell>
        </div>

         <div class='cancel'>
            <p id='cancel_btn'>退出</p>
         </div>

        <!--详细信息-->
        <mt-popup v-model="popupVisibleUser" position="right" :modal=false class='mint-popup-user'>
            <div class='set_header'>
                <p>个人资料设置</p>
                <span @click='popupVisibleUser=0' class='back_btn'>
                    <i class='iconfont icon-left'></i>
                </span>
            </div>
            <v-usermsg></v-usermsg>
        </mt-popup>
    </div>
</template>

<script>
    import usermsg from '../components/user_msg.vue'

    export default {
       data(){
            return{
                popupVisibleUser:0,
                data:[]
            }
        },
        components:{
            'v-usermsg':usermsg
        },
        mounted(){
            this.$axios.get('json/user.json').then(res=>{
                this.data=res.data.data
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .setting{
        height: 93%;
        background: #f3f3f3;
        overflow-y: scroll;
    }
    #user{
        padding:10px;
        margin:20px 0;
        border-top:1px solid #d6d5d5;
        border-bottom:1px solid #d6d5d5;
    }
    .touxiang{
        width:60px;
        height:60px;
        border-radius:5px;
    }
    .list{
        margin-top:40px;
    }
    .list>p{
        padding: 5px 10px;
    }
    #el{
        border-bottom:1px solid #d6d5d5;
    }
    .icon{
        width:20px;
        height:20px;
    }
    #cancel_btn{
        text-align:center;
        border-top:1px solid #d6d5d5;
        border-bottom:1px solid #d6d5d5;
        background:#fff;
        padding:10px 0;
        margin:30px 0;
        color: #268e87;
    }
    .mint-popup-user{
        width: 100%;
        height: 100%;
        background-color: #fff;
        overflow-y:scroll;
    }
    .set_header{
        text-align:center;
        width:100%;
        padding:10px 0;
        background:#fff;
        z-index:2019;
        border-bottom:1px solid #d6d5d5;
    }
    .back_btn{
        position:fixed;
        top:10px;
        left:15px;
        color: #268e87;
    }
</style>