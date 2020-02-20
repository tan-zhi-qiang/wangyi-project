<template>
	<div>
		<van-sticky>
			<div class="headerWrap" style="background:#fff">
			<!-- 头部 -->
				<van-row>
					<van-col>
						<img  class='logo' src="../../static/logo.png" />
					</van-col>
					<van-col>
						<van-search class='header_search' v-model="search_v" placeholder="请输入搜索关键词" input-align="center"
						shape="round"/>
					</van-col>
					<van-col>
						<div class="loginBtn">登录</div>
					</van-col>
				</van-row>
				
				<!--导航栏  -->
				<van-tabs class="tab-nav">
					<van-tab  v-for="(value,index ) in tabBtnList" :key="index" :title="value">
					</van-tab>
				</van-tabs>
			</div>
		</van-sticky>
<!-- swiper轮播图 -->
		<van-swipe  :autoplay="1000" indicator-color="white">
			<van-swipe-item v-for="(value,index) in imgObj" :key="index">
				<img :src=value />
			</van-swipe-item>
		</van-swipe>
<!-- 广告栏 -->
		<van-row class="service_info">
			<van-col span="8">
				<i class="icon icon1"></i>
				<span >网易自营品牌</span>
			</van-col>
			<van-col span="8">
				<i class="icon icon2"></i>
				<span>30天无忧退货</span>
			</van-col>
			<van-col span="8">
				<i class="icon icon3"></i>
				<span>48小时快速退款</span>
			</van-col>
		</van-row>
<!-- 十个栏目组 -->
		<van-grid class="ten-item" :column-num="5">
			<van-grid-item v-for="(value,index) in goods_icon" :key= index >
				<img  class="icon_tab" :src=value.imgurl />
				<div>{{value.goods_text}}</div>
			</van-grid-item>
		</van-grid>
	<!-- 背景图 -->
        <div class="bg-container" style="background-color:#1674e3;background-image:none;background-size:100% 100%;">
			<div class="bg-icon">
				<a><img class="bg-icon14" src="../../common/icon/icon14.png"/></a>
			</div>

			<div class="bg-icon2">
				<a><img class="bg-icon15" src="../../common/icon/icon15.gif"/></a>
			</div>

			<van-row>
				<van-col span="12"><a><img class="bg-icon16" src="../../common/icon/icon16.png"/></a></van-col>
				<van-col span="12"><a><img class="bg-icon17" src="../../common/icon/icon17.jpg"/></a></van-col>
			</van-row>
			<van-row>
				<van-col span="12"><a><img class="bg-icon18" src="../../common/icon/icon18.png"/></a></van-col>
				<van-col span="12"><a><img class="bg-icon19" src="../../common/icon/icon19.png"/></a></van-col>
			</van-row>
		</div>
        <div>
			<div class="goodsListbox">
				<h1>
					<label>新品首发</label>
					<a href="#">更多 ></a>
				</h1>
			</div>
			<van-grid :center="false" :border="false" class="ten-item" :column-num="3">
				<van-grid-item v-for="(value,index) in goodsList" :key= index >
					<img class="icon_tablist" :src=value.imageurl />
					<div>{{value.text}}</div>
				</van-grid-item>
			</van-grid>
		</div>
		<div style="background:#666;height:125px;text-align:center;font-size:25px;color:#fff;">底部</div>
	</div>	
</template>

