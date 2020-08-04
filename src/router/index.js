import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Characters from "@/components/Characters";
import Episodes from "@/components/Episodes";
import Deaths from "@/components/Deaths";
import Character from "@/views/character";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/episodes",
    name: "Episodes",
    component: Episodes,
  },
  {
    path: "/deaths",
    name: "Deaths",
    component: Deaths,
  },
  {
    path: "/character",
    name: "Character",
    component: Character,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
