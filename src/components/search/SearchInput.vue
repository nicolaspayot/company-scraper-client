<template>
  <div class="search-input">
    <i class="fas fa-search"></i>
    <input
      class="search-input__input"
      ref="searchInput"
      type="search"
      placeholder="Company name"
      :value="value"
      @input="onInput($event)"
      @keydown.enter="onEnter()"
    />
    <div class="search-input__info">
      First, we will return lists of the company's pages URLs from <strong>linkedin.com</strong> and
      <strong>societe.com</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: String,
  },
  methods: {
    onInput($event) {
      this.$emit('input', $event.target.value);
    },

    onEnter() {
      this.$emit('enter');
    },
  },
  mounted() {
    this.$refs.searchInput.focus();
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  display: inline-block;
  position: relative;
  width: 100%;
}

.fa-search {
  position: absolute;
  top: 15px;
  left: 15px;
  color: $primary-text-color;
}

.search-input__input {
  // Safari does not apply style to search field 🤷‍
  -webkit-appearance: textfield;
  width: 100%;
  font-weight: 500;
  display: block;
  border: 1px solid $border-color;
  background-color: $primary-background-color;
  font-size: rem(18px);
  line-height: 1.5;
  height: 45px;
  padding: 8px 16px;
  padding-left: 40px;
  border-radius: 5px;
  box-sizing: border-box;
  color: $primary-text-color;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.5;
  }
}

.search-input__info {
  font-size: rem(14px);
  margin-top: 10px;
}
</style>
