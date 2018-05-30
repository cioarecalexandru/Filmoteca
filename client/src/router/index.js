import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Filme from '@/components/Filme'
import FilmeAdd from '@/components/FilmeAdd'
import Topuri from '@/components/Topuri'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/filme',
      name: 'filme',
      component: Filme
    },
    {
      path: '/filme/add',
      name: 'filme-add',
      component: FilmeAdd
    },
    {
      path: '/topuri',
      name: 'top',
      component: Topuri
    }
  ]
})
