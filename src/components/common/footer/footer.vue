<template>
  <div class="footer">
    <span class="copyright">©版权所有 Terry</span>&nbsp;
    <span class="records">晋ICP备16004206号</span>
  </div>
</template>

<script>
  export default{
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.footer
  position fixed
  left 0
  bottom 0
  width 100%
  height 60px
  z-index -1
  background-color black
  opacity 0.8
  text-align center
  line-height 60px
  .copyright, .records
    display inline-block
    font-weight 80
    color #fff

</style>
