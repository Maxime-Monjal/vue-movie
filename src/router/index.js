import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/top_rated",
    name: "TopRated",
    // route level code-splitting
    // this generates a separate chunk (toprated.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "toprated" */ "../views/TopRated.vue"),
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    // route level code-splitting
    // this generates a separate chunk (upcoming.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "upcoming" */ "../views/Upcoming.vue"),
  },
  {
    path: "/:title/:id",
    name: "Film",
    // route level code-splitting
    // this generates a separate chunk (film.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "film" */ "../views/Film.vue"),
  },
  {
    path: "/:title/similar/:id",
    name: "SimilarFilm",
    // route level code-splitting
    // this generates a separate chunk (similar.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "similar" */ "../views/SimilarFilm.vue"),
  },
  {
    path: "*",
    name: PageNotFound,
    component: () =>
      import(/* webpackChunkName: "pageNotFound" */ "../views/PageNotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
