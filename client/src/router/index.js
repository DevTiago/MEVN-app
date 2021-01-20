import Vue from "vue";
import Router from "vue-router";
import Homepage from "../components/Homepage";
import Profile from "../components/Profile";
import Login from "../components/Login";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/dashboard",
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
