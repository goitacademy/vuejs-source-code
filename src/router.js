import Foo from './pages/Foo';
import Bar from './pages/Bar';
import VueRouter from 'vue-router';
import Homepage from './pages/Homepage';
import Apartment from './pages/Apartment';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';

const routes = [
  {
    path: '/foo',
    component: Foo,
  },
  {
    path: '/bar',
    component: Bar,
  },
  {
    path: '/',
    component: Homepage,
    name: 'homepage',
  },
  {
    path: '/apartments/:id',
    component: Apartment,
    name: 'apartment',
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login-page',
  },
  {
    path: '/registration',
    component: RegistrationPage,
    name: 'registration-page',
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

export default router;
