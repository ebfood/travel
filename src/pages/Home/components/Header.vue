<template>
  <div class="header">
    <div class="header-left iconfont">&#xe624;</div>
    <div class="header-input iconfont">&#xe632;输入城市/景点/游玩主题</div>
    <div class="header-right iconfont arrow-icon">城市&#xe8f7;</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.header
  display flex
  line-height .86rem
  height .86rem
  color #fff
  background $bgColor

  .header-left
    width .64rem
    float left
    text-align center
    font-size .4rem

  .header-input
    flex 1
    background-color #fff;
    border-radius .1rem
    color #ccc
    line-height .64rem
    height .64rem
    margin-top .12rem
    margin-down .12rem
    padding-left .2rem

  .header-right
    width 1.24rem
    float right
    text-align center
</style>
