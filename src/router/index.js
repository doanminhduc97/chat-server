import Vue from 'vue'
import Router from 'vue-router'
import ChatApp from '@/components/ChatApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatApp',
      component: ChatApp
    }
  ]
})
