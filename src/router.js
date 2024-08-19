import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/page/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      name: "Home",
      component: HomePage,
    },
    // {
    //   path: "/about",
    //   name: "About me",
    //   component: AboutPage,
    // },
    // {
    //   path: "/project",
    //   name: "Project",
    //   component: ProjectPage,
    //   children: [
    //     {
    //       path: "project1",
    //       name: "ProjectOne",
    //       component: ProjectOne,
    //     },
    //   ],
    // },
    // {
    //   path: "/contact",
    //   name: "Contact",
    //   component: ContactPage,
    // },
  ],
});
export { router };
