<template>
  <div class="result-main">
    <img class="result-main__logo" v-if="company.logoURL" :src="company.logoURL" />
    <img class="result-main__logo" v-else src="~@/assets/img/building.svg" />
    <div class="result-main-info">
      <h2 class="info__name" v-if="company.publicName">{{ company.publicName }}</h2>
      <h3 class="info__id" v-if="company.name">{{ company.name }}</h3>
      <div class="info__industry" v-if="company.industry">{{ company.industry }}</div>
      <div class="info-adress" v-if="company.address">
        <i class="fas fa-map-marker-alt"></i>
        <span class="info-adress__label">{{ company.address }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultMain',
  props: {
    company: Object,
  },
};
</script>

<style lang="scss" scoped>
.result-main {
  display: flex;
}

.result-main__logo {
  border-radius: 2px;
  border-color: #fff;
  border-style: solid;
  box-sizing: border-box;
  display: block;
  border-width: 4px;
  flex-shrink: 0;
  height: 120px;
  width: 120px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
}

.result-main-info {
  width: 100%;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}

.info__name {
  margin: 0;
  margin-bottom: 5px;
}

.info__id {
  margin: 0;
  font-size: rem(16px);
  margin-bottom: 5px;
}

.info__industry {
  margin-bottom: 15px;
}

.info-adress__label {
  margin-left: 10px;
}
</style>
