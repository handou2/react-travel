import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  HomePage,
  SignIn,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCartPage,
} from "./pages";
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getShoppingCart } from "./redux/shoppingCart/slice";

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const routeComponent = (props) => {
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Link to={{ pathname: "/signIn" }} />
    );
  };
  // return <Route element={routeComponent} {...rest}/>
};
function App() {
  const jwt = useSelector((s: any) => s.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt));
    }
  }, [jwt]);
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detail/:touristRouteId" element={<DetailPage />} />
          <Route path="/search/:keywords?" element={<SearchPage />} />
          <Route path="/shoppingCart" element={<ShoppingCartPage />} />
          {/* <PrivateRoute 
          path='/shoppingCart' element={<ShoppingCart/} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
