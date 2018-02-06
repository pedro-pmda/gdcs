import Vue from 'vue'
import Router from 'vue-router'
import OnBoarding from '@/components/OnBoarding'
import Menu from '@/components/Menu'
import BoardScores from '@/components/BoardScores'
import Dictionary from '@/components/Dictionary'
import Game1 from '@/components/Game1'
import Game2 from '@/components/Game2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OnBoarding',
      component: OnBoarding
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/game1',
      name: 'Game1',
      component: Game1
    },
    {
      path: '/game2',
      name: 'Game2',
      component: Game2
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
