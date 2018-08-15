<template>
	<!--底部Tab-->
	<div class="footerbox">
			<router-link to="/">
				<mu-button>
					<img :src="tabImg[0].showImg"/>
					<p>首页</p>
				</mu-button>
			</router-link>
			<router-link to="/car">
				<mu-button>
					<img :src="tabImg[1].showImg"/>
					<p>购物车</p>
				</mu-button>
			</router-link>
			<router-link to="/center">
				<mu-button>
					<img :src="tabImg[2].showImg"/>
					<p>我的</p>
				</mu-button>
			</router-link>
	</div>
</template>	
	

<script>
	export default{
		data(){
			return{
				tabImg:[
					{
						showImg:require('../../../static/img/home/ic_wode_weixuan.png'),//渲染图片路径（默认灰色图片）
						img:require('../../../static/img/home/ic_wode_xuanzhong.png'),//选中图片路径
					},
					{
						showImg:require('../../../static/img/home/ic_wode_weixuan.png'),//渲染图片路径（默认灰色图片）
						img:require('../../../static/img/home/ic_wode_xuanzhong.png'),//选中图片路径
					},
					{
						showImg:require('../../../static/img/home/cart_weixuan.png'),//渲染图片路径（默认灰色图片）
						img:require('../../../static/img/home/cart_xuanzhong.png'),//选中图片路径
					}
				]
			}
		},
		props:['tagNum'],
		mounted(){
			//设置tab切换选中图片
    		this.showAcImg();
  		},
		methods:{
			/*switchTab(tag){
				let tabImg = this.tabImg;
				if(tag == 0){
					console.log(tag);
					this.tabImg[tag].showImg = tabImg[tag].img1;
					return;
				}
				if(tag == 1){
					console.log(tag);
					this.tabImg[tag].showImg = tabImg[tag].img1;
					return;
				}
			},*/
			showAcImg(){
				let tag = this.tagNum;
				let tabImg = this.tabImg;
				if(tag == 0){
					console.log(tag);
					this.tabImg[tag].showImg = tabImg[tag].img;
					return;
				}
				if(tag == 1){
					console.log(tag);
					this.tabImg[tag].showImg = tabImg[tag].img;
					return;
				}
				if(tag == 2){
					console.log(tag);
					this.tabImg[tag].showImg = tabImg[tag].img;
					return;
				}
			}
		}
	}
</script>

<style scoped>
	.footerbox{position: fixed;bottom: 0;width: 100%;z-index: 999;display: flex;background: #fff;justify-content: space-around;}
	.footerbox a{height: 1rem;line-height: 1rem;width: 33%;position: relative;}
	.footerbox a img{width: 0.43rem;height: 0.43rem;position: absolute;top: 0.1rem;left:50%;margin-left: -0.215rem;}
	.footerbox a p{margin-top: 0.6rem !important;}
	.mu-raised-button{box-shadow: none;width: 100%;height: 100%;}
	.mu-button-wrapper{flex-direction: column !important;}
	.tabimgbox{width: 100%;}
	/*.router-link-exact-active p{color: red;}//修改选择tab下面的颜色*/
</style>