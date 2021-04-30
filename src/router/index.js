import VueRouter from 'vue-router'
import Main from '../pages/Main.vue'
import Content from '../pages/Content.vue'
import About from '../pages/About.vue'
import Portfolio from '../pages/Portfolio.vue'
import Contacts from '../pages/Contacts.vue'
import PortfolioItemActive from '../components/Portfolio/Item/PortfolioItemActive.vue'
import NotFound from '../pages/NotFound404.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '',
          name: 'content',
          component: Content,
          children: [
            {
              path: 'about',
              name: 'about',
              component: About
            },
            {
              path: 'portfolio',
              name: 'portfolio',
              component: Portfolio,
              children: [
                {
                  path: ':name',
                  name: 'PortfolioItem',
                  component: PortfolioItemActive
                }
              ]
            },
            {
              path: 'contacts',
              name: 'contacts',
              component: Contacts
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
