import api from './';

export default {
  async searchCompanyURLs(query) {
    const { data } = await api.post(`/companies/query`, { query });
    return data;
  },

  async scrapCompanyData(candidates) {
    const { data } = await api.post(`/companies/urls`, candidates);
    return data;
  },
};
