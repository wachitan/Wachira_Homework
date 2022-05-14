import Vue from "vue";
import Router from "vue-router";
import profile from "../components/profile";
import contact from "../components/contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: profile
    },
    {
      path: "/Contact",
      component: contact
    }
  ]
});
