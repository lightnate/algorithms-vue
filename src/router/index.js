import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import SelectSort from '../components/SelectSort/SelectSort.vue'
import BubbleSort from '../components/BubbleSort/BubbleSort.vue'
import InsertSort from '../components/InsertSort/InsertSort.vue'
import ShellSort from '../components/ShellSort/ShellSort.vue'

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
    },
    {
      path: '/insert',
      name: 'InsertSort',
      component: InsertSort
    },
    {
      path: '/shell',
      name: 'ShellSort',
      component: ShellSort
    },
  ]
})
