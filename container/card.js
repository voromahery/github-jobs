import React, { useContext } from "react";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import { Context } from "../GlobalContext";
import Card from "./../components/card";

export default function CardContainer() {
  const { state, dispatch, perPage, offSet } = useContext(Context);

  return (
    <Card>
      {state.response.slice(offSet, offSet + perPage).map((data) => (
        <Link key={data.id} to={`/details/${data.id}`}>
          <Card.Item>
            <Card.Image src={data.company_logo} />
            <Card.Title>{data.company}</Card.Title>
            <Card.JobName>{data.title}</Card.JobName>
            <Card.Span>{data.type}</Card.Span>
            <Card.Location>{data.location}</Card.Location>
            <Card.Time dateTime={data.created_at}>
              {formatDistance(new Date(data.created_at), new Date())}
            </Card.Time>
          </Card.Item>
        </Link>
      ))}
    </Card>
  );
}
