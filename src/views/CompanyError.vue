<template>
  <Card :title="'Whoops'" :button-title="'New search'" @submit="next()">
    <div class="error">
      <h2 v-if="error.statusCode === 404">
        <i class="fas fa-search"></i>
        <span class="error__txt">Sorry, we couldn't find anything.</span>
      </h2>
      <h2 v-else>
        <i class="fas fa-exclamation-triangle"></i>
        <span class="error__txt">Sorry, something went wrong.</span>
      </h2>
    </div>
  </Card>
</template>

<script>
import { mapState } from 'vuex';
import Card from '../components/Card.vue';

export default {
  name: 'Error',
  components: {
    Card,
  },
  computed: {
    ...mapState(['error']),
  },
  methods: {
    next() {
      this.$router.push({ name: 'CompanySearch' });
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;
}

.error__txt {
  margin-left: 10px;
}
</style>
