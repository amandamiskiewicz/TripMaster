import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import HomeView from '@/views/HomeView.vue'
import TripDetails from '@/views/TripDetails.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Info from '@/views/Info.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/home', name: 'HomeView', component: HomeView },
  { path: '/info', name: 'Info', component: Info },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: "Register", component: Register },
  { path: '/trips', name: 'Trips', component: HomeView },
  { path: '/trip/:id', name: 'TripDetails', component: TripDetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
