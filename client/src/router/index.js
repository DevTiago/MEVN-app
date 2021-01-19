import Vue from "vue";
import Router from "vue-router";
import Homepage from "../components/Homepage";
import Profile from "../components/Profile";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
  ],
});

export default router;
