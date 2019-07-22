import serverAPI from '../api/server';
import router from '../router';
import { UPDATE_QUERY, START_LOADING, UPDATE_COMPANY_URLS, UPDATE_COMPANY, ERROR } from './mutations';
import actions, { SEARCH_COMPANY_URLS, SCRAP_COMPANY_DATA } from './actions';

describe('actions', () => {
  let commit;
  let state;

  beforeEach(() => {
    commit = jest.fn();
    router.push = jest.fn();
  });

  describe('with success', () => {
    let companyURLs;

    beforeEach(() => {
      companyURLs = {
        linkedin: [
          { title: 'foo1', link: 'https://www.linkedin.com/company/foo1' },
          { title: 'foo2', link: 'https://www.linkedin.com/company/foo2' },
        ],
        societe: [
          { title: 'foo1', link: 'https://www.societe.com/societe/foo1' },
          { title: 'foo2', link: 'https://www.societe.com/societe/foo2' },
        ],
      };
    });

    it('should search company URLs', async () => {
      serverAPI.searchCompanyURLs = jest.fn(() => Promise.resolve(companyURLs));

      const query = 'foo';
      await actions[SEARCH_COMPANY_URLS]({ commit }, { query });

      expect(commit).toHaveBeenCalledWith(UPDATE_QUERY, { query });
      expect(commit).toHaveBeenCalledWith(START_LOADING);
      expect(serverAPI.searchCompanyURLs).toHaveBeenCalledWith(query);
      expect(commit).toHaveBeenCalledWith(UPDATE_COMPANY_URLS, { companyURLs });
      expect(router.push).toHaveBeenCalledWith({ name: 'CompanySelection' });
    });

    it('should scrap company data', async () => {
      serverAPI.scrapCompanyData = jest.fn(() => Promise.resolve({ name: 'foo' }));

      state = {
        candidates: {
          linkedin: companyURLs.linkedin[0].link,
          societe: companyURLs.societe[0].link,
        },
      };
      await actions[SCRAP_COMPANY_DATA]({ commit, state });

      expect(commit).toHaveBeenCalledWith(START_LOADING);
      expect(serverAPI.scrapCompanyData).toHaveBeenCalled();
      expect(commit).toHaveBeenCalledWith(UPDATE_COMPANY, { company: { name: 'foo' } });
      expect(router.push).toHaveBeenCalledWith({ name: 'CompanyResult' });
    });
  });

  describe('with error', () => {
    let error;

    beforeEach(() => {
      error = { response: { data: 'Whoops!' } };
    });

    it('should load first users', async () => {
      serverAPI.searchCompanyURLs = () => Promise.reject(error);
      const query = 'foo';
      await actions[SEARCH_COMPANY_URLS]({ commit }, { query });

      expect(commit).toHaveBeenCalledWith(ERROR, { error: 'Whoops!' });
      expect(router.push).toHaveBeenCalledWith({ name: 'CompanyError' });
    });

    it('should load more users', async () => {
      serverAPI.scrapCompanyData = () => Promise.reject(error);
      state = { candidates: {} };
      await actions[SCRAP_COMPANY_DATA]({ commit, state });

      expect(commit).toHaveBeenCalledWith(ERROR, { error: 'Whoops!' });
      expect(router.push).toHaveBeenCalledWith({ name: 'CompanyError' });
    });
  });
});
