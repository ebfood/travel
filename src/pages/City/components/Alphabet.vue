<template>
  <ul class="list">
    <li class="item"
        v-for="index of letters"
        :key="index"
        :ref="index"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >{{ index }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      topY: 0,
      timer: null
    }
  },
  updated () {
    this.topY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let currY = e.touches[0].clientY - 79
          let index = Math.floor((currY - this.topY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 10)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
