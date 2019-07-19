import Vue from 'vue';
import Router from 'vue-router';
import isEmpty from 'lodash/isEmpty';
import store from './store';
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
      beforeEnter(to, from, next) {
        if (!isEmpty(store.state.companyURLs)) {
          next();
        } else {
          next({ name: 'CompanySearch' });
        }
      },
    },
    {
      path: '/result',
      name: 'CompanyResult',
      component: () => import('./views/CompanyResult.vue'),
      beforeEnter(to, from, next) {
        if (!isEmpty(store.state.company)) {
          next();
        } else {
          next({ name: 'CompanySearch' });
        }
      },
    },
    {
      path: '/error',
      name: 'CompanyError',
      component: () => import('./views/CompanyError.vue'),
      beforeEnter(to, from, next) {
        if (store.state.error) {
          next();
        } else {
          next({ name: 'CompanySearch' });
        }
      },
    },
  ],
});
