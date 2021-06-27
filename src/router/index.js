import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Component from '@/components/Component.vue'
import Theme from '@/components/Theme.vue'
import Introduce from '@/components/Introduce.vue'
import Brief from '@/components/component/pages/Brief.vue'
import Aside from '@/components/component/Aside.vue'
import Install from '@/components/component/pages/Install.vue'
import Button from '@/components/component/pages/Button.vue'
import Input from '@/components/component/pages/Input.vue'
import Form from '@/components/component/pages/Form.vue'
import Notice from '@/components/component/pages/Notice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/introduce',
    children: [
      {
        path: '/component',
        name: 'Component',
        component: Component,
        redirect: '/aside',
        children: [
          {
            path: '/aside',
            name: 'Aside',
            component: Aside,
            redirect: '/brief',
            children: [
              {
                path: '/brief',
                name: 'Brief',
                component: Brief,
              },
              {
                path: '/install',
                name: 'Install',
                component: Install
              },
              {
                path: '/button',
                name: 'Button',
                component: Button,
              },
              {
                path: '/input',
                name: 'Input',
                component: Input
              },
              {
                path: '/form',
                name: 'Form',
                component: Form,
              },
              {
                path: '/notice',
                name: 'Notice',
                component: Notice
              },
            ]
          }
        ]
      },
      {
        path: '/introduce',
        name: 'Introduce',
        component: Introduce,
      },
      {
        path: '/theme',
        name: 'Theme',
        component: Theme
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
