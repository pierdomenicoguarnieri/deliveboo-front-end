import { createRouter, createWebHistory } from "vue-router";

import Home from './components/pages/Home.vue';
import Contacts from './components/pages/Contacts.vue';
import About from './components/pages/About.vue';
import Detail from './components/pages/Detail.vue';
import PaymentSucces from './components/pages/PaymentSuccess.vue';
import Error404 from './components/pages/Error404.vue';
//import Cart from './components/partials/Cart.vue';


const router = createRouter({
    history: createWebHistory(),
    //aggiungo una classe per i colori del click al router
    linkExactActiveClass: 'active',



    //questa è la rotta home
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        //questa e' la rotta contatti
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        //questa e' la rotta about
        {
            path: '/about',
            name: 'about',
            component: About
        },
          //Add for Cart
          /*
        {
            path: '/carrello',
            name: 'cart',
            component: Cart,
        },*/
        {
            path: '/restaurant-detail/:slug',
            name: 'restaurant-detail',
            component: Detail
        },

        {
            path: '/payment-success',
            name: 'payment-success',
            component: PaymentSucces
        },

        {
            path: '/:pathMatch(.*)*',
            component: Error404
        }
    ]


});

export { router }