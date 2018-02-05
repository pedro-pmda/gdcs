import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Tiempo from '@/components/Tiempo'
import BoardScores from '@/components/BoardScores'
import Dictionary from '@/components/Dictionary'
import Game1 from '@/components/Game1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/tiempo',
      name: 'Tiempo',
      component: Tiempo
    },
    {
      path: '/game1',
      name: 'Game1',
      component: Game1
    },
    {
      path: '/boardscores',
      name: 'BoardScores',
      component: BoardScores
    },
    {
      path: '/dictionary',
      name: 'Dictionary',
      component: Dictionary
    }
  ]
})
