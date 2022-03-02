import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Project from "../views/Project.vue";
import whatwedo from "../views/What-we-do.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Event from "../views/Event.vue";
import Feedback from "../views/Feedback.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Degovan — Jasa Pembuatan Aplikasi dan Website" },
  },
  {
    path: "/About",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { title: "Tentang — Degovan" },
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { title: "👋 Kami butuh pembuat logo untuk kami  — Degovan" },
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
    meta: { title: "Project — Degovan" },
  },
  {
    path: "/What-we-do",
    name: "What-we-do",
    component: whatwedo,
    meta: { title: "Apa yang kami lakukan? — Degovan" },
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: Feedback,
    meta: { title: "Umpan Balik — Degovan" },
  },
  {
    path: "/:catchAll(.*)",
    name: "404PageNotFound",
    component: PageNotFound,
    meta: { title: "Page Not Found 404 — Degovan" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // linkActiveClass: "active",
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
