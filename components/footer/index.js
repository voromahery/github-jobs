import React from "react";
import { Container, List, ListItem, Button } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.List = function FooterList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Footer.ListItem = function FooterListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Footer.Button = function FooterButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
  };
  