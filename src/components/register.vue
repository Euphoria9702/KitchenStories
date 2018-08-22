<template>
    <div class='register'>
        <input type='text' id='em' placeholder='电子邮件'>
        <input type='text' id='name' placeholder='名字'>
        <input type='text' id='pw' placeholder='密码'>
        <span class='em_btn'>登录</span>

        <p class='ps'>注册成为用户即表明，我同意接受<a>使用条款</a>以及<a>数据隐私政策</a>。</p>

        <div class='link_login'>
        	<p>已有账号？</p>
        	<router-link to='/mime/Userlogin' class='to_login'>登录</router-link>
        </div>
    </div>
</template>

<style scoped>
	.register{
		padding:0 30px;
		width:100%;
		box-sizing:border-box;
		text-align:center;
	}
	input{
		border-radius:5px;
		padding:10px ;
		border:1px solid #ccc;
		width:100%;
		margin-top:10px;
		box-sizing:border-box;
	}
	.em_btn{
		background:#268e87;
		width:100%;
		border-radius:5px;
		color:#fff;
		display:block;
		padding:10px 0;
		margin:20px 0;
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
		margin-top:30px;
	}
	.link_login .to_login{
		color:#268e87;
	}
</style>