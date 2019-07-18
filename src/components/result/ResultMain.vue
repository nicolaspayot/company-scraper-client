<template>
  <div class="result-main">
    <img
      class="result-main__logo"
      src="https://media.licdn.com/dms/image/C510BAQHjjsABY6_X7A/company-logo_400_400/0?e=1571270400&v=beta&t=tKLXXADWvItfg2GY5nferIBXCIRFE_yqMSNGB5iKSBQ"
    />
    <div class="result-main-info">
      <h2 class="info__name">Dawex - Data Exchange Technology</h2>
      <h3 class="info__id">(DAWEX SYSTEMS)</h3>
      <div class="info__industry">Information Technology and Services</div>
      <div class="info-adress">
        <i class="fas fa-map-marker-alt"></i>
        <span class="info-adress__label">20 PL LOUIS PRADEL 69001 LYON</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultMain',
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
