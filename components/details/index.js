import React from "react";
import { Container } from "./styles/details";

export default function Details({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
