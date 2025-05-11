import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/home.vue';  // Pastikan huruf kapital 'H'
import Jelajah from '@/views/Jelajah.vue';
import Tim from '@/views/Tim.vue';
import Contact from '@/views/Contact.vue';

const routes = [
<<<<<<< HEAD
    { path: '/', name: 'Home', component: Home },
    { path: '/jelajah', name: 'Jelajah', component: Jelajah },
    { path: '/tim', name: 'Tim', component: Tim },
    { path: '/contact', name: 'Hubungi Kami', component: Contact }
];
=======
    { path: '/',          name: 'Home',    component: Home },
    { path: '/jelajah',name: 'Jelajah', component: Jelajah },
    { path: '/tim',name: 'Tim', component: Tim },
    { path: '/contact', name: 'Hubungi Kami', component: Contact}
]
>>>>>>> cc8566dd2e227f87d0be592f945ef2edbc59bf55

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
});
