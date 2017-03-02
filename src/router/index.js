import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex/store';
import home from 'components/home/home';

Vue.use(Router);

const routes = [{
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: reslove => require(['components/login/login'], reslove)
    },
    {
      path: '/posts',
      name: 'posts',
      component: reslove => require(['components/posts/posts'], reslove)
    }];

const router = new Router({
  routes,
  mode: 'hash'
});
router.replace('/home');
router.beforeEach((to, from, next) => {
  if (to.path === '/home' || to.path === '/') {
    next();
  }
  if (to.path !== '/login') {
    if (store.state.token.token === null) {
      next('/home');
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
        next('/login');
      }
    }
  }
});

export default router;
