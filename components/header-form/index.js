import React from "react";
import { Container, Input, Button } from "./styles/header-form";

export default function HeaderForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

HeaderForm.Input = function HeaderFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

HeaderForm.Button = function HeaderFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
