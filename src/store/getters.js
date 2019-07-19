import isEmpty from 'lodash/isEmpty';

export default {
  linkedinURLs(state) {
    const { companyURLs } = state;
    return (companyURLs.linkedin || []).slice(0, 5);
  },

  societeURLs(state) {
    const { companyURLs } = state;
    return (companyURLs.societe || []).slice(0, 5);
  },

  isCandidatesEmpty(state) {
    const { candidates } = state;
    return isEmpty(candidates);
  },
};
