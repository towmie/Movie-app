import { createRouter, createWebHistory } from "vue-router";
import Home from "./../pages/Home";
import TopMovies from "./../pages/TopMovies";
import TopShows from "./../pages/TopShows";
import Profile from "./../pages/Profile";
import WhishList from "./../pages/WhishList";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/top-shows", component: TopShows, name: "top-shows" },
    { path: "/top-movies", component: TopMovies, name: "top-movies" },
    { path: "/wishlist", component: WhishList, name: "wishlist" },
    { path: "/profile", component: Profile, name: "profile" },
  ],
});

export default router;
