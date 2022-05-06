import React from "react";
import { UserLayout } from "../../layouts/userLayout";
import { SignForm } from "./SignForm";
export const SignIn = (props) => {
  return (
    <UserLayout>
      <SignForm />
    </UserLayout>
  );
};
