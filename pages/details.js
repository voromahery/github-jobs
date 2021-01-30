import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { formatDistance } from "date-fns";
import Details from "../components/details";
import { Context } from "../GlobalContext";

export default function details() {
  const { state } = useContext(Context);
  const { jobId } = useParams();

  const findJob = state.response.find((job) => job.id === jobId);
  console.log(findJob);

  return (
    <Details>
      <Link to="/">
        <Details.Text>Back to search</Details.Text>
      </Link>
      <Details>
        <Details.OtherTitle>How to apply</Details.OtherTitle>
        <article>
          {
            <div
              dangerouslySetInnerHTML={{ __html: findJob.how_to_apply }}
            ></div>
          }
        </article>
      </Details>
      <Details.Wrapper
        style={{
          flexDirection: "column",
          marginTop: "36px",
          marginBottom: "36px",
        }}
      >
        <Details.JobName>{findJob.title}</Details.JobName>
        <Details.Span>{findJob.type}</Details.Span>
        <Details.Time dateTime={findJob.created_at}>
          {formatDistance(new Date(findJob.created_at), new Date()) !== "today"
            ? `${formatDistance(new Date(findJob.created_at), new Date())} ago`
            : "today"}
        </Details.Time>
      </Details.Wrapper>
      <Details.Wrapper
        style={{
          flexDirection: "row",
          marginTop: "36px",
          marginBottom: "36px",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <Details.Image src={findJob.company_logo} />
        <Details.Wrapper style={{ flexDirection: "column", gap: "10px" }}>
          <Details.Title>{findJob.company}</Details.Title>
          <Details.Location>{findJob.location}</Details.Location>
        </Details.Wrapper>
      </Details.Wrapper>
      <Details>
        <article>
          {
            <div
              dangerouslySetInnerHTML={{ __html: findJob.description }}
            ></div>
          }
        </article>
      </Details>
    </Details>
  );
}
