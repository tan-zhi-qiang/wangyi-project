<template>
  <div id="appContainer">
    <router-view></router-view>
    <FirstPage />
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/FootGuide/FootGuide'
export default {
  name: 'App',
  components:{FooterGuide}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #appContainer
    height 100%
    width 100%
</style>
