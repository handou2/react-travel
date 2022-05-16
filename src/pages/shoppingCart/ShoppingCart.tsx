import React from "react";
import styles from "./ShoppingCart.module.scss";
import { MainLayout } from "../../layouts/mainLayout";
import { Row, Col, Affix } from "antd";
import { ProductList, PaymentCard } from "../../components";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
  clearShoppingCartItem,
  checkout,
} from "../../redux/shoppingCart/slice";
import { useNavigate } from "react-router-dom";

export const ShoppingCartPage: React.FC = (props) => {
  const jwt = useSelector((s) => s.user.token) as string;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return <div>shoppingcart</div>;
};
