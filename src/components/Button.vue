<template>
  <button v-on="$listeners" v-bind:type="type">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'button'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>