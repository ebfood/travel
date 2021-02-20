<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true
        // Some Swiper option/callback...
      },
      list: [{
        id: '0001',
        imgUrl: 'https://gw.alicdn.com/imgextra/i2/O1CN01wRZZPQ1uUpI69CVeo_!!6000000006041-2-tps-1125-352.png_790x10000.jpg_.webp'
      }, {
        id: '0002',
        imgUrl: 'https://gw.alicdn.com/imgextra/i2/O1CN014s2CWQ1akabgfcFul_!!6000000003368-0-tps-702-200.jpg_790x10000Q75.jpg_.webp'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff

  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    background #eee

  .swiper-img
    width 100%
</style>
