<template>
  <div class="tabs">
    <div class="tabs__label">
      Select the URL·s that you think match best with your search (1 per source)
    </div>
    <div class="tabs-urls">
      <div class="tabs-urls__tab">
        <div class="tab__title">linkedin.com</div>
        <div class="tab__state tab__state--checked"></div>
      </div>
      <div class="tabs-urls__tab">
        <div class="tab__title">societe.com</div>
        <div class="tab__state"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectionTabs',
};
</script>

<style lang="scss" scoped>
.tabs__label {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: rem(14px);
}

.tabs-urls {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.tabs-urls__tab {
  margin-right: 20px;
}

.tab__title {
  font-weight: 500;
  padding-bottom: 10px;
}

.tab__state {
  height: 5px;

  &.tab__state--checked {
    background: $input-color;
  }
}
</style>
