import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex/store';
import login from 'components/login/login';

Vue.use(Router);

const routes = [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/posts',
      name: 'posts',
      component: reslove => require(['components/posts/posts'], reslove)
    }];

const router = new Router({
  routes
});
router.push('/login');
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.token.token === null) {
      next('/login');
    } else {
      next();
    }
  } else {
    if (store.state.token.token === null) {
      next();
    } else {
      if (from.path !== undefined) {
        next('/' + from.path);
      } else {
        next('/posts');
      }
    }
  }
});

export default router;
