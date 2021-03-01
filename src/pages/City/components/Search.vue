<template>
  <div>
    <div class="search">
      <input v-model="keywords" class="search-input" placeholder="输入城市名称或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keywords">
      <ul>
        <li v-for="city of this.searchRes"
            :key="city.id"
            class="search-item border-topbottom"
            @click="handleCityClick(city.name)"
        >{{ city.name }}
        </li>
        <li class="search-item border-topbottom" v-show="searchStatus"> 没有找到匹配结果</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keywords: '',
      searchRes: [],
      timer: null
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('./')
    }
  },
  watch: {
    keywords () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keywords) {
        this.searchRes = []
        return
      }
      this.timer = setTimeout(() => {
        let result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keywords) > -1 || value.name.indexOf(this.keywords) > -1) {
              result.push(value)
            }
          })
        }
        this.searchRes = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, {
      movable: true,
      zoom: true
    })
  },
  computed: {
    searchStatus () {
      return (!this.searchRes.length && this.keywords.length)
    }
  }
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

.search-content
  background #eee
  z-index 1
  position absolute
  overflow hidden
  top 1.58rem
  left 0
  right 0
  bottom 0

  .search-item
    line-height .72rem
    padding-left .2rem
    background #fff
    color #666
</style>
