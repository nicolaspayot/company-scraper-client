import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import CompanyResult from './CompanyResult.vue';
import { RESET } from '../store/mutations';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

describe('CompanyResult.vue', () => {
  let mutations;
  let store;
  let wrapper;
  let vm;

  beforeEach(() => {
    mutations = { RESET: jest.fn() };
    store = new Vuex.Store({
      mutations,
    });
    router.push = jest.fn();
    wrapper = shallowMount(CompanyResult, { store, localVue, router });
    vm = wrapper.vm;
  });

  it('should go to new search', () => {
    vm.newSearch();
    expect(mutations[RESET]).toHaveBeenCalled();
    expect(router.push).toHaveBeenCalledWith({ name: 'CompanySearch' });
  });
});
