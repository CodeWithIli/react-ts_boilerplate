import MainLayout from "../layouts/MainLayout";

interface RouterNode {
  key: number;
  name: string;
  path: string;
  element: React.ReactElement;
}


export const Router: RouterNode[] = [
  {
    key: 0,
    name: "Home",
    path: "/",
    element: <MainLayout>Hello there</MainLayout>,
  },
];
