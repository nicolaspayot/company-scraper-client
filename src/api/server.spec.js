jest.mock('./');

import api from './';
import serverAPI from './server';

describe('serverAPI', () => {
  it('should post company query to search company URLs', async () => {
    await serverAPI.searchCompanyURLs('foo');
    expect(api.post).toHaveBeenCalledWith('/companies/query', { query: 'foo' });
  });

  it('should post company URLs to scrap company data', async () => {
    const candidates = { linkedin: 'https://linkedin.com/company/foo', societe: 'https://societe.com/societe/foo' };
    await serverAPI.scrapCompanyData(candidates);
    expect(api.post).toHaveBeenCalledWith('/companies/urls', candidates);
  });
});
