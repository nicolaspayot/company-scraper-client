import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import CompanyError from './CompanyError.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CompanyError.vue', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      state: { error: { statusCode: 404 } },
    });
    wrapper = shallowMount(CompanyError, { store, localVue });
  });

  it('should render no result error', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render server error', () => {
    store.state.error = { stateCode: 500 };
    expect(wrapper.element).toMatchSnapshot();
  });
});
