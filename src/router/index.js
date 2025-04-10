import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TripDetails from '@/views/TripDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/trip/:id', name: 'TripDetails', component: TripDetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
