import React from "react";
import styles from "./App.module.scss";
// import { Footer } from "./components/footer/Footer";
import { Footer } from "./components";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
