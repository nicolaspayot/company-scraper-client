<template>
  <Card :title="'Enter a company name'" :button-label="'Search'" @submit="next()">
    <SearchInput />
    <SearchSources />
  </Card>
</template>

<script>
import Card from '../components/Card.vue';
import SearchInput from '../components/search/SearchInput.vue';
import SearchSources from '../components/search/SearchSources.vue';

export default {
  name: 'CompanySearch',
  components: {
    Card,
    SearchInput,
    SearchSources,
  },
  methods: {
    next() {
      this.$router.push({ name: 'CompanySelection' });
    },
  },
};
</script>
