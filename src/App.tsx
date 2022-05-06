import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import SignIn from "./pages/signIn/SignIn";
import NotFound from "./pages/NotFound";
import { RegisterPage } from "./pages/register/RegisterPage";
import DetailPage from "./pages/detail/DetailPage";
import { SearchPage } from "./pages/search/SearchPage";
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detail/:touristRouteId" element={<DetailPage />} />
          <Route path="/search/:keywords?" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
