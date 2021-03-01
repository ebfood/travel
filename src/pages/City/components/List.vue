<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button" @click="handleCityClick(item.name)">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(items,index) in cities" :key="index" :ref="index">
        <div class="title border-topbottom">{{ index }}</div>
        <div class="item-list" v-for="item in items" :key="item.id">
          <div class="item border-bottom"
               @click="handleCityClick(item.name)">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'List',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('./')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      movable: true,
      zoom: true
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        let element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #ccc

  &:after
    border-color #ccc

.border-bottom
  &:before
    border-color #ccc

.list
  position absolute
  top 1.58rem
  bottom 0
  left 0
  right 0
  overflow hidden

  .title
    background #eee
    padding-left .2rem
    line-height .4rem
    color #666
    font-size .26rem

  .button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden

    .button-wrapper
      float left
      width 33.33%

      .button
        margin .2rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem

  .item-list
    .item
      line-height .76rem
      padding-left .2rem
</style>
