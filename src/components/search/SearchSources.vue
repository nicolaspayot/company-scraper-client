<template>
  <div class="search-filters">
    <div class="filters__label">
      Select the source·s you want to scrap information from:
    </div>
    <div class="filters-boxes">
      <div class="filters-boxes__checkbox">
        <input type="checkbox" checked="true" />
        <label>linkedin.com</label>
      </div>
      <div class="filters-boxes__checkbox ml-10">
        <input type="checkbox" checked="true" />
        <label>societe.com</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchSources',
};
</script>

<style lang="scss" scoped>
.search-filters {
  font-size: rem(14px);
}

.filters__label {
  margin-top: 30px;
  margin-bottom: 10px;
}

.filters-boxes {
  display: flex;
}

.filters-boxes__checkbox {
  display: flex;
  align-items: center;
  font-weight: 500;

  &.ml-10 {
    margin-left: 10px;
  }
}
</style>
