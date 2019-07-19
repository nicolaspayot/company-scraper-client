<template>
  <div class="tabs">
    <div class="tabs__label">
      Select the URLs that you think match best with your search (1 per source)
    </div>
    <nav class="tabs-urls">
      <a class="tabs-urls__tab" @click="onClick(0)">
        <div class="tab__title">linkedin.com</div>
        <div class="tab__state" :class="{ 'tab__state--selected': tabIndex === 0 }"></div>
      </a>
      <a class="tabs-urls__tab" @click="onClick(1)">
        <div class="tab__title">societe.com</div>
        <div class="tab__state" :class="{ 'tab__state--selected': tabIndex === 1 }"></div>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SelectionTabs',
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    onClick(tabIndex) {
      this.tabIndex = tabIndex;
      this.$emit('change', tabIndex);
    },
  },
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

  &:hover > .tab__state {
    &:not(.tab__state--selected) {
      background: $border-color;
    }
  }
}

.tab__title {
  font-weight: 500;
  padding-bottom: 10px;
}

.tab__state {
  height: 5px;

  &.tab__state--selected {
    background: $input-color;
  }
}
</style>
