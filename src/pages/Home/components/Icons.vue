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
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
        desc: '民宿客栈'
      }, {
        id: '0002',
        imgUrl: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png',
        desc: '专车自驾'
      }, {
        id: '0003',
        imgUrl: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png',
        desc: '赚钱信用卡'
      }, {
        id: '0004',
        imgUrl: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png',
        desc: '团购旅游'
      }, {
        id: '0005',
        imgUrl: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: 'https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png',
        desc: '特惠酒店'
      }, {
        id: '0007',
        imgUrl: 'https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png',
        desc: '借钱'
      }, {
        id: '0008',
        imgUrl: 'https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png',
        desc: '白金卡'
      }, {
        id: '0009',
        imgUrl: 'https://img1.qunarzz.com/order/comp/2007/23/734c3c62d2adce02.png',
        desc: '行程设计'
      }]
    }
  },
  computed: {
    pages () {
      // 列表分页，八个一组
      const pages = []
      this.iconList.forEach((item, index) => {
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
      padding: .3rem

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
      bottom .2rem
      text-align center
      color $darkTextColor
      ellipse()
</style>
