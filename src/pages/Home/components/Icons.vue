<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl"
                 alt="icon">
          </div>
          <p class="icon-desc">{{ icon.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  computed: {
    pages () {
      // 列表分页，八个一组
      const pages = []
      this.list.forEach((item, index) => {
        const p = Math.floor(index / 8) // 页码
        if (!pages[p]) pages[p] = []
        pages[p].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
@import "~styles/mixins.styl"
.icons
  //overflow hidden
  width 100%
  height 0 /* 限制高度*/
  padding-bottom 50%

  .icon
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%

    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding: .2rem

      .icon-img-content
        height 100%
        //居中
        display block
        margin 0 auto

    .icon-desc
      position absolute
      line-height .44rem
      height .44rem
      left 0
      right 0
      bottom .1rem
      text-align center
      color $darkTextColor
      ellipse()
</style>
