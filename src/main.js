import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  // when server is configured to not use # style of routing use history mode and always return the index.html file
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { selector: to.hash };
    }
  }
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
