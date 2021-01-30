import React from "react";
import { Container, Item, Image, Title, JobName, Span, Location, Time, Wrapper } from "./styles/card";

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

Card.Span = function CardSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

Card.Location = function CardLocation({ children, ...restProps }) {
  return <Location {...restProps}>{children}</Location>;
};

Card.Time = function CardTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

Card.JobName = function CardJobName({ children, ...restProps }) {
  return <JobName {...restProps}>{children}</JobName>;
};

Card.Wrapper = function CardWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};