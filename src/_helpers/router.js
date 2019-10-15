import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage'
import Tickets from '../home/HomePage'
import LoginPage from '../login/LoginPage'
import RegisterPage from '../register/RegisterPage'
import createTicketPage from '../home/CreateTicketPage'
import LogoutPage from "../login/LogoutPage";
import SinglePlace from "../home/SinglePage";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/tickets', component: Tickets },
    { path: '/login', component: LoginPage },
    { path: '/logout', component: LogoutPage },
    { path: '/register', component: RegisterPage },
    { path: '/create', component: createTicketPage },
    { path: '/tickets/:id', component: SinglePlace },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register' ];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  if (!authRequired && loggedIn  ) {
    return next('/');
  }




    next();
})