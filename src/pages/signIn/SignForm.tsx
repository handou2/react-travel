import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styles from "./SignForm.module.scss";
import axios from "axios";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../redux/user/slice";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export const SignForm = () => {
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const jwt = useSelector((state) => state.user.token);
  // jwt的优点:无状态,简单,方便,支持分布式部署 采用非对称加密,token安全性高
  // jwt的缺点:无状态,token一发布则无法取消 明文传递token安全性低（使用https可以解决）
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt !== null) {
      navigate("/");
    }
  }, [jwt]);

  const onFinish = (values:any) => {
    dispatch(signIn({
      email: values.username,
      password: values.password,
    }));
    
  };

  const onFinishFailed = (errorInfo: any) => {};
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={styles["register-form"]}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: "Please input your username!" },
          {
            pattern:
              /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,

            message: "邮箱格式不正确",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        {...tailLayout}
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
