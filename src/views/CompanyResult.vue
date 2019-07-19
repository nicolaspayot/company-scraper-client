<template>
  <Card :title="'Company information'" :button-title="'New search'" @submit="newSearch()">
    <ResultMain :company="company" />
    <ResultDetails :company="company" />
  </Card>
</template>

<script>
import { mapState } from 'vuex';
import { RESET } from '../store/mutations';
import Card from '../components/Card.vue';
import ResultMain from '../components/result/ResultMain.vue';
import ResultDetails from '../components/result/ResultDetails.vue';

export default {
  name: 'CompanySelection',
  components: {
    Card,
    ResultMain,
    ResultDetails,
  },
  computed: {
    ...mapState(['company']),
  },
  methods: {
    newSearch() {
      this.$store.commit(RESET);
      this.$router.push({ name: 'CompanySearch' });
    },
  },
};
</script>
