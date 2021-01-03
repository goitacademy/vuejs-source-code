<template>
  <div class="wrapper-input">
    <input
      v-on="listeners"
      v-bind="$attrs"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      isValid: true,
      error: '',
    };
  },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      };
    },
  },
  watch: {
    value(value) {
      this.validate(value);
      console.log(value);
    },
  },
  methods: {
    validate() {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(this.value);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }

        return hasPassed;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.wrapper-input {
  position: relative;
  display: inline-flex;
}

.custom-input {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
