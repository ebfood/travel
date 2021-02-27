<template>
  <div class="header">
    <div class="header-left iconfont">&#xe624;</div>
    <div class="header-input iconfont">&#xe632;输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right iconfont arrow-icon">{{ city }}&#xe8f7;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.header
  display flex
  line-height $headerHeight
  height $headerHeight
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
    color #fff
</style>
