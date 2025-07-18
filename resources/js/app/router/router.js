import { createRouter, createWebHistory } from "vue-router";

import layout from "../portal/layout/layout.vue";
import index from "../portal/pages/index.vue";
import articles from "../portal/pages/articles.vue";
import singleArticle from "../portal/pages/single-article.vue";
import authors from "../portal/pages/authors.vue";

import authLayout from "../auth/layout/layout.vue";
import login from "../auth/pages/login.vue";
import registration from "../auth/pages/registration.vue";
import forgot from "../auth/pages/forgot.vue";
import reset from "../auth/pages/reset.vue";
import verification from "../auth/pages/verification.vue";

import profileLayout from "../profile/layout/layout.vue";
import details from "../profile/pages/details.vue";

const routes = [
    { path: '', name: 'layout', component: layout,
        children: [
            { path: '', name: 'index', component: index },
            { path: 'articles', name: 'articles', component: articles },
            { path: 'article/:id', name: 'singleArticle', component: singleArticle },
            { path: 'authors', name: 'authors', component: authors },
            { path: 'auth', name: 'authLayout', component: authLayout,
                children: [
                    { path: 'login', name: 'login', component: login },
                    { path: 'registration', name: 'registration', component: registration },
                    { path: 'forgot', name: 'forgot', component: forgot },
                    { path: 'reset', name: 'reset', component: reset },
                    { path: 'verification', name: 'verification', component: verification },
                ],
            },
            { path: 'profile', name: 'profileLayout', component: profileLayout,
                children: [
                    { path: 'details', name: 'details', component: details },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' };
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    },
});

export default router;
