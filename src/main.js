import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/global.css'
import '@/assets/fonts/iconfont.css'
import Button from '@/components/component/index.js'
Vue.use(Button)
// Vue.component('pButton', Button)
Vue.config.productionTip = false

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



