<template>
    <div class='login'>
        <div class='btnbox'>
        	<span class='fb_btn'>Facebook</span>
        	<div class='msg'>
        	<div class="method-2-wrap wrap">
			  <div class="title">
			    <span>或</span>
			  </div>
			</div>
        		<input type='text' id='em' placeholder='电子邮件'>
        		<input type='text' id='pw' placeholder='密码'>
        		<span class='em_btn'>登录</span>
        		<div class='link_login'>
		        	<p>忘记密码？</p>
		        	<p class='to_reset'>重置</p>
		        </div>
        	</div>
        </div>
        <div class='link_login'>
		    <p>还没有账号？</p>
		    <router-link to='/mime/Userregister' class='to_reset'>注册</router-link>
		</div>
    </div>
</template>

<style scoped>
	.login{
		padding:0 30px;
		width:100%;
		box-sizing:border-box;
		text-align:center;
	}
	.msg{
		border-bottom:1px solid #464646;
		padding:0px 0 20px 0;
	}
	.btnbox .fb_btn,.btnbox .em_btn{
		width:100%;
		border-radius:5px;
		color:#fff;
		display:block;
		padding:10px 0;
		margin:10px 0;
	}
	.btnbox .fb_btn{
		background:#446f9c;
	}
	.btnbox .em_btn{
		background:#268e87;
	}
	input{
		border-radius:5px;
		padding:10px ;
		border:1px solid #ccc;
		width:100%;
		margin-top:10px;
		box-sizing:border-box;
	}
	.link_login{
		font-size:14px;
		margin-top:15px;
	}
	.link_login p:nth-child(2){
		margin-top:2px;
	}
	.link_login .to_reset{
		color:#268e87;
	}
	.method-2-wrap .title{
	  position: relative;
	  text-align: center;
	}
	.method-2-wrap .title:before{
	  content: '';
	  position: absolute;
	  left:0;
	  right:0;
	  top: 50%;
	  border-top:1px solid #464646;
	  z-index:1 ;
	}
	.method-2-wrap .title span{
	  padding: 0 0.5em;
	  background-color: #fff;
	  position: relative;
	  z-index:2;
	}
	.method-2-wrap .content{
	  padding:20px;
	}
</style>