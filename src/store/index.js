import { createStore } from 'vuex'
import portfolio from './modules/portfolio'
import menu from './modules/menu'

export default createStore({
  modules: {
    portfolio,
    menu
  }
})
