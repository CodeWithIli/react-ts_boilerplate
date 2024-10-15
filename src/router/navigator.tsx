import { Route, Routes } from "react-router-dom";
import { navRoutes } from "./navRoutes";

const Navigator = () => {
  return (
    <>
      <Routes>
        {navRoutes.map((route) => (
          <Route key={route.key} path={route.path} element={route.element} />
        ))}
        {/*<Route key='notFound' path='*' element={<NotFound/>}/>*/}
      </Routes>
    </>
  );
};

export default Navigator;
