<template>
  <div>
    <div class="header">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :alt="item.title" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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

//首行缩进
.item
  display flex
  height 1.9rem
  overflow hidden

  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem

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

    .item-button
      margin-top .2rem
      padding 0 .1rem //上下0， 左右.1rem
      border-radius .06rem
      background #ff9300
      color #fff
</style>