<script>
export default {
	name:'app_index',
    data() {
		return {
			search_v: '',
			tabBtnList:['推荐','居家生活','服饰包装','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电',"全球特色"],
			imgObj:[
			"https://yanxuan.nosdn.127.net/fab8d20a9f2f0917b0407d7975f88c9b.jpg?type=webp&imageView&quality=75&thumbnail=375x0",
			"https://yanxuan.nosdn.127.net/011457496bbfe7a7430640a8e56338ab.jpg?type=webp&imageView&quality=75&thumbnail=375x0",
			"https://yanxuan.nosdn.127.net/5891a3b478e4cfdc9d47a50e4d9d367b.jpg?type=webp&imageView&quality=75&thumbnail=375x0",
			"https://yanxuan.nosdn.127.net/fbdf6fb0eedb27d0adc33c5bc105b5f5.jpg?type=webp&imageView&quality=75&thumbnail=375x0",
			"https://yanxuan.nosdn.127.net/3d4fbbc11172e79e3842671c447daea9.jpg?type=webp&imageView&quality=75&thumbnail=375x0",
			"https://yanxuan.nosdn.127.net/36929e72018bce053af17a80a262c4bb.jpg?type=webp&imageView&quality=75&thumbnail=375x0",
			"https://yanxuan.nosdn.127.net/fab8d20a9f2f0917b0407d7975f88c9b.jpg?type=webp&imageView&quality=75&thumbnail=375x0",
			"https://yanxuan.nosdn.127.net/100b633b1b237e0102458bbf4d851cb9.jpg?type=webp&imageView&quality=75&thumbnail=375x0",
			],
			goods_icon:[
				{
					imgurl:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
				goods_text:'新品首发'
				},
				{
					imgurl:"https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
				goods_text:'新品首发'
				},
				{ imgurl:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
				goods_text:'新品首发'
				},
				{ imgurl:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
				goods_text:'新品首发'
				},
				{ imgurl:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
				goods_text:'新品首发'
				},
				{ imgurl:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
				goods_text:'新品首发'
				},
				{ imgurl:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
				goods_text:'新品首发'
				},
				{ imgurl:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
				goods_text:'新品首发'
				},
				{ imgurl:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
				goods_text:'新品首发'
				},
				{ imgurl:"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
				goods_text:'新品首发'
				},
			],
			goodsList:[
				{
					imageurl:"https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330",
					text:"牛初乳粉",
					price:'749',
					hot:1
				},
				{
					imageurl:"https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330",
					text:"牛初乳粉",
					price:'749',
					hot:1
				},
				{
					imageurl:"https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330",
					text:"牛初乳粉",
					price:'749',
					hot:1
				},
				{
					imageurl:"https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330",
					text:"牛初乳粉",
					price:'749',
					hot:1
				},
				{
					imageurl:"https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330",
					text:"牛初乳粉",
					price:'749',
					hot:1
				},
				{
					imageurl:"https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330",
					text:"牛初乳粉",
					price:'749',
					hot:1
				},
			]

			
		}
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl"
.logo{
  width:139px;
  height:40px;
  display:inline-block;
  margin:25px 0 0 30px;
}
	
.header_search{
    width:6.3rem;
	margin:0.2rem 0 0 0;
	border:0;
	padding:0
	height:56px
}
.van-search__content{
  margin:0
  line-height:56px
}
.loginBtn{
	margin:25px 0 0 10px
	width:75px;
	height:40px;
	border:1px solid #f00;
	// border-radius:10px;
	text-align:center;
	color:#f00;
	line-height:40px
	// box-sizing:border-box
}
.tab-nav {
	height:60px
	line-height:60px
}
.ten-item{
margin-bottom:20px
}
.service_info{
	text-align:center;
	// background:#f00;
    height:72px;
	line-height:72px
}
.service_info i.icon{
   display: inline-block;
   background-repeat: no-repeat;
   background-size: 100%
   width:32px;
   height:32px;
   vertical-align:middle
}

.service_info i.icon1 {
	background-image url('../../common/icon/icon_1.png');
}
.service_info i.icon2 {
	background-image url('../../common/icon/icon_2.png');
}
.service_info i.icon3 {
	background-image url('../../common/icon/icon_3.png');
}
.icon_tab{
	display:inline-block
	width:110px
	height:110px
}
.bg-icon14{
	display:inline-block
	width:750px
	height:240px

}
.bg-icon15{
	display:inline-block
	height:160px
	margin:10px 0 0 16px
}
.bg-icon16{
	display:inline-block
	width:350px
	height:190px
	margin-left:16px
	
}
.bg-icon17{
	display:inline-block
	width:350px
	height:190px
}
.bg-icon18{
	display:inline-block
	width:350px
	height:190px
	margin-left:16px
	margin-bottom:17px
}
.bg-icon19{
	display:inline-block
	width:350px
	height:190px
	margin-bottom:17px
}
.goodsListbox{
	clear: both;
	border-top:20px solid #eee
	// background:#f00
	height:100px
	line-height:100px
	font-size:30px
}
.goodsListbox h1{
	display:block;
	clear:both;
	margin:0 25px
	
}
.goodsListbox h1 label{
	float left
}
.goodsListbox h1 a{
	float right
}
.icon_tablist{
	width:216px;
	height:216px;
	background:#f5f5f5
}
</style>
