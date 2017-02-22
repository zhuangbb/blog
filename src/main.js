// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import test from './services/index';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted () {
    test.get('/Code/SendRegisterCode', {
      userName: '17600082709'
    }).then((data) => { return data; });
    test.post('/Login/UserLogin', {
      userName: '17600082709',
      userPass: '123'
    });
  }
});
