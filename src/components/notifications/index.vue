<template>
  <notifications classes="vue-notification" />
</template>

<script>
export default {
  name: 'Notification',
};
</script>

<style lang="scss" scoped>
::v-deep .vue-notification {
  padding: 10px;
  margin: 0 5px 5px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  .notification-title {
    font-size: 16px;
    line-height: 1.3;
  }

  .notification-content {
    font-size: 14px;
    margin-top: 5px;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
}
</style>
