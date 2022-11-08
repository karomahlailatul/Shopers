import { Routes, Route, Navigate, useLocation } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import CategoryProduct from "./pages/CategoryProduct";

import SearchProduct from "./pages/SearchProduct";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import ProfileUser from "./pages/ProfileUser";

import ProductDetails from "./pages/ProductDetails";
import SellerPage from "./pages/SellerPage";

//component
import ScrollToTop from "./component/ScrollToTop";
import NavigationBar from "./component/NavigationBar";

import RequireAuth from "./component/RequireAuth";

import RequireAuthSeller from "./component/RequireAuthSeller";


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

          <Route path="/profile/user" element={<RequireAuth> <ProfileUser /> </RequireAuth>} />

          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route path="/profile/seller" element={  <RequireAuthSeller> <SellerPage /> </RequireAuthSeller> }/>
        </Routes>
      </ScrollToTop>
      <ToastContainer />
    </>
  );
};
export default App;
