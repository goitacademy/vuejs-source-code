<template>
  <div id="app">
    <Notifications />
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import Notifications from './components/notifications';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    Notifications,
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
  },
  mounted() {
    console.log(this.isLoggedIn);
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>
