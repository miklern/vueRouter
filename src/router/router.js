import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Info from '../pages/Info';
import Images from '../pages/Images';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/Info/:id',
      name: 'Info',
      component: Info,
      props: true,
   },
   {
      path: '/Info/:id/Images/:albumId',
      name: 'Images',
      component: Images,
      props: true,
   },
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,
});

export default router;