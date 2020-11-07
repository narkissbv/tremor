import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: null,
    budget: null
  },

  getters: {
    getName (state) {
      return state.name
    },
    getBudget (state) {
      return state.budget
    }
  },

  mutations: {
    setName (state, name) {
      state.name = name
    },
    setBudget (state, budget) {
      state.budget = budget
    }
  },
})