import React from "react";
import { Container, Item } from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
