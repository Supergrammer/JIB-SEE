import { createRouter, createWebHistory } from "vue-router";

import MapView from "@/components/views/MapView.vue"

const routes = [
    {
        path: "/",
        redirect: { name: "mapPage" }
        // component: () => import("@/components/views/MapView.vue"),
    },
    {
        path: "/map/",
        name: "mapPage",
        component: MapView,
        props: (route) => {
            let { lat, lng, zoom } = route.query;
            return {
                lat: parseFloat(lat),
                lng: parseFloat(lng),
                zoom: parseFloat(zoom)
            };
        },
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;
