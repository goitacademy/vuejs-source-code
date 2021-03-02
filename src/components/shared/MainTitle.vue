<template>
  <component :is="tagName" class="main-title">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'MainTitle',
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    tagName() {
      return `h${this.level}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.5em;
}
</style>
