import React, { useContext } from "react";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import { Context } from "../GlobalContext";
import PaginationContainer from "../container/pagination";
import Card from "./../components/card";

export default function CardContainer() {
  const { state, dispatch, perPage, offSet } = useContext(Context);

  return (
    <>
      <Card>
        {state.response.slice(offSet, offSet + perPage).map((data) => (
          <Link key={data.id} to={`/details/${data.id}`}>
            <Card.Item>
              <Card.Image src={data.company_logo} />
              <Card.Wrapper style={{ flexDirection: "column" }}>
                <Card.Title>{data.company}</Card.Title>
                <Card.JobName>{data.title}</Card.JobName>
                <Card.Span>{data.type}</Card.Span>

                <Card.Wrapper
                  style={{
                    justifyContent: "space-between",
                    width: "100%",
                    maxWidth: "calc(112px + 15px + 59px)",
                  }}
                >
                  <Card.Location>{data.location}</Card.Location>
                  <Card.Time dateTime={data.created_at}>
                    {formatDistance(new Date(data.created_at), new Date()) !==
                    "today"
                      ? `${formatDistance(
                          new Date(data.created_at),
                          new Date()
                        )} ago`
                      : "today"}
                  </Card.Time>
                </Card.Wrapper>
              </Card.Wrapper>
            </Card.Item>
          </Link>
        ))}
      </Card>
      <PaginationContainer />
    </>
  );
}
