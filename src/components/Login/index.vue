<template>
  <Form ref="form" @submit.prevent="handleSubmit">
    <CustomInput v-model="formData.email" name="email" :rules="emailRules" />
    <CustomInput
      v-model="formData.password"
      name="password"
      :rules="passwordRules"
    />
    <Button type="bsubmit">Click me</Button>
  </Form>
</template>

<script>
import Form from '../shared/form';
import CustomInput from '../shared/CustomInput';
import Button from '../shared/Button';
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from '../../utils/validationRules';

export default {
  name: 'Login',
  components: {
    Form,
    CustomInput,
    Button,
  },
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  methods: {
    handleSubmit() {
      const isFormValid = this.$refs.form.validate();

      if (isFormValid) {
        console.log(this.formData);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
