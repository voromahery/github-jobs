import React, { useContext } from "react";
import { Context } from "../GlobalContext";
import Card from "./../components/card";

export default function CardContainer() {
  const { state, dispatch, jobsData } = useContext(Context);
  console.log(state,"CARD", jobsData);

  return (
    <Card>
      {state.response.map((data) => (
        <Card.Item key={data.id}>
          <Card.Image src={data.company_logo} />
          <Card.Title>{data.company}</Card.Title>
          <Card.JobName>{data.title}</Card.JobName>
        </Card.Item>
      ))}
    </Card>
  );
}
