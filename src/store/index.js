import Vuex from 'vuex';
import Vue from 'vue';
import authModule from './modules/auth';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ['auth.token'],
});

const store = new Vuex.Store({
  modules: {
    auth: authModule,
  },
  plugins: [dataState],
});

export default store;
