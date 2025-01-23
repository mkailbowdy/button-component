import { createRouter, createWebHistory } from 'vue-router'
import ButtonView from '@/views/ButtonView.vue'
import TextAreaView from '@/views/TextAreaView.vue'
import InputView from '@/views/InputView.vue'
import SignInView from '@/views/authorization/SignInView.vue'
import ToastView from '@/views/ToastView.vue'

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
    },
    {
      path: '/input',
      name: 'input',
      component: InputView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
    },
    {
      path: '/toast',
      name: 'toast',
      component: ToastView,
    }
  ],
})

export default router
