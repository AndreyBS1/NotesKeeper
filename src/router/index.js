import Vue from "vue";
import VueRouter from "vue-router";

import HomepageView from "@/views/HomepageView";
import NoteView from "@/views/NoteView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: HomepageView,
  },

  {
    path: "/notes/new",
    name: "New note",
    component: NoteView,
  },
  {
    path: "/notes/:id",
    name: "Existing note",
    component: NoteView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
