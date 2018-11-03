import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js';
import * as actions from './actions.js';
import * as mutations from './mutations.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableSize: 3,
    fontSize: 20,
    dataType: 'numbers',
    zoom: 1,
    startedTimer: false,
    reload: false
  },
  getters,
  actions,
  mutations
})
