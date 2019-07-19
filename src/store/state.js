export const initialState = () => ({
  query: '',
  loading: false,
  error: null,
  companyURLs: {},
  candidates: {},
  company: {},
});

export default {
  ...initialState(),
};
