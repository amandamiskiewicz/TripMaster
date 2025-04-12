import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import HomeView from '@/views/HomeView.vue'
import TripDetails from '@/views/TripDetails.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Info from '@/views/Info.vue'
import { getAuth } from 'firebase/auth'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/info', name: 'Info', component: Info },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: "Register", component: Register },

  { path: '/home', name: 'HomeView', component: HomeView, meta: { requiresAuth: true } },
  { path: '/trips', name: 'Trips', component: HomeView, meta: { requiresAuth: true } },
  { path: '/trip/:id', name: 'TripDetails', component: TripDetails, props: true, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const user = auth.currentUser

  if (requiresAuth && !user) {
    next('/login')
  } else {
    next()
  }
})

export default router
