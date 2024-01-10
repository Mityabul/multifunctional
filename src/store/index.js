import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    drawer: true,
    loading: false,
    role: localStorage.getItem('role'),
    name: localStorage.getItem('name'),
    roleName: localStorage.getItem('roleName'),
  },
  getters: {
    drawer (state) {
      return state.drawer;
    },
    loading (state) {
      return state.loading;
    },
  },
  mutations: {
    setDrawer (state, payload) {
      state.drawer = payload;
    },
    setLoading (state, payload) {
      state.loading = payload;
    },
  },
});
