import React from "react";
import {
  Footer,
  Header,
  SideMenu,
  Carousel,
  BusinessPartners,
  ProductCollection,
} from "../../components";
import styles from "./HomePage.module.scss";
//行布局和列布局
import { Row, Col, Typography, Spin } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
import axios from "axios";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { giveMeDataActionCreator } from "../../redux/recommendProducts/recommendProductsActions";
interface State {
  loading: boolean;
  error: string | null;
  productList: any[];
}
const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    giveMeData: () => {
      dispatch(giveMeDataActionCreator());
    },
  };
};
type PropsType = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
class HomePageComponent extends React.Component<PropsType> {
  // constructor(props) {
  // super(props);
  // this.state = {
  //   loading: true,
  //   error: null,
  //   productList: [],
  // };
  // }
  componentDidMount() {
    this.props.giveMeData();
  }
  render() {
    const { t, productList, loading, error } = this.props;
    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        />
      );
    }
    if (error) {
      return <div>网站出错：{error}</div>;
    }
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
            products={productList[0].touristRoutes}
            // products={productList1}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
            // products={productList2}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
            // products={productList3}
          />
          <BusinessPartners />
        </div>
        <Footer />
      </div>
    );
  }
}
export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePageComponent));
