<template>
  <div>
    <div class="header">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="img-container">
          <img class="item-img" :alt="item.title" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.header
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem

.img-container
  overflow hidden
  height 0
  padding-bottom 37.09%

  .item-img
    width 100%

.item-info
  flex: 1 //撑开屏幕的宽度
  padding .1rem
  min-width 0 //超出范围...

  .item-title
    line-height .54rem
    font-size .32rem
    ellipse()

  .item-desc
    line-height .4rem
    color #aaa
    text-indent .05rem
    ellipse()
</style>
