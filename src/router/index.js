import VueRouter from 'vue-router'
import Content from '../pages/Content.vue'
import About from '../pages/About.vue'
import Portfolio from '../pages/Portfolio.vue'
import Contacts from '../pages/Contacts.vue'
import PortfolioItemActive from '../components/Portfolio/Item/PortfolioItemActive.vue'
import NotFound from '../pages/404.vue'
import Main from '../pages/Main.vue'

export default new VueRouter({
  mode: 'history',
  base: '/Portfolio/',
  routes: [
    {
      path: '/',
      name: 'Main',
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
