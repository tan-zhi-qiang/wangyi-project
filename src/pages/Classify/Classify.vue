<template>
  <div class="classifycontainer">
    <!-- 搜索框 -->
    <div class="header">
      <van-col>
						<van-search class='header_search' v-model="search_v" placeholder="请输入搜索关键词" input-align="center"
						shape="round" />
			</van-col>
    </div>

    <!-- 侧导航 -->
    <div class="catecontainer">
       <div class="leftnavwrap">
         <ul class="listcontainer">
           <li class="itemcontainer" style="margin:0;border-left:3px solid #ab2b2b">
             <a style="color:#ab2b2b" href="#">推荐专区</a>
           </li>
           <li class="itemcontainer">
             <a href="#">推荐专区</a>
           </li>
           <li class="itemcontainer">
             <a href="#">推荐专区</a>
           </li>
           <li class="itemcontainer">
             <a href="#">推荐专区</a>
           </li>
           <li class="itemcontainer">
             <a href="#">推荐专区</a>
           </li>
           <li class="itemcontainer">
             <a href="#">推荐专区</a>
           </li>
           <li class="itemcontainer">
             <a href="#">推荐专区</a>
           </li>
           <li class="itemcontainer">
             <a href="#">推荐专区</a>
           </li>
           <li class="itemcontainer">
             <a href="#">推荐专区</a>
           </li>
           <li class="itemcontainer">
             <a href="#">推荐专区</a>
           </li>
           <li class="itemcontainer">
             <a href="#">推荐专区</a>
           </li>
         </ul>
       </div>
       <div class="rightnavwrap">
       </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.leftnavwrap',{
      scrollY:true,
     })
    }
  }

</script>

<style scoped lang="stylus">
@import "../../common/stylus/mixins.styl"
.header{
  width 100%
  height 105px
  border-bottom 1px solid #ededed
}
.header_search{
  width:690px;
  height:70px
  margin:20px 20px 20px 25px
  
}
.header_search .van-search__content{
  background:"#ededed"
}
van-col .header_search .van-cell{
  font-size: 17px
}
.catecontainer{
  display:flex
  width:100%
  height:85%
}
.leftnavwrap{
  width:162px
  // background:red
  position:absolute
  bottom:0px
  top:107px;
}
.leftnavwrap .listcontainer{
  margin:25px 0 0 0
}
.leftnavwrap .listcontainer .itemcontainer{
  width:100%
  height 50px;
  text-align:center;
  line-height:50px;
  margin-top:50px
  box-sizing:border-box
  font-size:28px
}
// .leftnavwrap .listcontainer .itemcontainer a{
//   color:#ab2b2b
// }

.rightnavwrap{
  height:625px
}
.classifycontainer{
  width:100%;
  height:100%
}
 
</style>
