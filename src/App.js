import { Routes, Route, Navigate, useLocation } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import CategoryProduct from "./pages/CategoryProduct";

import SearchProduct from "./pages/SearchProduct"

import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"



//component 
import ScrollToTop from "./component/ScrollToTop";
import NavigationBar from "./component/NavigationBar";

//module
import { ToastContainer } from "react-toastify";

const App = () => {
  let location = useLocation();
  return (
    <>
      <ScrollToTop>
        {location.pathname === "/sign-in" || location.pathname === "/sign-up" ? null : <NavigationBar />}
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />

          <Route path="/category/" element={<Category />} />
          <Route path="/category/:name" element={<CategoryProduct />} />

          <Route path="/product" element={<SearchProduct />} />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />


        </Routes>
      </ScrollToTop>
      <ToastContainer />

    </>
  );
};
export default App;
