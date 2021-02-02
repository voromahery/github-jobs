import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { formatDistance } from "date-fns";
import Details from "../components/details";
import { Context } from "../GlobalContext";
import timeIcon from "../images/clock.svg";
import locationIcon from "../images/globe.svg";

export default function details() {
  const { state } = useContext(Context);
  const { jobId } = useParams();

  const findJob = state.response.find((job) => job.id === jobId);

  return (
    <Details>
      <Details.Application>
        <Link to="/">
          <Details.Text>
            Back to search
          </Details.Text>
        </Link>
        <Details.Wrapper>
          <Details.OtherTitle>How to apply</Details.OtherTitle>
          <Details.Description style={{ overflowWrap: "break-word" }}>
            {
              <div
                dangerouslySetInnerHTML={{ __html: findJob?.how_to_apply }}
              ></div>
            }
          </Details.Description>
        </Details.Wrapper>
      </Details.Application>

      <Details.Wrapper
        style={{
          marginTop: "calc(36px - 16px)",
          marginBottom: "36px",
        }}
      >
        <Details.Wrapper>
          <Details.JobName>{findJob?.title}</Details.JobName>
          <Details.Span>{findJob?.type}</Details.Span>
          <Details.Time dateTime={findJob?.created_at}>
            <Details.Icon src={timeIcon} />
            {formatDistance(new Date(findJob?.created_at), new Date()) !==
            "today"
              ? `${formatDistance(
                  new Date(findJob?.created_at),
                  new Date()
                )} ago`
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
          <Details.Image src={findJob?.company_logo} />
          <Details.Wrapper style={{ gap: "10px" }}>
            <Details.Title>{findJob?.company}</Details.Title>
            <Details.Location>
              {" "}
              <Details.Icon src={locationIcon} />
              {findJob?.location}
            </Details.Location>
          </Details.Wrapper>
        </Details.Wrapper>
        <Details
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "150%",
            color: "#334680",
          }}
        >
          <article>
            {
              <div
                dangerouslySetInnerHTML={{ __html: findJob?.description }}
              ></div>
            }
          </article>
        </Details>
      </Details.Wrapper>
    </Details>
  );
}
