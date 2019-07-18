import Vue from 'vue';
import Router from 'vue-router';
import CompanySearch from './views/CompanySearch.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CompanySearch',
      component: CompanySearch,
    },
    {
      path: '/selection',
      name: 'CompanySelection',
      component: () => import('./views/CompanySelection.vue'),
    },
    {
      path: '/result',
      name: 'CompanyResult',
      component: () => import('./views/CompanyResult.vue'),
    },
    {
      path: '/error',
      name: 'CompanyError',
      component: () => import('./views/CompanyError.vue'),
    },
  ],
});
