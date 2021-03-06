// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import 'common/stylus/index.styl';
import header from 'components/common/header/header';
import footer from 'components/common/footer/footer';

Vue.component('meHeader', header);
Vue.component('meFooter', footer);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
