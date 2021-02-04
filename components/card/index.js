import React from "react";
import {
  Container,
  Item,
  Image,
  Title,
  JobName,
  JobType,
  Location,
  Time,
  Wrapper,
  InnerWrapper,
  Icon,
} from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Item = function CardItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.JobType = function CardJobType({ children, ...restProps }) {
  return <JobType {...restProps}>{children}</JobType>;
};

Card.Location = function CardLocation({ children, ...restProps }) {
  return <Location {...restProps}>{children}</Location>;
};

Card.Time = function CardTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

Card.Icon = function CardIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};

Card.JobName = function CardJobName({ children, ...restProps }) {
  return <JobName {...restProps}>{children}</JobName>;
};

Card.Wrapper = function CardWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Card.InnerWrapper = function CardInnerWrapper({ children, ...restProps }) {
  return <InnerWrapper {...restProps}>{children}</InnerWrapper>;
};
