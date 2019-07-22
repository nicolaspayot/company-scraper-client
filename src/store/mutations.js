import { initialState } from './state';

export const UPDATE_QUERY = 'UPDATE_QUERY';
export const START_LOADING = 'START_LOADING';
export const UPDATE_COMPANY_URLS = 'UPDATE_COMPANY_URLS';
export const UPDATE_TAB_INDEX = 'UPDATE_TAB_INDEX';
export const SELECT_COMPANY_URL = 'SELECT_COMPANY_URL';
export const UPDATE_COMPANY = 'UPDATE_COMPANY';
export const RESET = 'RESET';
export const ERROR = 'ERROR';

export default {
  [UPDATE_QUERY](state, { query }) {
    state.query = query;
  },

  [START_LOADING](state) {
    state.loading = true;
    state.error = null;
  },

  [UPDATE_COMPANY_URLS](state, { companyURLs }) {
    state.companyURLs = companyURLs;
    state.tabIndex = state.companyURLs.linkedin.length === 0 ? 1 : 0;
    state.candidates = {};
    state.company = {};
    state.loading = false;
  },

  [UPDATE_TAB_INDEX](state, { tabIndex }) {
    state.tabIndex = tabIndex;
  },

  [SELECT_COMPANY_URL](state, { source, index }) {
    state.candidates = { ...state.candidates, [source]: state.companyURLs[source][index].link };
  },

  [UPDATE_COMPANY](state, { company }) {
    state.company = company;
    state.loading = false;
  },

  [RESET](state) {
    const stateZero = initialState();
    Object.keys(state).forEach(key => {
      state[key] = stateZero[key];
    });
  },

  [ERROR](state, { error }) {
    state.error = error;
    state.loading = false;
  },
};
