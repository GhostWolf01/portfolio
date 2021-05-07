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
        activeContextBtn: false,
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
    ACTIVE_MENU_BTNS (state, menuBtns) {
      state.menuBtns = menuBtns
    },
    SHOW_CONTEXT_MENU_BTNS (state, nameUrl) {
      for (const menuBtn of state.menuBtns) {
        if (menuBtn.nameUrl === nameUrl) {
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
    }
  },
  actions: {
    clickShowMenu ({ commit }) {
      commit('CLICK_SHOW_MENU')
    },
    activeMenuBtns ({ dispatch, getters, commit }, activeMenuBtn) {
      dispatch('portfolio/setPortfolioActiveComponents', false, { root: true })
      const menuBtns = getters.getMenuBtns
      for (let i = 0; i < menuBtns.length; i++) {
        menuBtns[i].activeBtn = false
        menuBtns[i].activeContext = false
        menuBtns[i].activeContextBtn = false
        if (menuBtns[i].contextBtns.length !== 0) {
          for (const contextBtn of menuBtns[i].contextBtns) {
            contextBtn.activeBtn = false
            if (contextBtn.nameUrl === activeMenuBtn.nameUrlContextBtn) {
              contextBtn.activeBtn = true
              dispatch('portfolio/setPortfolioActiveComponents', true, { root: true })
            }
          }
        }
        if (menuBtns[i].nameUrl === activeMenuBtn.nameUrl) {
          menuBtns[i].activeBtn = true
          menuBtns[i].activeContext = true
          menuBtns[i].activeContextBtn = true
          commit('SET_APP_ACTIVE_COMPONENT', i)
        }
      }
      commit('ACTIVE_MENU_BTNS', menuBtns)
    },
    showContextMenuBtns ({ dispatch, commit }, nameUrl) {
      commit('SHOW_CONTEXT_MENU_BTNS', nameUrl)
      dispatch('portfolio/setPortfolioActiveComponents', false, { root: true })
    }
  }
}
