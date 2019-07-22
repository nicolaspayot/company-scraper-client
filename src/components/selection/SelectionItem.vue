<template>
  <div class="selection-item">
    <input type="radio" :id="id" :name="`${source}`" @change="onChange()" />
    <label :for="id">
      <div class="selection-item__title">{{ url.title }}</div>
      <div class="selection-item__url">{{ url.link }}</div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'SelectionItem',
  props: {
    index: Number,
    source: String,
    url: Object,
  },
  computed: {
    id() {
      return `${this.source}-${this.index}`;
    },
  },
  methods: {
    onChange() {
      this.$emit('checked', { source: this.source, index: this.index });
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  width: 90%;
}

[type='radio']:checked,
[type='radio']:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type='radio']:checked + label,
[type='radio']:not(:checked) + label {
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;

  @include breakpoint(medium) {
    padding-left: 40px;
  }
}
[type='radio']:checked + label:before,
[type='radio']:not(:checked) + label:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -10px;
  width: 18px;
  height: 18px;
  border: 1px solid $border-color;
  border-radius: 100%;
  background: $primary-background-color;

  @include breakpoint(medium) {
    margin-left: 0;
  }
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
  margin-left: -10px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;

  @include breakpoint(medium) {
    margin-left: 0;
  }
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

%selection-item-row {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.selection-item__title {
  @extend %selection-item-row;
  margin-top: -10px;
  font-weight: 500;
}

.selection-item__url {
  @extend %selection-item-row;
  font-size: rem(14px);
  font-weight: 300;
}
</style>
