<template>
	<!--home组件 -->
  <div class="home">
  	 <!-- 搜索区 -->
     <Sreach></Sreach>
  </div>
</template>

<script>
import Sreach from '../common/Sreach.vue'
	
export default {
  name: 'HelloWorld',
  components:{
    Sreach
   },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
