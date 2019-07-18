<template>
  <article class="card">
    <h1 class="card__title">{{ title }}</h1>
    <section class="card-content">
      <slot />
    </section>
    <div class="card-action">
      <button class="card-action__button" @click="onSubmit()">{{ buttonLabel }}</button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    buttonLabel: String,
  },
  methods: {
    onSubmit() {
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
  padding: 25px;
}

.card__title {
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
  margin-top: 50px;
}

.card-action__button {
  background-color: $input-color;
  color: $button-text-color;
  border-radius: 4px;
  border: 1px solid $input-color;
  height: 40px;
  width: 200px;
  font-weight: bold;
  font-size: rem(14px);
  line-height: 16px;
  margin-bottom: 20px;
}
</style>
