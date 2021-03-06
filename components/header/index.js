import React from "react";
import { Container, Text, Span } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.Span = function HeaderSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
