import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      auth: true,
      icon: 'home',
      title: 'Главная',
    },
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/Weather',
    name: 'Weather',
    meta: {
      auth: true,
      icon: 'cloud',
      title: 'Погода',
    },
    component: () => import(/* webpackChunkName: "Weather" */ '../views/Weather.vue'),
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    meta: {
      auth: true,
      icon: 'calculate',
      title: 'Калькуляор',
    },
    component: () => import(/* webpackChunkName: "Calculator" */ '../views/Calculator.vue'),
  },
  {
    path: '/developer',
    name: 'developer',
    meta: {
      auth: true,
      icon: 'developer_board',
      title: 'В разработке...',
    },
    component: () => import(/* webpackChunkName: "Calculator" */ '../views/developer.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
