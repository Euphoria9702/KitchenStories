<template>
	<ul v-if="$route.path!='/'&&!$route.path.includes('/detail')" class='footer'>
		<li>
			<router-link to='/home' :class="{active:$route.path=='/home'||$route.path=='/'}">
				<i :class="{'iconfont icon-home':($route.path=='/home'||$route.path=='/'),'iconfont icon-home1':($route.path!='/home'&&$route.path!='/')}"></i>
				<p>今日</p>
			</router-link>
		</li>
		<li>
			<router-link to='/tips' :class="{active:$route.path=='/tips'}">
				<i :class="{'iconfont icon-4':$route.path=='/tips','iconfont icon-dengpao':$route.path!='/tips'}"></i>
				<p>小贴士</p>
			</router-link>
		</li>
		<li>
			<router-link to='/search' :class="{active:$route.path=='/search'}">
				<i class='iconfont icon-search1'></i>
				<p>搜索</p>
			</router-link>
		</li>
		<li>
			<router-link to='/mime/mybook' :class="{active:$route.path.includes('/mime')}">
				<i :class="{'iconfont icon-user-':$route.path.includes('/mime'),'iconfont icon-user':!$route.path.includes('/mime')}"></i>
				<p>我的主页</p>
			</router-link>
		</li>
	</ul>
</template>

<style scoped>
	.footer{
		display:flex;
		position:fixed;
		bottom:0;
		width:100%;
		text-align:center;
		border-top:1px solid #d6d5d5;
		padding:5px;
		background:#fff;
		z-index:999;
	}
	.footer li{
		width:33.33%;
	}
	.footer li a{
		text-decoration: none;
		color:#9b9b9b;
	}
	.footer li a.active{
		color:#268e87;
	}
	.footer li i{
		font-size:25px;
	}
	.footer li p{
		font-size:12px;
	}
</style>