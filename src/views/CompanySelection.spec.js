import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import CompanySelection from './CompanySelection.vue';
import { UPDATE_TAB_INDEX, SELECT_COMPANY_URL } from '../store/mutations';
import { SCRAP_COMPANY_DATA } from '../store/actions';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CompanySelection.vue', () => {
  let mutations;
  let actions;
  let store;
  let wrapper;
  let vm;

  beforeEach(() => {
    mutations = { UPDATE_TAB_INDEX: jest.fn(), SELECT_COMPANY_URL: jest.fn() };
    actions = { SCRAP_COMPANY_DATA: jest.fn() };
    store = new Vuex.Store({
      state: {},
      getters: {
        linkedinURLs() {
          return [];
        },
        societeURLs() {
          return [];
        },
        isCandidatesEmpty() {
          return false;
        },
      },
      mutations,
      actions,
    });
    wrapper = shallowMount(CompanySelection, { store, localVue });
    vm = wrapper.vm;
  });

  it('should update tab index', () => {
    vm.onTabIndexChange(0);
    expect(mutations[UPDATE_TAB_INDEX]).toHaveBeenCalledWith(store.state, { tabIndex: 0 });
  });

  it('should select company URLs', () => {
    const params = { source: 'linkedin', index: 0 };
    vm.onURLChecked(params);
    expect(mutations[SELECT_COMPANY_URL]).toHaveBeenCalledWith(store.state, params);
  });

  it('should scrap company data', () => {
    vm.scrapCompanyData();
    expect(actions[SCRAP_COMPANY_DATA]).toHaveBeenCalled();
  });
});
