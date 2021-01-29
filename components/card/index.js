import React from "react";
import { Container, Item, Image, Title, JobName } from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Card.Image = function CardImage({...restProps }) {
  return <Image {...restProps}/>
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.JobName = function CardJobName({ children, ...restProps }) {
  return <JobName {...restProps}>{children}</JobName>;
};