import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "@/layout/home-layout/HomeLayout.vue";
import AuthLayout from "@/layout/auth-layout/AuthLayout.vue";

import pinia from "@/plugins/pinia";
import { useLoginStore } from "@/store/auth";

const loginStore = useLoginStore(pinia);

const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("@/pages/HomePage.vue"),
    meta: { layout: HomeLayout, roles: ["ADMIN"] },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/auth/LoginPage.vue"),
    meta: { layout: AuthLayout, roles: ["ADMIN"] },
  },
  {
    path: "/solar_system/:id",
    name: "solar_system",
    component: () => import("@/pages/solar_system/SolarSystem.vue"),
    meta: { layout: AuthLayout, roles: ["ADMIN"] },
  },
];
const router = createRouter({
  history: createWebHistory(),

  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

const userRole = "ADMIN";
router.beforeEach((to, from, next) => {
  const isAuthenticated = loginStore.isLogin;
  if (!isAuthenticated) {
    if (to.name !== "login" && !isAuthenticated) {
      next({ name: "login" });
    } else next();
  } else {
    if (to.meta && Array.isArray(to.meta.roles)) {
      if (to?.meta?.roles?.includes(userRole) && isAuthenticated) {
        next();
      } else {
        next({ name: "home" });
      }
    }
  }

  return false;
});

export default router;
