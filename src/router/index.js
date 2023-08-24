import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import ProfileView from "../views/ProfileView.vue";
// import ShareView from "../views/ShareView.vue";
// import RankView from "../views/RankView.vue";


const router = createRouter({
  histoory: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => ('../views/HomeView'),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => ('../views/ProfileView'),
    },
    {
      path: "/rank",
      name: "rank",
      component: () => ('../views/RankView'),
    },
    {
      path: "/share",
      name: "share",
      component: () => ('../views/ShareView'),
    }
  ]
})

export default router