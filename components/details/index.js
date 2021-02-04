import React from "react";
import {
  Container,
  Image,
  Icon,
  Title,
  JobType,
  Location,
  JobName,
  Wrapper,
  Time,
  Text,
  OtherTitle,
  Description,
  Application
} from "./styles/details";

export default function Details({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Details.Image = function DetailsImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Details.Icon = function DetailsIcon({ ...restProps }) {
  return <Icon {...restProps}/>;
};

Details.Description = function DetailsDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Details.Title = function DetailsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Details.Application = function DetailsApplication({ children, ...restProps }) {
  return <Application {...restProps}>{children}</Application>;
};

Details.OtherTitle = function DetailsOtherTitle({ children, ...restProps }) {
  return <OtherTitle {...restProps}>{children}</OtherTitle>;
};

Details.JobType = function DetailsJobType({ children, ...restProps }) {
  return <JobType {...restProps}>{children}</JobType>;
};

Details.Location = function DetailsLocation({ children, ...restProps }) {
  return <Location {...restProps}>{children}</Location>;
};

Details.Time = function DetailsTime({ children, ...restProps }) {
  return <Time {...restProps}>{children}</Time>;
};

Details.JobName = function DetailsJobName({ children, ...restProps }) {
  return <JobName {...restProps}>{children}</JobName>;
};

Details.Wrapper = function DetailsWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Details.Text = function DetailsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
