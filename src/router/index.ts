import { onAuthStateChanged } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '../shared/store/user';
import { auth } from '../shared/services/firebase';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../shared/components/DefaultLayoutComponent.vue'),
      meta: {
        requiredAuth: true,
      },
      children: [
        {
          path: '/',
          name: 'AllSubject',
          component: () => import('../views/allSubject/allSubject.vue'),
        },
        {
          path: '/about-us',
          name: 'AboutUs',
          component: () => import('../views/aboutUs.vue'),
        },
      ]
    },
    {
      path: '/login',
      meta: {
        isGuest: true,
      },
      name: 'Login',
      component: () => import('../views/auth/SignIn.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      meta: {
        isGuest: true,
      },
      component: () => import('../views/auth/SignUp.vue'),
    }
  ],
});
router.beforeEach((to, from, next) => {
  onAuthStateChanged(auth,(user) => {
    if (user && to.meta.isGuest) {
      next('/');
      return;
    }
    if (to.meta.requiredAuth && !user) {
      next('/login');
      return;
    }
    next()
  })
})
export default router;
