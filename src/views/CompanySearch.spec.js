import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import CompanySearch from './CompanySearch.vue';
import { SEARCH_COMPANY_URLS } from '../store/actions';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CompanySearch.vue', () => {
  let actions;
  let store;
  let wrapper;
  let vm;

  beforeEach(() => {
    actions = { SEARCH_COMPANY_URLS: jest.fn() };
    store = new Vuex.Store({
      state: { query: '', loading: false },
      actions,
    });
    wrapper = shallowMount(CompanySearch, { store, localVue });
    vm = wrapper.vm;
  });

  it('should not trigger a search with empty query', async () => {
    await vm.searchCompanyURLs();
    expect(actions[SEARCH_COMPANY_URLS]).not.toHaveBeenCalled();
  });

  it('should not trigger a search while loading', async () => {
    store.state.query = 'foo';
    store.state.loading = true;
    await vm.searchCompanyURLs();
    expect(actions[SEARCH_COMPANY_URLS]).not.toHaveBeenCalled();
  });

  it('should trigger a search with valid state', async () => {
    store.state.query = 'foo';
    await vm.searchCompanyURLs();
    expect(actions[SEARCH_COMPANY_URLS]).toHaveBeenCalledWith(expect.any(Object), { query: 'foo' }, undefined);
  });
});
