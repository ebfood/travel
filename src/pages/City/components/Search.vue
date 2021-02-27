<template>
  <div class="search">
    <input class="search-input" placeholder="请输入当前城市">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.search
  background $bgColor
  height .72rem
  padding 0 .1rem
  .search-input
    box-sizing border-box
    padding 0 .1rem
    color #666
    height .64rem
    line-height .64rem
    width 100%
    border-radius .06rem
    text-align center
</style>
