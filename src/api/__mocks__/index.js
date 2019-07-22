export default {
  post: jest.fn(route => {
    if (route === '/companies/query') {
      return Promise.resolve({ data: {} });
    }

    if (route === '/companies/urls') {
      return Promise.resolve({ data: {} });
    }
  }),
};
