import React from "react";
import Footer from "../../components/footer/Footer";
import { Header } from "../../components/header/Header.class";
import SideMenu from "../../components/sideMenu/SideMenu";
import Carousel from "../../components/carousel/Carousel";
import ProductCollection from "../../components/productCollection/ProductCollection";
import BusinessPartners from "../../components/businessPartners/BusinessPartners";
import {
  productList1,
  productList2,
  productList3,
} from "../../pages/home/mockups";
import sideImage from "../../assets/images/sider_2019_02-04-2.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_12-09.png";
import styles from "./HomePage.module.scss";
//行布局和列布局
import { Row, Col, Typography } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
class HomePageComponent extends React.Component<WithTranslation> {
  render() {
    const { t } = this.props;
    return (
      <div>
        {" "}
        <Header />
        <div className={styles["page-content"]}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                爆款推荐
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList1}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                新品上市
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                国内游推荐
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}
          />
          <BusinessPartners />
        </div>
        <Footer />
      </div>
    );
  }
}
export const HomePage = withTranslation()(HomePageComponent);
