import Vue from "vue";
import Router from "vue-router";
import game from "@/page/game";
import home from "@/page/home";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/game",
      name: "game",
      component: game
    }
  ]
});
