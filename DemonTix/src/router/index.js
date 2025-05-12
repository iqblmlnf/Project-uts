import { createRouter, createWebHistory } from 'vue-router';
import Home         from '@/views/home.vue'
import Jelajah      from '@/views/Jelajah.vue'
import Tim          from '@/views/Tim.vue'
import Contact      from '@/views/Contact.vue'
import EventDetail  from '@/views/EventDetail.vue' 
import Syarat       from '@/views/SyaratKetentuan.vue'
import FAQ          from '@/views/FAQ.vue'
import TicketCheckout from '@/views/TicketCheckout.vue';

const routes = [
    { path: '/',          name: 'Home',    component: Home },
    { path: '/jelajah',name: 'Jelajah', component: Jelajah },
    { path: '/tim',name: 'Tim', component: Tim },
    { path: '/contact', name: 'Hubungi Kami', component: Contact},
    { path: '/event/:title', name: 'EventDetail', component: EventDetail, props: true },
    { path: '/syarat-ketentuan', name: 'SyaratKetentuan', component: Syarat, props: true },
    { path: '/faq', name: 'FAQ', component: FAQ, props: true },
    { path: '/ticket-checkout/:eventId', name: 'TicketCheckout', component: TicketCheckout, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
});
