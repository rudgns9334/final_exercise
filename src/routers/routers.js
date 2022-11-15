import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainPage from '@/components/MainPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';

export default new VueRouter({
    routes: [
        {
            path: "/",
            components: {
                default: MainPage
            }
        },
        {
            path: "/login",
            components: {
                default: LoginPage
            }
        },
        {
            path: "/register",
            components: {
                default: RegisterPage
            }
        },
    ],
    mode: "history"
})