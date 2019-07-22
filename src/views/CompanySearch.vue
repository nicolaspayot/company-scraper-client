<template>
  <Card :title="'Enter a company name'" :buttonTitle="'Search'" :buttonDisabled="!company" @submit="searchCompanyURLs">
    <SearchInput v-model="company" @enter="searchCompanyURLs" />
  </Card>
</template>

<script>
import { mapState } from 'vuex';
import { SEARCH_COMPANY_URLS } from '../store/actions';
import Card from '../components/Card.vue';
import SearchInput from '../components/search/SearchInput.vue';

export default {
  name: 'CompanySearch',
  components: {
    Card,
    SearchInput,
  },
  data() {
    return {
      company: this.query,
    };
  },
  computed: {
    ...mapState(['query', 'loading']),
  },
  methods: {
    async searchCompanyURLs() {
      if (!this.company || this.loading) {
        return;
      }
      this.$store.dispatch(SEARCH_COMPANY_URLS, {
        query: this.company.trim(),
      });
    },
  },
  watch: {
    query: {
      immediate: true,
      handler(query) {
        this.company = query;
      },
    },
  },
};
</script>
