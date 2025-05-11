import { createRouter, createWebHistory } from 'vue-router'

import Home         from '@/views/home.vue'
import Jelajah      from '@/views/Jelajah.vue'
import Tim          from '@/views/Tim.vue'
import Contact      from '@/views/Contact.vue'

const routes = [
    { path: '/',          name: 'Home',    component: Home },
    { path: '/jelajah',name: 'Jelajah', component: Jelajah },
    { path: '/tim',name: 'Tim', component: Tim },
    { path: '/contact', name: 'Hubungi Kami', component: Contact}
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})