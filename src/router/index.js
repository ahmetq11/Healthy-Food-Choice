import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/weekly-plan",
    name: "weeklyPlan",
    component: () => import("@/views/WeeklyPlan.vue"),
  },]
})

export default router;