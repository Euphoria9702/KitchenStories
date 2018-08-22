<template>	
	<div id='home'>
		<header>
			<h3>今日</h3>
		</header>
		<h2 class='page_title'>今日</h2>
		<div class='container'>
			<div class='today cut'>
				<p class='title'>今日故事</p>
				<div class='td_image'>
					<img :src='data.header.src'>
					<div class='shade'></div>
					<span class='like'>
						<i class='iconfont icon-cc-heart-o'></i>
						<span>{{data.header.like}}</span>
					</span>
				</div>
				<p class='title'>{{data.header.title}}</p>
				<p class='subtitle'>{{data.header.subtitle}}</p>
			</div>

			<p class='title Stitle'>Blogger Bites</p>
			<div class='Banner cut'>
				<mt-swipe :auto="0">
					<mt-swipe-item v-for='v in data.list1'>
						<div class='today'>
							<div class='td_image'>
								<img :src='v.src'>
								<div class='shade'></div>
								<span class='like'>
									<i class='iconfont icon-cc-heart-o'></i>
									<span>{{v.like}}</span>
								</span>
								<span class='time'>{{v.time}} 分钟</span>
							</div>
							<p class='title'>{{v.title}}</p>
						</div>
					</mt-swipe-item>
				</mt-swipe>
			</div>

			<p class='title Stitle'>
				新食记
				<span class='link_all'>查看全部
					<i class='iconfont icon-more'></i>
				</span>
			</p>
			<div class='drag cut'>
				<ul class='drag_list'>
					<li class='drag_el' v-for='v in data.list2'>
						<router-link :to="'/detail/'+v.id">
							<div class='drag_imgbox'>
								<img :src='v.src'>
								<div class='shade'></div>
								<span class='like'>
									<i class='iconfont icon-cc-heart-o'></i>
									<span>{{v.like}}</span>
								</span>
								<span class='time'>{{v.time}}分钟</span>
							</div>
							<p class='title'>{{v.title}}</p>
						</router-link>
					</li>
					
				</ul>
			</div>

			<p class='title Stitle'>
				新意新味
				<span class='link_all'>完整菜谱
					<i class='iconfont icon-more'></i>
				</span>
			</p>
			<div class='today cut'>
				<div class='td_image'>
					<img :src='data.vedio_list[0].src'>
					<div class="shade"></div>
					<span class='Bigvedio'>
						<i class='iconfont icon-shipin'></i>
					</span>
				</div>
				<p class='title'>{{data.vedio_list[0].title}}</p>
				<p class='subtitle'>{{data.vedio_list[0].time}} 分钟 - {{data.vedio_list[0].watch_time}} 次观看</p>
			</div>

			<p class='title Stitle'>晚餐吃什么？</p>
			<div class='Banner cut'>
				<mt-swipe :auto="0">
					<mt-swipe-item v-for='v in data.list3'>
						<div class='today'>
							<div class='td_image'>
								<img :src='v.src'>
								<div class='shade'></div>
								<span class='like'>
									<i class='iconfont icon-cc-heart-o'></i>
									<span>{{v.like}}</span>
								</span>
								<span class='time'>{{v.time}} 分钟</span>
							</div>
							<p class='title'>{{v.title}}</p>
						</div>
					</mt-swipe-item>
				</mt-swipe>
			</div>

			<p class='title Stitle'>当季果蔬：桃子</p>
			<div class='drag cut'>
				<ul class="wdrag_list">
					<li class='wdrag_el' v-for='v in data.list4'>
						<div class='drag_imgbox'>
							<img :src='v.src'>
							<div class='shade'></div>
							<span class='like'>
								<i class='iconfont icon-cc-heart-o'></i>
								<span>{{v.like}}</span>
							</span>
							<span class='time'>{{v.time}}分钟</span>
						</div>
						<p class='title'>{{v.title}}</p>
					</li>
				</ul>
			</div>

			<p class='title Stitle'>
				简单快捷
				<span class='link_all'>完整菜谱
					<i class='iconfont icon-more'></i>
				</span>
			</p>
			<div class='today cut'>
				<div class='td_image'>
					<img :src='data.vedio_list[1].src'>
					<div class="shade"></div>
					<span class='Bigvedio'>
						<i class='iconfont icon-shipin'></i>
					</span>
				</div>
				<p class='title'>{{data.vedio_list[1].title}}</p>
				<p class='subtitle'>{{data.vedio_list[1].time}} 分钟 - {{data.vedio_list[1].watch_time}} 次观看</p>
			</div>

				<p class='title Stitle'>
				食谱速览
				<span class='link_all'>查看全部
					<i class='iconfont icon-more'></i>
				</span>
			</p>
			<div class='drag'>
				<ul class=drag_list>
					<li class='drag_el' v-for='v in data.type_list'>
						<div class='drag_imgbox'>
							<img :src='v.src'>
							<div class='shade'></div>
							<span class='type_title'>{{v.title}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

	import $ from 'zepto';

	$('.like').click(function(event) {
   		$(this).children('.iconfont').toggleClass('icon-cc-heart-o"');
    	$(this).children('.iconfont').toggleClass('icon-heart');
    	console.log('helli')
	});

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
			this.$axios.get('json/home.json').then(res=>{
				this.data=res.data.data
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
</script>

<style scoped>
	.shade{
		position:absolute;
		height:100%;
		left:0;
		top:0;
		width:100%;
		background:linear-gradient(to bottom,rgba(0,0,0,0) 60%,rgba(0,0,0,0.5) 100%)
	}
	.like{
		position:absolute;
		height:25px;
		bottom:10px;
		left:10px;
		color:#fff;
	}
	.like .iconfont{
		font-size:25px;
	}
	.like span{
		display:inline-block;
		height:100%;
		vertical-align:top;
		line-height:25px;
		font-size:14px;
	}
	.time{
		position:absolute;
		right:10px;
		bottom:10px;
		color:#fff;
		font-size:14px;
	}
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
	.link_all .iconfont{
		font-size:14px;
	}
	.today{
		padding:0 10px;
	}
	.td_image{
		position:relative;
		width:100%;
		height:200px;
		border-radius:12px;
		overflow:hidden;
		margin:10px 0;
	}
	.td_image img{
		width:100%;
		display:block;
		position: absolute;
    	top: -30px;
	}
	.cut{
		margin-bottom:40px;
	}
	.Banner{
		height:270px;
	} 
	.drag{
		overflow-x:scroll;
		padding:10px;
	}
	.drag_list{
		display:flex;
		min-width:1450px;
	} 
	.wdrag_list{
		display:flex;
		min-width:512px;
	} 
	.drag_el{
		width:230px;
		margin-right:1rem;
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
	.type_title{
		position:absolute;
		color:#fff;
		font-size:17px;
		width:100%;
		text-align:center;
		bottom:10%;
	}
</style>