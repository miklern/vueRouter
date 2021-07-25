

// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import Home from '../pages/Home';
// import Photos from '../pages/Photos';

// Vue.use(VueRouter);

// const routes = [
//    {
//       path: '/home',
//       name: 'Home',
//       component: Home,
//       children: [
//          {
//            path: ':id',
//            name: 'User',
//            component: Home,
//          },     
//          {
//            path: 'photos/:albumsId',
//            name: 'Photos',
//            component: Photos,
//          }
//       ]
//    },
// ]  

// const router = new VueRouter({
//    mode: 'history',
//    base: process.env.BASE_URL,
//    routes,
// });

// export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Photos from '../pages/Photos';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/home/:id',
      name: 'User',
      component: Home,
      props: ( route ) => ({ id: Number(route.params.id) }),
   },
   {
      path: '/home/:id/photos/:albumsId',
      name: 'Photos',
      component: Photos,
      props: ( route ) => ({ albumsId: Number(route.params.albumsId) }),
   },
]  

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,
});

export default router;