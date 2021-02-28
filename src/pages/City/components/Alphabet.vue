<template>
  <ul class="list">
    <li class="item" v-for="(items,index) of cities" :key="index">{{ index }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  right 0
  bottom 0
  top 1.58rem
  width .4rem

  .item
    text-align center
    color $bgColor
    line-height .4rem
</style>
