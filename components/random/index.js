import React from "react";
import { Container, Div } from "./styles/random";

export default function Random({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Random.Div = function RandomDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};
