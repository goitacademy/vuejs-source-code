<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Информация о владельце:</h2>
    <p class="apartments-owner__info">{{ owner.name }}</p>
    <p class="apartments-owner__info">tel: {{ owner.phone }}</p>
    <p class="apartments-owner__info">email: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: 'AprtmentsOwner',
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.apartments-owner {
  padding: 20px;
  background: $card-bg;
  font-weight: 400;

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__info {
    margin-top: 6px;
  }
}
</style>
