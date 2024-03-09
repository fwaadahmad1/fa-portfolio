export type NavRoute = {
  title: string;
  path: string;
  subLinks?: Array<NavRoute>;
};

export const NavRoutes: Array<NavRoute> = [
  {
    title: "Homepage",
    path: "/homepage",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "About",
    path: "/about",
  },
];
