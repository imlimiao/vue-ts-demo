import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "aboutHelloworld" */ "@/views/About.vue")
  },
  {
    path: "/cubic",
    name: "cubic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "aboutCubic" */ "@/views/cubic-bezier.vue")
  },
  {
    path: "/scss",
    name: "scss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "aboutCubic" */ "@/views/scssMixin.vue")
  },
  {
    path: "/animation",
    name: "animation",
    component: () =>
      import(/* webpackChunkName: "animation" */ "@/views/animation.vue")
  },
  {
    path: "/cssgrid",
    name: "cssgrid",
    component: () =>
      import(/* webpackChunkName: "animation" */ "@/views/cssGrid.vue")
  },
  {
    path: "/lottie",
    name: "lottie",
    component: () =>
      import(/* webpackChunkName: "animation" */ "@/views/lottie/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
