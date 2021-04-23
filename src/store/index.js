import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu: true,
    appActiveComponent: 0,
    portfolioActiveComponents: false,
    portfolioActiveComponent: 0,
    menuBtns: [
      {
        name: 'Обо мне',
        activeBtn: false,
        activeContext: false,
        activeContextBtn: true,
        contextBtns: []
      },
      {
        name: 'Портфолио',
        activeBtn: false,
        activeContext: false,
        activeContextBtn: false,
        contextBtns: [
          {
            name: 'Smart Orange',
            activeBtn: false
          },
          {
            name: 'Shop',
            activeBtn: false
          },
          {
            name: 'SCIENCEENJOY',
            activeBtn: false
          },
          {
            name: 'Viseven',
            activeBtn: false
          },
          {
            name: 'Blog',
            activeBtn: false
          },
          {
            name: 'Vintage',
            activeBtn: false
          }
        ]
      },
      {
        name: 'Контакты',
        activeBtn: false,
        activeContext: false,
        activeContextBtn: false,
        contextBtns: []
      }
    ],
    componets: [
      {
        name: 'About',
        text: 'Обо мне'
      },
      {
        name: 'Portfolio',
        text: 'Портфолио'
      },
      {
        name: 'Contacts',
        text: 'Контакты'
      }
    ]
  },
  mutations: {
    CLICK_SHOW_MENU (state) {
      state.showMenu = !state.showMenu
    },
    SET_APP_ACTIVE_COMPONENT (state, i) {
      state.appActiveComponent = i
    },
    SET_PORTFOLIO_ACTIVE_COMPONENTS (state, active) {
      state.portfolioActiveComponents = active
    },
    SET_PORTFOLIO_ACTIVE_COMPONENT (state, i) {
      state.portfolioActiveComponent = i
    },
    ACTIVE_MENU_BTNS (state, nameBtn) {
      for (let i = 0; i < state.menuBtns.length; i++) {
        state.menuBtns[i].activeBtn = false
        state.menuBtns[i].activeContext = false
        state.menuBtns[i].activeContextBtn = false
        if (state.menuBtns[i].contextBtns.length !== 0) {
          for (const contextBtn of state.menuBtns[i].contextBtns) {
            contextBtn.activeBtn = false
          }
        }
        if (state.menuBtns[i].name === nameBtn) {
          state.menuBtns[i].activeBtn = true
          state.menuBtns[i].activeContext = true
          state.menuBtns[i].activeContextBtn = true
          state.appActiveComponent = i
        }
      }
    },
    ACTIVE_CONTEXT_BTN (state, payload) {
      for (const menuBtn of state.menuBtns) {
        if (menuBtn.name === payload.nameBtn) {
          for (let i = 0; i < menuBtn.contextBtns.length; i++) {
            menuBtn.contextBtns[i].activeBtn = false
            if (menuBtn.contextBtns[i].name === payload.nameContextBtn) {
              menuBtn.contextBtns[i].activeBtn = !menuBtn.contextBtns[i].activeBtn
              state.portfolioActiveComponent = i
              state.portfolioActiveComponents = true
            }
          }
          break
        }
      }
    },
    SHOW_CONTEXT_MENU_BTNS (state, nameBtn) {
      for (const menuBtn of state.menuBtns) {
        if (menuBtn.name === nameBtn) {
          menuBtn.activeContext = false
          menuBtn.activeBtn = false
          if (menuBtn.contextBtns.length !== 0) {
            for (const contextBtn of menuBtn.contextBtns) {
              contextBtn.activeBtn = false
            }
          }
          break
        }
      }
      state.portfolioActiveComponents = false
    },
    ACTIVE_MENU_PORTFOLIO (state, payload) {
      for (const menuBtn in state.menuBtns) {
        if (menuBtn.nameBtn === payload.name) {
          menuBtn.activeBtn = true
          menuBtn.activeContext = true
          menuBtn.activeContextBtn = true
          menuBtn.contextBtns[payload.index].activeBtn = true
        }
      }
    }
  }
})
