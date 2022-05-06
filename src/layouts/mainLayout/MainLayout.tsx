import React from "react";
import styles from "./MainLayout.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
export const MainLayout: React.FC = ({}) => {
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      {/* <div className={styles["page-content"]}>{children}</div> */}
      <Footer />
    </>
  );
};
