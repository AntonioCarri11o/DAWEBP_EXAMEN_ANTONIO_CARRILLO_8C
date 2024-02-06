import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('../components/landingPage/landingPage.vue'),
    },
    {
        path: '*',
        component: () => import('../components/error/errorPage.vue'),
    },
    {
        path: '/inicio',
        component: () => import('../components/inicio/inicioPage.vue'),
        children: [
            {
                path: '/pagination',
                name: 'pagination',
                component: () => import('../components/paginacion/paginacionComponent.vue')
            },
            {
                path: '/form',
                name: 'form',
                component: () => import('../components/form/formComponent.vue')
            },
        ]
    }
];

const router =  new VueRouter({ routes });
export default router;