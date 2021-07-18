

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Photos from '../pages/Photos';

Vue.use(VueRouter);

const routes = [
   {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
         {
           path: ':id',
           name: 'User',
           component: Home, 
           props: true,
           children: [
              {
               path: 'photos/:albumsId',
               name: 'Photos',
               component: Photos,
               props: true,
              }
           ]
         }
      ]
   },
]  

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,
});

export default router;

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
//    },
//    {
//       path: '/home/:id',
//       name: 'Home',
//       component: Home, 
//    },
//    {
//       path: '/photos/:albumsId',
//       name: 'Photos',
//       component: Photos,
//       props: true,
//    },
// ]  

// const router = new VueRouter({
//    mode: 'history',
//    base: process.env.BASE_URL,
//    routes,
// });

// export default router;