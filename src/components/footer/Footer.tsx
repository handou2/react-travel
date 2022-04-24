import React from "react";
import styles from "./Footer.module.scss";
import { Layout, Typography } from "antd";
import { useTranslation, withTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          {t("footer.detail")}
        </Typography.Title>
      </Layout.Footer>
    </div>
  );
}
