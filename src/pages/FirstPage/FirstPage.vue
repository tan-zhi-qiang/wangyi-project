<template>
    <div class="headerContainer">
		<image  src="../../static/logo.png" ></image>
		<div class="searchInput">
          <i class="iconfont iconsousuo"></i>
          <input type="text" placeholder="搜索商品" placeholder-class="placeholder">
		</div>
		<button>登录</button>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .headerContainer
    // display flex
	// justify-content flex-start
	width 100%
	height 150px
	padding 10px 0
	.logo
	  width 66px
	  height 19px
	  margin 10px 30px
	.searchInput 
		height 26px
		width 228px
		background #ededed
		position relative
		border-radius 10px
		.iconfont
			font-size 30px
			position absolute
			left 10px 
			top 25%
		input
			border-radius 10px
			height 60px
			width 390px
			margin-left 50px
		.placeholder
			font-size 24px
			color #666
	button
		position absolute
		right 0
		top 0
		width 124px
		height 60px
		color #b4282d
		line-height 56px
		text-align center
		font-size 24px
		margin 0 20px
</style>
