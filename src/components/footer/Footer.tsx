import React from "react";
import styles from "./Footer.module.scss";
import { Layout, Typography } from "antd";

export default function Footer() {
  return (
    <div>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          版权所有 @ React 旅游网
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
}
