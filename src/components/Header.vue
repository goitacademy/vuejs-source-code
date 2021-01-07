<template>
  <header class="header">
    <Container>
      <router-link to="/">
        <Logo />
      </router-link>
    </Container>
  </header>
</template>

<script>
import Container from './shared/Container';
import Logo from './Logo';

export default {
  name: 'Header',
  components: {
    Container,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
  z-index: 100;
}
</style>
