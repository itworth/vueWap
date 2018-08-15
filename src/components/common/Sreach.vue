<template>
	<!--头部搜索  -->
	<div class="home_h">
		 <header class="m_header">
                <div class="inputitem pm">
			    	<mu-text-field class="widthstyle midm" placeholder="您想要..." icon="search"></mu-text-field>
			    	<div class="cancel">取消</div>
		    	</div>
            </header>
	</div>
</template>
<script>
    export default{
        methods:{
            goSearch(event){
                this.$router.push('/search');
                window.event? window.event.returnValue = false : event.preventDefault();
            }
        }
    }
</script>
<style scoped>
	@import 'http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';
	.home_h{position: fixed;top: 0;width: 100%;z-index: 9999;}
	.m_header{height: 0.9rem;background: #ffd947;}
	.mu-input.has-icon{border-radius: 0.3rem;}
	.pm{padding: 0.1rem;}
	.cancel{line-height: 0.7rem;}
	.mu-input{width: 85%;}
</style>