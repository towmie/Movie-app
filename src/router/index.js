"use strict";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./../pages/Home";
import Profile from "./../pages/Profile";
import WhishList from "./../pages/WhishList";
import SearchPage from "./../pages/SearchPage";
import MovieDetails from "./../pages/MovieDetails";
import CategoryPage from "./../pages/CategoryPage";
import LoginSignupPage from "./../pages/LoginSignupPage";
import Login from "./../components/auth/Login";
import SignUp from "./../components/auth/SignUp";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/search", component: SearchPage, name: "search" },
    { path: "/wishlist", component: WhishList, name: "wishlist" },
    { path: "/profile", component: Profile, name: "profile" },
    { path: "/profile", component: Profile, name: "profile" },
    {
      path: "/auth",
      component: LoginSignupPage,
      name: "auth",
      children: [
        { path: "/login", component: Login, name: "login" },
        { path: "/signup", component: SignUp, name: "signup" },
      ],
    },
    { path: "/category/:cat", component: CategoryPage, name: "category" },
    {
      path: "/details/:movieId",
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
