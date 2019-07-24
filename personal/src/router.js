import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import About from './views/About.vue'
import Art from './views/Art.vue'
import Games from './views/Games.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/art',
      name: 'art',
      component: Art
    },
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    { path: '/404NotFound', component: NotFound },  
    { path: '*', redirect: '/404NotFound' },  
  ]
})
