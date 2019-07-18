<template>
  <section class="result-details">
    <div class="details__row">
      <span class="details__row-label"><i class="fas fa-thumbtack"></i> SIREN</span>
      <span class="details__row-value">810 307 207</span>
    </div>
    <div class="details__row">
      <span class="details__row-label"><i class="fas fa-thumbtack"></i> SIRET</span>
      <span class="details__row-value">81030720700029</span>
    </div>
    <div class="details__row">
      <span class="details__row-label"><i class="fas fa-thumbtack"></i> Number of employees</span>
      <span class="details__row-value">3 to 5</span>
    </div>
    <div class="details__row">
      <span class="details__row-label"><i class="fas fa-thumbtack"></i> Employees on Linkedin</span>
      <span class="details__row-value">34</span>
    </div>
    <div class="details__row">
      <span class="details__row-label"><i class="fas fa-thumbtack"></i> Share Capital</span>
      <span class="details__row-value">181 088,00 €</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResultDetails',
};
</script>

<style lang="scss" scoped>
.result-details {
  padding-top: 30px;
}

.details__row {
  margin-bottom: 5px;
}

.details__row-label {
  display: inline-block;
  width: 250px;
}

.details__row-value {
  font-weight: 500;
}

.fa-thumbtack {
  margin-right: 10px;
}
</style>
