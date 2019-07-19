<template>
  <section class="result-details">
    <ResultDetailsRow :label="'SIREN'" :value="company.siren" />
    <ResultDetailsRow :label="'SIRET'" :value="company.siret" />
    <ResultDetailsRow :label="'Number of employees'" :value="company.employees" />
    <ResultDetailsRow :label="'Employees on Linkedin'" :value="company.employeesOnLinkedin" />
    <ResultDetailsRow :label="'Share Capital'" :value="company.shareCapital" />
  </section>
</template>

<script>
import ResultDetailsRow from './ResultDetailsRow';

export default {
  name: 'ResultDetails',
  components: {
    ResultDetailsRow,
  },
  props: {
    company: Object,
  },
};
</script>

<style lang="scss" scoped>
.result-details {
  padding-top: 30px;
}
</style>
