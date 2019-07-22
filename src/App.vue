<template>
  <section id="app" class="container">
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col {
  max-width: 95%;
  flex: 0 0 95%;

  @include breakpoint(medium) {
    max-width: 60%;
    flex: 0 0 60%;
  }
}
</style>
