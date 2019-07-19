<template>
  <Card :title="'Company information'" :button-title="'New search'" @submit="next()">
    <ResultMain />
    <ResultDetails />
  </Card>
</template>

<script>
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
  methods: {
    next() {
      this.$router.push({ name: 'CompanySearch' });
    },
  },
};
</script>
