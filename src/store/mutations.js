export const UPDATE_QUERY = 'UPDATE_QUERY';
export const START_LOADING = 'START_LOADING';
export const UPDATE_COMPANY_URLS = 'UPDATE_COMPANY_URLS';
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
    state.loading = false;
  },

  [ERROR](state, { error }) {
    state.error = error;
    state.loading = false;
  },
};
