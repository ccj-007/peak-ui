import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Library from '@/components/Library.vue'
import Theme from '@/components/Theme.vue'
import Introduce from '@/components/Introduce.vue'
import Brief from '@/components/component/pages/Brief.vue'
import Aside from '@/components/component/Aside.vue'
import Install from '@/components/component/pages/Install.vue'
import Button from '@/components/component/pages/Button.vue'
import Input from '@/components/component/pages/Input.vue'
import Form from '@/components/component/pages/Form.vue'
import Notice from '@/components/component/pages/Notice.vue'
import Dialog from '@/components/component/pages/Dialog.vue'
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
        path: '/library',
        name: 'Library',
        component: Library,
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
                meta: {
                  title: '简介'
                }
              },
              {
                path: '/install',
                name: 'Install',
                component: Install,
                meta: {
                  title: '安装'
                }
              },
              {
                path: '/button',
                name: 'Button',
                component: Button,
                meta: {
                  title: '按钮',
                  english: 'Button'
                }
              },
              {
                path: '/input',
                name: 'Input',
                component: Input,
                meta: {
                  title: '输入框',
                  english: 'Input'
                }
              },
              {
                path: '/form',
                name: 'Form',
                component: Form,
                meta: {
                  title: '表单',
                  english: 'Form'
                }
              },
              {
                path: '/notice',
                name: 'Notice',
                component: Notice,
                meta: {
                  title: '提示',
                  english: 'Notice'
                }
              },
              {
                path: '/dialog',
                name: 'Dialog',
                component: Dialog,
                meta: {
                  title: '对话框',
                  english: 'Dialog'

                }
              },
              {
                path: '/form',
                name: 'Carousel',
                component: Form,
                meta: {
                  title: '轮播图',
                  english: 'Carousel'
                }
              },
              {
                path: '/form',
                name: 'Card',
                component: Form,
                meta: {
                  title: '卡片',
                  english: 'Card'
                }
              },
              {
                path: '/form',
                name: 'Checkbox',
                component: Form,
                meta: {
                  title: '复选框',
                  english: 'Checkbox'
                }
              },
              {
                path: '/form',
                name: 'Tag',
                component: Form,
                meta: {
                  title: '标签',
                  english: 'Tag'
                }
              },
              {
                path: '/form',
                name: 'Drawer',
                component: Form,
                meta: {
                  title: '抽屉',
                  english: 'Drawer'
                }
              },
              {
                path: '/form',
                name: 'Image',
                component: Form,
                meta: {
                  title: '图像',
                  english: 'Image'
                }
              },
              {
                path: '/form',
                name: 'Calendar',
                component: Form,
                meta: {
                  title: '日历',
                  english: 'Calendar'
                }
              },
              {
                path: '/form',
                name: 'Switch',
                component: Form,
                meta: {
                  title: '开关',
                  english: 'Switch'
                }
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
