import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../GlobalContext";
import Card from "./../components/card";

export default function CardContainer() {
  const { state, dispatch } = useContext(Context);

  return (
    <Card>
      {state.response.map((data) => (
        <Link key={data.id} to={`/details/${data.id}`}>
          <Card.Item>
            <Card.Image src={data.company_logo} />
            <Card.Title>{data.company}</Card.Title>
            <Card.JobName>{data.title}</Card.JobName>
          </Card.Item>
        </Link>
      ))}
    </Card>
  );
}
