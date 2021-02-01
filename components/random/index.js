import React from "react";
import { Container, Div, DetailsApplication } from "./styles/random";

export default function Random({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Random.Div = function RandomDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};

Random.DetailsApplication = function RandomDetailsApplication({ children, ...restProps }) {
  return <DetailsApplication {...restProps}>{children}</DetailsApplication>;
};
