import router from '../router';
import serverAPI from '../api/server';
import { UPDATE_QUERY, START_LOADING, UPDATE_COMPANY_URLS, UPDATE_COMPANY, ERROR } from './mutations';

export const SEARCH_COMPANY_URLS = 'SEARCH_COMPANY_URLS';
export const SCRAP_COMPANY_DATA = 'SCRAP_COMPANY_DATA';

export default {
  async [SEARCH_COMPANY_URLS]({ commit }, { query }) {
    commit(UPDATE_QUERY, { query });
    commit(START_LOADING);

    try {
      const data = await serverAPI.searchCompanyURLs(query);
      commit(UPDATE_COMPANY_URLS, { companyURLs: { ...data } });
      router.push({ name: 'CompanySelection' });
    } catch (error) {
      commit(ERROR, { error: error.response.data });
      router.push({ name: 'CompanyError' });
    }
  },

  async [SCRAP_COMPANY_DATA]({ commit, state }) {
    const { candidates } = state;
    commit(START_LOADING);

    try {
      const company = await serverAPI.scrapCompanyData(candidates);
      commit(UPDATE_COMPANY, { company });
      router.push({ name: 'CompanyResult' });
    } catch (error) {
      commit(ERROR, { error: error.response.data });
      router.push({ name: 'CompanyError' });
    }
  },
};
