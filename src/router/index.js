"use strict";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./../pages/Home";
import TopMovies from "./../pages/TopMovies";
import TopShows from "./../pages/TopShows";
import Profile from "./../pages/Profile";
import WhishList from "./../pages/WhishList";
import SearchPage from "./../pages/SearchPage";
import MovieDetails from "./../pages/MovieDetails";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/top-shows", component: TopShows, name: "top-shows" },
    { path: "/top-movies", component: TopMovies, name: "top-movies" },
    { path: "/serch", component: SearchPage, name: "search" },
    { path: "/wishlist", component: WhishList, name: "wishlist" },
    { path: "/profile", component: Profile, name: "profile" },
    {
      path: "/:movieId",
      component: MovieDetails,
      name: "details",
      props: true,
    },
  ],
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, left: 0 };
  },
});

export default router;
