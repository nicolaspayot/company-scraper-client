<template>
  <article class="card">
    <header class="card-header">
      <router-link v-if="backLinkVisible" :to="{ name: 'CompanySearch' }" class="card-header__link">
        <i class="fas fa-chevron-left"></i>New search
      </router-link>
      <h1 class="card-header__title">{{ title }}</h1>
    </header>
    <section class="card-content">
      <slot />
    </section>
    <div class="card-action">
      <button class="card-action__button" v-if="!loading" :disabled="buttonDisabled" @click="onSubmit()">
        {{ buttonTitle }}
      </button>
      <img class="card-action__loader" v-else src="~@/assets/img/loader.svg" />
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Card',
  props: {
    backLinkVisible: Boolean,
    title: String,
    buttonTitle: String,
    buttonDisabled: Boolean,
  },
  computed: {
    ...mapState(['loading']),
  },
  methods: {
    onSubmit() {
      if (this.buttonDisabled) {
        return;
      }
      this.$emit('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  background-color: $primary-background-color;
  background-clip: border-box;
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), -1px 0 15px rgba(0, 0, 0, 0.07) !important;
  padding: 20px;

  @include breakpoint(medium) {
    padding: 25px;
  }
}

.card-header {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}

.card-header__link {
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  left: 0;
  margin-top: -35px;
  color: $input-color;
  font-weight: 500;
  line-height: 1.8;

  .fa-chevron-left {
    margin-right: 10px;
  }

  @include breakpoint(medium) {
    margin-top: 0;
  }
}

.card-header__title {
  font-size: rem(26px);
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
}

.card-content {
  color: $primary-text-color;
}

.card-action {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  @include breakpoint(medium) {
    margin-top: 50px;
    padding-bottom: 20px;
  }
}

.card-action__button {
  cursor: pointer;
  background-color: $input-color;
  color: $button-text-color;
  border-radius: 4px;
  border: 1px solid $input-color;
  height: 40px;
  width: 200px;
  font-weight: bold;
  font-size: rem(14px);
  line-height: 16px;

  &:hover:not([disabled]) {
    background-color: $button-hover-color;
    border-color: $button-hover-color;
  }

  &:focus:not([disabled]) {
    outline: none;
  }

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
