export const initialState = () => ({
  query: '',
  loading: false,
  error: null,
  companyURLs: {},
  tabIndex: 0,
  candidates: {},
  company: {},
});

export default {
  ...initialState(),
};
