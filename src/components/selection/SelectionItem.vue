<template>
  <div class="selection-item">
    <input type="radio" id="test1" name="radio-group" checked />
    <label for="test1">
      <div class="selection-item__title">Dawex - Data Exchange Technology | LinkedIn</div>
      <div class="selection-item__url">https://www.linkedin.com/company/dawex</div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'SelectionItem',
};
</script>

<style lang="scss" scoped>
[type='radio']:checked,
[type='radio']:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type='radio']:checked + label,
[type='radio']:not(:checked) + label {
  position: relative;
  padding-left: 40px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
}
[type='radio']:checked + label:before,
[type='radio']:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid $border-color;
  border-radius: 100%;
  background: $primary-background-color;
}
[type='radio']:checked + label:after,
[type='radio']:not(:checked) + label:after {
  content: '';
  width: 12px;
  height: 12px;
  background: $input-color;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type='radio']:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type='radio']:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.selection-item {
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 10px;
  border: 1px solid $border-color;
  border-radius: 4px;
  background-color: $primary-background-color;
  box-shadow: 0 2px 4px rgba(126, 142, 177, 0.12);
  margin-bottom: 10px;
  cursor: pointer;
}

.selection-item__title {
  margin-top: -10px;
  font-weight: 500;
}

.selection-item__url {
  font-size: rem(14px);
  font-weight: 300;
}
</style>
