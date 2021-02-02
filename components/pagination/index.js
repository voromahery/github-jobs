import React from "react";
import { Container, List, ListItem, Button, Arrow } from "./styles/pagination";

export default function Pagination({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Pagination.List = function PaginationList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Pagination.ListItem = function PaginationListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Pagination.Button = function PaginationButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
  };
  
  Pagination.Arrow = function PaginationArrow({ children, ...restProps }) {
    return <Arrow {...restProps}>{children}</Arrow>;
  };
  