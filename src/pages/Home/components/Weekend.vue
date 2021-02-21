<template>
  <div>
    <div class="header">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of itemList" :key="item.id">
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
  data () {
    return {
      itemList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/342131e7-13d7-4373-bf88-fdb3653fb00d.jpg_r_640x420x95_cfb5c052.jpg',
        title: '上海出发-跟团游 桃花季 16人陆地航空座椅|拉萨林芝羊湖纳木措双飞8日 船游巴松措 挂四酒店',
        desc: '踏青赏花正当时，1元起购券，最高可抵100元（满101就能用）！'
      }, {
        id: '0002',
        imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/342131e7-13d7-4373-bf88-fdb3653fb00d.jpg_r_640x420x95_cfb5c052.jpg',
        title: '上海出发-跟团游 桃花季 16人陆地航空座椅|拉萨林芝羊湖纳木措双飞8日 船游巴松措 挂四酒店',
        desc: '踏青赏花正当时，1元起购券，最高可抵100元（满101就能用）！'
      }, {
        id: '0003',
        imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/342131e7-13d7-4373-bf88-fdb3653fb00d.jpg_r_640x420x95_cfb5c052.jpg',
        title: '上海出发-跟团游 桃花季 16人陆地航空座椅|拉萨林芝羊湖纳木措双飞8日 船游巴松措 挂四酒店',
        desc: '踏青赏花正当时，1元起购券，最高可抵100元（满101就能用）！'
      }]
    }
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
  padding-bottom 33.9%

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
