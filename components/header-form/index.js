import React from "react";
import { Container, Input, Button, Div } from "./styles/header-form";

export default function HeaderForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

HeaderForm.Input = function HeaderFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

HeaderForm.Button = function HeaderFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

HeaderForm.Div = function HeaderFormDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};
