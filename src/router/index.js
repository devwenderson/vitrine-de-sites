import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import MainView1 from '@/views/site1/MainView1.vue'
import MainView2 from '@/views/site2/MainView2.vue'
import MainView3 from '@/views/site3/MainView3.vue'

import HomeView1 from '@/views/site1/HomeView1.vue'
import HomeView2 from '@/views/site2/HomeView2.vue'

import AboutView1 from '@/views/site1/AboutView1.vue'
import AboutView2 from '@/views/site2/AboutView2.vue'

const routesList = [
  { path: '/', component: HomeView },
  {
    path: '/site1',
    component: MainView1,
    children: [
      { path: '', component: HomeView1 },
      { path: 'sobre', component: AboutView1 },
    ],
  },
  {
    path: '/site2',
    component: MainView2,
    children: [
      { path: '', component: HomeView2 },
      { path: 'sobre', component: AboutView2 },
    ],
  },
  {
    path: '/site3',
    component: MainView3,
    children: [
      { path: '', component: () => import('@/views/site3/HomeView3.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesList,
})

export default router
