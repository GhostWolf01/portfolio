import { createRouter, createWebHistory } from 'vue-router'
import Content from '../views/Content.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio/Portfolio.vue'
import Contacts from '../views/Contacts.vue'
import PortfolioItemActive from '../views/Portfolio/Item/PortfolioItemActive.vue'
import NotFound from '../views/404.vue'
import Main from '../views/Main.vue'

export default createRouter({
  history: createWebHistory('/Portfolio/'),
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
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
