<template>
	<div>
		个人中心
		<Footer tagNum='2'></Footer>
	</div>
</template>

<script>
	import Footer from '../common/Footer.vue';
	
	export default {
	  name: 'HelloWorld',
	  components:{
	    Footer
	   },
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  }
	}
</script>

<style>
</style>