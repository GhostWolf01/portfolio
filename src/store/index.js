import Vue from 'vue'
import Vuex from 'vuex'
import portfolio from './modules/portfolio'
import menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    portfolio,
    menu
  }
})
