<template>
  <Card :title="'Select company URL·s'" :button-label="'Scrap data'" @submit="next()">
    <SelectionTabs />
    <SelectionItem />
  </Card>
</template>

<script>
import Card from '../components/Card.vue';
import SelectionTabs from '../components/selection/SelectionTabs.vue';
import SelectionItem from '../components/selection/SelectionItem.vue';

export default {
  name: 'CompanySelection',
  components: {
    Card,
    SelectionTabs,
    SelectionItem,
  },
  methods: {
    next() {
      this.$router.push({ name: 'CompanyResult' });
    },
  },
};
</script>
