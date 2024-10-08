import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "../pages/LoginPage.vue";
import DashboardPage from "../pages/DashboardPage.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage,
        meta: { layout: 'default' },
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        meta: { layout: 'no-sidebar' }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
