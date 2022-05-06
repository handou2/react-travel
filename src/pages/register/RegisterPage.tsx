import React from "react";
import { UserLayout } from "../../layouts/userLayout";
import styles from "./RegisterPage.module.scss";
import { RegisterForm } from "./RegisterForm";
export const RegisterPage: React.FC = () => {
  return (
    <div>
      <UserLayout>
        <RegisterForm />
      </UserLayout>
    </div>
  );
};
