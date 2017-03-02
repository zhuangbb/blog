<template>
  <div class="header border-1px">
    <div class="logo-wrapper">
      <img src="../../../assets/logo.png" width="35" height="35">
    </div>
    <div class="title-wrapper">
      <h1>Every Day</h1>
    </div>
    <div class="login-wrapper" v-if="this.$store.state.token.token === null">
      <router-link :to="{path: 'login'}">登&nbsp;录</router-link>
    </div>
    <div class="user-wrapper" v-else>
      <img src="../../../assets/logo.png" width="35" height="35">
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        ac: true
      };
    }
  };
</script>
<style lang="stylus">
  @import '../../../common/stylus/mixin.styl'
  .header
    display flex
    align-items center
    justify-content space-between
    width 100%
    height 60px
    border-1px(#eee)
    .logo-wrapper
      flex 1
      padding 10px
    .title-wrapper
      flex 1
      text-align center
    .login-wrapper
      flex 1
      text-align right
      margin-right 10px
      a
        padding 8px 15px
        background-color #009a61
        color #fff
        text-decoration none
        border-radius 2px
    .user-wrapper
      flex 1
      text-align right
      margin-right 10px
</style>
