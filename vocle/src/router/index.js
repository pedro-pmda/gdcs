import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/Menu'
import Tiempo from '@/components/Tiempo'
import BoardScores from '@/components/BoardScores'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/tiempo',
      name: 'Tiempo',
      component: Tiempo
    },
    {
      path: '/boardscores',
      name: 'BoardScores',
      component: BoardScores
    }
  ]
})
