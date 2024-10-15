import MainLayout from "../layouts/MainLayout";
import { Routes } from "../types/routing-types";

export const navRoutes: Routes[] = [
  {
    key: 0,
    name: "Home",
    path: "/",
    element: <MainLayout>Hello there</MainLayout>,
  },
];
