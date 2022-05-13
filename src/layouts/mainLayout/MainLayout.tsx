import React from "react";
import styles from "./MainLayout.module.scss";
import { Header, Footer } from "../../components";
export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>{children}</div>
      <Footer />
    </>
  );
};
