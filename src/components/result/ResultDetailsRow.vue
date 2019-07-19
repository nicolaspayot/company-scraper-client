<template>
  <div class="details__row">
    <span class="details__row-label"><i class="fas fa-thumbtack"></i> {{ label }}</span>
    <span class="details__row-value">{{ value || 'N/A' }}</span>
  </div>
</template>

<script>
export default {
  name: 'ResultDetailsRow',
  props: {
    label: String,
    value: String,
  },
};
</script>

<style lang="scss" scoped>
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
