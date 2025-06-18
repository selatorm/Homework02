import { createRouter, createWebHistory } from 'vue-router';
// import Homepage from "@/pages/Librarypage.vue";
import Bookpage from "@/pages/Bookpage.vue";

const routes = [
    {
        path : "/",
        name : "Home",
        component: Librarypage
    },
    {
        path : "/person",
        name : "Person",
        component: Bookpage
    },
]
import Librarypage from "@/pages/Librarypage.vue";
const router = createRouter({
    'history': createWebHistory(),
    routes
})

export default router;