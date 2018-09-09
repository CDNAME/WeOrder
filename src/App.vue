<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view v-bind:seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header'

  export default {
    name: 'App',
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/api/seller').then((res) => {
        this.seller = res.data;
        // console.log(this.seller)
      }).catch(function (error) {
        console.log("error init." + error)
      });
    },
    components: {
      'v-header': header
    },
}
</script>

<style lang="stylus" type="text/stylus">
  @import "./common/stylus/mixin.styl"

  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 16px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
