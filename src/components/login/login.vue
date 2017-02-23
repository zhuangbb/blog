<template>
  <div class="login">
    <div class="logo-wrapper border-1px">
      <img src="../../assets/logo.png" class="logo">
    </div>
    <div class="login-wrapper">
      <div class="login-header">Terry-Blog</div>
      <div class="login-body">
        <input class="from-control" type="text" placeholder="用户名" :value="user.userName" @input="updateUser"></input>
        <input class="from-control" type="password" placeholder="密码" :value="user.userPass" @input="updatePass"></input>
      </div>
      <div class="login-footer">
        <button class="btn btn-ok" @click="submit">登&nbsp;录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    };
  },
  computed: {
    validUser () {
      if (this.user.userName.trim().length !== 11) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    updateUser (e) {
      this.user.userName = e.target.value;
    },
    updatePass (e) {
      this.user.userPass = e.target.value;
    },
    submit () {
      if (!this.validUser) {
        return;
      }
      this.user.router = this.$router;
      this.$store.dispatch('userCreate', this.user);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixin.styl'
@import '../../common/stylus/settings.styl'
.login
  .logo-wrapper
    padding 15px 0
    text-align center
    border-1px(#eee)
    .logo
      height 50px   
  .login-wrapper
    display flex
    margin 45px auto 0 auto
    padding 15px
    max-width 350px
    flex-direction column
    align-items center
    border-radius 10px
    background-color #fafafa
    box-shadow 0 0px 2px #CCC
    .login-header
      font-size 30px
      line-height 1.5
    .login-body
      .from-control
        box-sizing border-box
        padding 10px 8px
        margin-top 15px
        width 100%
        outline 0
        font-size 15px
        border 1px solid $border
        border-radius 5px
    .login-footer
      margin 20px auto 0 auto
      width 200px
      .btn
        padding 10px
        width 100%
        text-align center
        border 1px solid transparent
        border-radius 3px
        cursor pointer
        color #fff
        font-size 10px
        outline 0
        &.btn-ok
          background-color $green
</style>

