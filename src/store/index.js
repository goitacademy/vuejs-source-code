import Vuex from 'vuex';
import Vue from 'vue';
import { loginUser, registerUser } from '../services/auth.service';

Vue.use(Vuex);

const initialState = {
  user: null,
  token: '',
};

const store = new Vuex.Store({
  state: { ...initialState },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);
      const { user, token } = data;

      commit('setUserData', user);
      commit('setToken', token);
    },
    async registration({ commit }, payload) {
      const { data } = await registerUser(payload);
      const { user, token } = data;

      commit('setUserData', user);
      commit('setToken', token);
    },
  },
});

export default store;
