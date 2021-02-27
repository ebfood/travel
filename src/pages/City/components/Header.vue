<template>
  <div class="header">
    选择城市
    <router-link to="/">
      <div class="header-left iconfont">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'

}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.header
  position relative
  height $headerHeight
  background $bgColor
  color #fff
  font-size .4rem
  line-height $headerHeight
  text-align center
  .header-left
    position absolute
    top 0
    left 0
    color #fff
    font-size .4rem
    line-height $headerHeight
</style>
