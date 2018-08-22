<template>
    <div class='nobody'>
    	<img src='../assets/images/nobody.jpg'>
    	<div class='content'>
        	<p class='tip'>来收取最佳食谱和其他美食美文，请注册！</p>

        	<div class='btnbox'>
        		<span class='fb_btn'>Facebook</span>
        		<span class='em_btn'><router-link to='/mime/register'>电子邮件</router-link></span>
        	</div>

        	<p class='ps'>注册成为用户即表明，我同意接受<a>使用条款</a>以及<a>数据隐私政策</a>。</p>

        	<div class='link_login'>
        		<p>已有账号？</p>
        		<router-link to='/mime/Userlogin' class='to_login'>登录</router-link>
        	</div>
        </div>
    </div>
</template>

<style scoped>
	.content{
		padding:0 30px;
		width:100%;
		box-sizing:border-box;
		text-align:center;
	}
	img{
		width:100%;
	}
	.content .tip{
		padding:15px;
	}
	.btnbox span{
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
	.btnbox a{
		color:#fff;
	}
	.ps{
		font-size:12px;
		line-height:20px;
	}
	.ps a{
		text-decoration:underline;

	}
	.link_login{
		font-size:14px;
		margin-top:15px;
	}
	.link_login .to_login{
		color:#268e87;
	}
</style>