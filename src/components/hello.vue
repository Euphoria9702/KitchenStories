<template>
	<div class='hello'>
	<router-link to='/home'>
		<img src='../assets/images/logo.svg'>
		<p>any one can cook</p>
	</router-link>
	</div>
</template>

<script>
	export default{
		mounted(){
			var _this=this;
			window.setTimeout(function(){
		        _this.$router.push("/home")
		    },3000)
		}
	}
</script>

<style scoped>
	.hello{
		position: fixed;
		top:50%;
    	left:50%;
		margin-left:-130px;
		text-align:center;
	}
	.hello a{
		display:block;
		width:100%;
		height:500px;
		text-decoration:none;
		color: #464646;
	}
	.hello img{
		animation: appear 2s linear;
		width:260px;
	}
	@keyframes appear{
    0%{ transform:scale(1,1)}
    50%{ transform:scale(1.1,1.1)}
    100%{ transform:scale(1,1)}
	}
</style>