import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigator from "./router/navigator";

import { AuthProvider } from './contexts/AuthContext'

//import Router from './router'
//
//import Loading from './components/Loading/Loading'

const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
