import { createRouter, createWebHistory } from 'vue-router'
import ButtonView from '@/views/ButtonView.vue'
import TextAreaView from '@/views/TextAreaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ButtonView,
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonView,
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TestimonialView.vue'),
    },
    {
      path: '/blogcard',
      name: 'blogcard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BlogCardView.vue'),
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: TextAreaView,
    }
  ],
})

export default router
