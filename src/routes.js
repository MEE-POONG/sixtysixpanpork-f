import React from "react";

const Home = React.lazy(() => import("./views/home/Home"));
const Blog = React.lazy(() => import("./views/blog/Blog"));
// const Cards = React.lazy(() => import("./pages/base/cards/Cards"));
// const Carousels = React.lazy(() => import("./pages/base/carousels/Carousels"));
// const Collapses = React.lazy(() => import("./pages/base/collapses/Collapses"));
// const BasicForms = React.lazy(() => import("./pages/base/forms/BasicForms"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/home", exact: true, name: "Home", component: Home },
  { path: "/blog", exact: true, name: "Blog", component: Blog },
  // { path: "/base/cards", name: "Cards", component: Cards },
  // { path: "/base/carousels", name: "Carousel", component: Carousels },
  // { path: "/base/collapses", name: "Collapse", component: Collapses },
  // { path: "/base/forms", name: "Forms", component: BasicForms },
];

export default routes;
