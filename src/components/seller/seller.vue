<template>
    <div class="seller" v-if="seller.data" ref="seller">
      <div class="seller-content">
        <div class="overview">
          <h1 class="title">{{seller.data.name}}</h1>
          <div class="desc border-1px">
            <star v-bind:size="36" v-bind:score="seller.data.score"></star>
            <span class="text">({{seller.data.ratingCount}})</span>
            <span class="text">月售{{seller.data.sellCount}}单</span>
          </div>
          <div>
            <ul class="remark">
              <li class="block">
                <h2>起送价</h2>
                <div class="countent">
                  <span class="stress">{{seller.data.minPrice}}元</span>
                </div>
              </li>
              <li class="block">
                <h2>商家配送</h2>
                <div class="countent">
                  <span class="stress">{{seller.data.deliveryPrice}}元</span>
                </div>
              </li>
              <li class="block">
                <h2>平均配送时间</h2>
                <div class="countent">
                  <span class="stress">{{seller.data.deliveryTime}}分钟</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <split></split>
        <div class="bulletin">
          <h1 class="title">公告与活动</h1>
          <div class="content-wrapper border-1px">
            <p class="content">{{seller.data.bulletin}}</p>
          </div>
          <ul v-if="seller.data.supports" class="supports">
            <li class="support-item border-1px" v-for="item in seller.data.supports">
              <span class="icon" v-bind:class="classMap[item.type]"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
        </div>
        <split></split>
        <div class="pics">
          <h1 class="title">商家实景</h1>
          <div class="pic-wrapper">
              <ul class="pic-list">
                <li class="pic-item" v-for="pic in seller.data.pics">
                  <img v-bind:src="pic" width="120" height="90">
                </li>
              </ul>
          </div>
        </div>
        <split></split>
        <div class="info">
          <h1 class="title border-1px">商家信息</h1>
          <ul>
            <li class="info-item border-1px" v-for="info in seller.data.infos">{{info}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import star from '../star/star';
  import split from '../split/split'

    export default {
      props: {
        seller: {
          type: Object
        }
      },

      mounted() {
        this.$nextTick(() => {
          this.sellerWapper = new BScroll(this.$refs.seller, {
            click: true
          });
        });
      },

      data() {
          return {
              msg: 'hello vue'
          }
        },
      created() {
        this.classMap = ['decrease','discount','special','invoice','guarantee'];
      },
      components: {
        star,
        split
      }
    };
</script>

<style lang="stylus" type="text/stylus">
  @import "../../common/stylus/mixin.styl"

  .seller
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      padding: 18px
      .title
        margin-bottom: 8px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-size: 14px
      .desc
        padding-bottom: 18px
        line-height: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        font-size: 0
        .star
          display: inline-block
          margin-right: 8px
          vertical-align: top
        .text
          display: inline-block
          margin-right: 12px
          line-height: 18px
          vertical-align: top
          font-size: 10px
          color: rgb(77, 85, 93)
      .remark
        display: flex
        padding-top: 18px
        .block
          flex: 1
          text-align: center
          border-right: 1px solid rgba(7,17,27,0.1)
          &:last-child
            border: none
          h2
            margin-bottom: 4px
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .content
            line-height: 24px
            font-size: 10px
            color: rgb(7, 17, 27)
            .stress
              font-size: 24px
    .bulletin
      padding: 18px 18px 0 18px
      .title
        margin-bottom: 8px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-siz: 14px
      .content-wrapper
        padding: 0 12px 16px 12px
        border-1px(rgba(7,17,27,0.1))
        .content
          line-height: 24px
          font-size: 12px
          color: rgb(240, 20, 20)
      .supports
        .support-item
          padding: 16px 12px
          font-size: 0
          border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border: none()
        .icon
          margin-bottom: 10x
          display: inline-block
          vertical-align: bottom
          width: 12px
          height: 12px
          margin-right: 6px
          background-size: 16px 16px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_4')
          &.discount
            bg-image("discount_4")
          &.guarantee
            bg-image("guarantee_4")
          &.invoice
            bg-image("invoice_4")
          &.special
            bg-image("special_4")
        .text
          line-height: 16px
          font-size: 12px
          color: rgb(7, 17, 27)
    .pics
      padding: 18px
      .title
        margin-bottom: 12px
        line-height: 14px
        color: rgb(7, 17, 27)
        font-siz: 14px
      .pic-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
    .info
      padding: 18px 18px 0 18px
      .title
        padding-bottom: 12px
        line-height: 14px
        border-1px(rgba(7, 17, 27, 0.1))
        color: rgb(7, 17, 27)
        font-size: 14px
      .info-item
        padding: 6px 6px
        line-height: 16px
        border-1px(rgba(7, 17, 27, 0.1))
        font-size: 14px
</style>
