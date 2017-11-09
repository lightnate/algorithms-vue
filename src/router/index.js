import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import SelectSort from '../components/SelectSort/SelectSort.vue'
import BubbleSort from '../components/BubbleSort/BubbleSort.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/select',
      name: 'SelectSort',
      component: SelectSort
    },
    {
      path: '/bubble',
      name: 'BubbleSort',
      component: BubbleSort
    }
  ]
})
