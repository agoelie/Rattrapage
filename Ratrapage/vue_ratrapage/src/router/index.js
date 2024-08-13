import { createRouter, createWebHistory } from 'vue-router'

import HomeTodo from '@/views/HomeTodo.vue'
import SigiN from '@/components/SigiN.vue'
 import SignuP from '@/components/SignuP.vue'
import  NavBar from '@/components/NavBar.vue'
import CreatTodo from '@/components/CreatTodo.vue'
import UpdateTodo from '@/views/UpdateTodo.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path:'/',
      name:HomeTodo,
      component: HomeTodo
    },
    {
      path:'/signin',
      name:SigiN,
      component: SigiN
    },
    {
      path:'/signup',
      name:SignuP,
      component: SignuP
    },
    {
      path:'/navbar',
      name:NavBar,
      component: NavBar
    },

    {
      path:'/creatTodo',
      name:CreatTodo,
      component: CreatTodo
    },

    {
      path:'/update',
      name:UpdateTodo,
      component: UpdateTodo
    },
    


    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
