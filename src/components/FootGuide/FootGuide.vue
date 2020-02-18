<template>
  <div id="footContainer">
    <div :class="{active:$route.path === '/FirstPage'}" @click="goPath('/FirstPage')" class="guideitem">
        <i class="iconfont iconhome"></i>
        <span>首页</span>
    </div>
    <div :class="{active:$route.path === '/Classify'}" @click="goPath('/Classify')" class="guideitem">
         <i class="iconfont iconall"></i>
        <span>分类</span>
    </div>
    <div :class="{active:$route.path === '/Buy'}" @click="goPath('/Buy')" class="guideitem">
         <i class="iconfont icontupian"></i>
        <span>值得买</span>
    </div>
    <div :class="{active:$route.path === '/Shop'}" @click="goPath('/Shop')" class="guideitem">
         <i class="iconfont icongouwuchekong"></i>
        <span>购物车</span>
    </div>
    <div :class="{active:$route.path === '/Profile'}" @click="goPath('/Profile')" class="guideitem">
         <i class="iconfont icongerenzhongxin1"></i>
        <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
        goPath(path){
            this.$router.push(path)

        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #footContainer
    display flex
    border-top 1px solid #eee
    position fixed
    left 0
    bottom 0
    width 100%
    box-sizing border-box
    .guideitem
      width 20%
      height 98px
      text-align center
      display flex
      flex-direction column
      font-size 24px
      &.active
        color red
      .iconfont
        font-size 40px
        line-height 60px

  
 
</style>
