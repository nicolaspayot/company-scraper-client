import mutations, {
  UPDATE_QUERY,
  START_LOADING,
  UPDATE_COMPANY_URLS,
  UPDATE_TAB_INDEX,
  SELECT_COMPANY_URL,
  UPDATE_COMPANY,
  RESET,
  ERROR,
} from './mutations';
import { initialState } from './state';

const linkedinURLs = [
  { title: 'foo', link: 'https://www.linkedin.com/company/foo' },
  { title: 'bar', link: 'https://www.linkedin.com/company/bar' },
];
const societeURLs = [
  { title: 'foo', link: 'https://www.societe.com/societe/foo' },
  { title: 'bar', link: 'https://www.societe.com/societe/bar' },
];

describe('mutations', () => {
  it('should update query', () => {
    const state = { query: '' };
    const query = 'foo';
    mutations[UPDATE_QUERY](state, { query });
    expect(state.query).toBe('foo');
  });

  it('should start loading', () => {
    const state = { loading: false, error: { message: 'Whoops' } };
    mutations[START_LOADING](state);
    expect(state).toEqual({
      loading: true,
      error: null,
    });
  });

  it('should update company URLs from linkedin.com', () => {
    const state = {};
    const companyURLs = {
      linkedin: linkedinURLs,
      societe: [],
    };
    mutations[UPDATE_COMPANY_URLS](state, { companyURLs });
    expect(state).toEqual({
      candidates: {},
      company: {},
      companyURLs: {
        linkedin: linkedinURLs,
        societe: [],
      },
      loading: false,
      tabIndex: 0,
    });
  });

  it('should update company URLs from societe.com', () => {
    const state = {};
    const companyURLs = {
      linkedin: [],
      societe: societeURLs,
    };
    mutations[UPDATE_COMPANY_URLS](state, { companyURLs });
    expect(state).toEqual({
      candidates: {},
      company: {},
      companyURLs: {
        linkedin: [],
        societe: societeURLs,
      },
      loading: false,
      tabIndex: 1,
    });
  });

  it('should update company URLs from linkedin.com and societe.com', () => {
    const state = {};
    const companyURLs = {
      linkedin: linkedinURLs,
      societe: societeURLs,
    };
    mutations[UPDATE_COMPANY_URLS](state, { companyURLs });
    expect(state).toEqual({
      candidates: {},
      company: {},
      companyURLs: {
        linkedin: linkedinURLs,
        societe: societeURLs,
      },
      loading: false,
      tabIndex: 0,
    });
  });

  it('should update tab index', () => {
    const state = { tabIndex: 0 };
    mutations[UPDATE_TAB_INDEX](state, { tabIndex: 1 });
    expect(state.tabIndex).toBe(1);
  });

  it('should select company URL', () => {
    const state = {
      companyURLs: {
        linkedin: linkedinURLs,
        societe: societeURLs,
      },
    };
    mutations[SELECT_COMPANY_URL](state, { source: 'linkedin', index: 0 });
    mutations[SELECT_COMPANY_URL](state, { source: 'societe', index: 1 });
    expect(state.candidates).toEqual({
      linkedin: 'https://www.linkedin.com/company/foo',
      societe: 'https://www.societe.com/societe/bar',
    });
  });

  it('should update company data', () => {
    const state = {
      loading: true,
      company: {},
    };
    const company = { name: 'foo' };
    mutations[UPDATE_COMPANY](state, { company });
    expect(state).toEqual({
      loading: false,
      company,
    });
  });

  it('should reset state', () => {
    const state = {
      query: 'foo',
      loading: true,
      error: { message: 'Whoops!' },
      companyURLs: {
        linkedin: linkedinURLs,
        societe: societeURLs,
      },
      tabIndex: 1,
      candidates: {
        linkedin: 'https://www.linkedin.com/company/foo',
        societe: 'https://www.societe.com/societe/foo',
      },
      company: {
        name: 'foo',
      },
    };
    const stateZero = initialState();
    mutations[RESET](state);
    expect(state).toEqual(stateZero);
  });

  it('should set error state', () => {
    const state = { error: null, loading: true };
    const error = { message: 'Whoops!' };
    mutations[ERROR](state, { error });
    expect(state).toEqual({ error, loading: false });
  });
});
