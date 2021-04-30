export default {
  namespaced: true,
  state: {
    appActiveComponent: 0,
    showMenu: true,
    menuBtns: [
      {
        name: 'Обо мне',
        nameUrl: 'about',
        activeBtn: false,
        activeContext: false,
        activeContextBtn: true,
        contextBtns: []
      },
      {
        name: 'Портфолио',
        nameUrl: 'portfolio',
        activeBtn: false,
        activeContext: false,
        activeContextBtn: false,
        contextBtns: [
          {
            name: 'Smart Orange',
            nameUrl: 'smart_orange',
            activeBtn: false
          },
          {
            name: 'Shop',
            nameUrl: 'shop',
            activeBtn: false
          },
          {
            name: 'SCIENCEENJOY',
            nameUrl: 'scienceenjoy',
            activeBtn: false
          },
          {
            name: 'Viseven',
            nameUrl: 'viseven',
            activeBtn: false
          },
          {
            name: 'Blog',
            nameUrl: 'blog',
            activeBtn: false
          },
          {
            name: 'Vintage',
            nameUrl: 'vintage',
            activeBtn: false
          }
        ]
      },
      {
        name: 'Контакты',
        nameUrl: 'contacts',
        activeBtn: false,
        activeContext: false,
        activeContextBtn: false,
        contextBtns: []
      }
    ]
  },
  getters: {
    getAppActiveComponent (state) {
      return state.appActiveComponent
    },
    getNameTitle (state) {
      return state.menuBtns[state.appActiveComponent].name
    },
    getShowMenu (state) {
      return state.showMenu
    },
    getMenuBtns (state) {
      return state.menuBtns
    }
  },
  mutations: {
    SET_APP_ACTIVE_COMPONENT (state, i) {
      state.appActiveComponent = i
    },
    CLICK_SHOW_MENU (state) {
      state.showMenu = !state.showMenu
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
      state.menuBtns = payload
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
    },
    ACTIVE_MENU_PORTFOLIO (state, payload) {
      for (const menuBtn of state.menuBtns) {
        if (menuBtn.nameBtn === payload.name) {
          menuBtn.activeBtn = true
          menuBtn.activeContext = true
          menuBtn.activeContextBtn = true
          menuBtn.contextBtns[payload.index].activeBtn = true
          break
        }
      }
    }
  },
  actions: {
    setAppActiveComponent ({ commit }, i) {
      commit('SET_APP_ACTIVE_COMPONENT', i)
    },
    clickShowMenu ({ commit }) {
      commit('CLICK_SHOW_MENU')
    },
    activeMenuBtns ({ dispatch, commit }, nameBtn) {
      dispatch('portfolio/setPortfolioActiveComponents', false, { root: true })
      commit('ACTIVE_MENU_BTNS', nameBtn)
    },
    activeContextBtn ({ dispatch, commit, getters }, payload) {
      const menuBtns = getters.getMenuBtns
      for (const menuBtn of menuBtns) {
        if (menuBtn.name === payload.nameBtn) {
          for (let i = 0; i < menuBtn.contextBtns.length; i++) {
            menuBtn.contextBtns[i].activeBtn = false
            if (menuBtn.contextBtns[i].name === payload.nameContextBtn) {
              menuBtn.contextBtns[i].activeBtn = !menuBtn.contextBtns[i].activeBtn
              dispatch('portfolio/setPortfolioActiveComponent', i, { root: true })
              dispatch('portfolio/setPortfolioActiveComponents', true, { root: true })
            }
          }
          break
        }
      }
      commit('ACTIVE_CONTEXT_BTN', menuBtns)
    },
    showContextMenuBtns ({ dispatch, commit }, nameBtn) {
      commit('SHOW_CONTEXT_MENU_BTNS', nameBtn)
      dispatch('portfolio/setPortfolioActiveComponents', false, { root: true })
    },
    activeMenuPortfolio ({ commit }, payload) {
      commit('ACTIVE_MENU_PORTFOLIO', payload)
    }
  }
}
