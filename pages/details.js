import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Details from "../components/details";
import { Context } from "../GlobalContext";

export default function details() {
  const { state } = useContext(Context);
  const { jobId } = useParams();

  const findJob = state.response.find((job) => job.id === jobId);
  console.log(findJob);

  return (
    <>
      <Details>
        <article>
          {
            <div
              dangerouslySetInnerHTML={{ __html: findJob.how_to_apply }}
            ></div>
          }
        </article>
      </Details>
      <Details>
        <article>
          {
            <div
              dangerouslySetInnerHTML={{ __html: findJob.description }}
            ></div>
          }
        </article>
      </Details>
    </>
  );
}
