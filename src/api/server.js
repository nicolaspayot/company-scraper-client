import api from './';

export default {
  async searchCompanyURLs(query) {
    const { data } = await api.post(`/companies/query`, { query });
    return data;
  },
};
