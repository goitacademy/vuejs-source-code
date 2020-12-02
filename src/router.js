import Foo from './pages/Foo'
import Bar from './pages/Bar'
import VueRouter from 'vue-router'
import Homepage from './pages/Homepage'
import Apartment from './pages/Apartment'

const routes = [
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  },
  {
    path: '/',
    component: Homepage,
    name: 'homepage'
  },
  {
    path: '/item',
    component: Apartment,
    name: 'apartment'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router 