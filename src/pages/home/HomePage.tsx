import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
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
import { Row, Col, Typography, Spin } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
import axios from "axios";
import { connect } from "react-redux";

interface State {
  loading: boolean;
  error: string | null;
  productList: any[];
}
// const mapStateToProps = (state:RootState)=>{

// }
class HomePageComponent extends React.Component<WithTranslation, State> {
  // constructor(props) {
  // super(props);
  // this.state = {
  //   loading: true,
  //   error: null,
  //   productList: [],
  // };
  // }
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "http://123.56.149.216:8080/api/productCollections"
      );
      this.setState({
        loading: false,
        error: null,
        productList: data,
      });
    } catch (error) {
      this.setState({
        // error: error.message,
        loading: false,
      });
    }
  }
  render() {
    const { t } = this.props;
    // const { productList, loading, error } = this.state;
    // if (loading) {
    //   return (
    //     <Spin
    //       size="large"
    //       style={{
    //         marginTop: 200,
    //         marginBottom: 200,
    //         marginLeft: "auto",
    //         marginRight: "auto",
    //         width: "100%",
    //       }}
    //     />
    //   );
    // }
    // if (error) {
    //   return <div>网站出错：{error}</div>;
    // }
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
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={sideImage}
            // products={productList[0].touristRoutes}
            products={productList1}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            // products={productList[1].touristRoutes}
            products={productList2}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            // products={productList[2].touristRoutes}
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
