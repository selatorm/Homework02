import { createRouter, createWebHistory } from 'vue-router';
import Librarypage from "@/pages/Librarypage.vue";
import Bookpage from '@/pages/Bookpage.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Librarypage
    },
    {
        path: "/person",
        name: "Person",
        component: Bookpage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
