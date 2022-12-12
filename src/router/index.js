import { createRouter, createWebHistory } from "vue-router";

import MapView from "@/components/views/MapView.vue"

const routes = [
  {
    path: "/",
    name: "map",
    component: MapView,
    // component: () => import("@/components/views/MapView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
