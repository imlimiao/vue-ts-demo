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
      import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/cubic",
    name: "cubic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cubic" */ "@/views/cubic-bezier.vue")
  },
  {
    path: "/cubicTwo",
    name: "cubicTwo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cubicTwo" */ "@/views/cubic-two.vue")
  },
  {
    path: "/scss",
    name: "scss",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "scss" */ "@/views/scssMixin.vue")
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
      import(/* webpackChunkName: "cssgrid" */ "@/views/cssGrid.vue")
  },
  {
    path: "/lottie",
    name: "lottie",
    component: () =>
      import(/* webpackChunkName: "lottie" */ "@/views/lottie/index.vue")
  },
  {
    path: "/canvas",
    name: "canvas",
    component: () =>
      import(/* webpackChunkName: "canvas" */ "@/views/canvas.vue")
  },
  {
    path: "/clipPath",
    name: "clipPath",
    component: () =>
      import(/* webpackChunkName: "clipPath" */ "@/views/clipPath.vue")
  },
  {
    path: "/acvs",
    name: "acvs",
    component: () =>
      import(/* webpackChunkName: "acvs" */ "@/views/acvs.vue")
  },
  {
    path: "/webThree",
    name: "webThree",
    component: () =>
      import(/* webpackChunkName: "webThree" */ "@/views/three/webThree.vue")
  }, {
    path: "/intersection",
    name: "intersection",
    component: () =>
      import(/* webpackChunkName: "intersectionObserver" */ "@/views/intersectionObserver/intersction.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
