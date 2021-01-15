import VueRouter from 'vue-router';
import Homepage from './pages/Homepage';
import Apartment from './pages/Apartment';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import MyOrdersPage from './pages/MyOrders';
import store from './store';

const routes = [
  {
    path: '/',
    component: Homepage,
    name: 'homepage',
  },
  {
    path: '/apartments/:id',
    component: Apartment,
    name: 'apartment',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/my-orders',
    component: MyOrdersPage,
    name: 'my-orders',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login-page',
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '/registration',
    component: RegistrationPage,
    name: 'registration-page',
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: '*',
    component: ErrorPage,
    name: 'error-page',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn'];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: 'login-page' });
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: 'homepage' });
    }
  }

  next();
});

export default router;
