import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../GlobalContext";

export default function details() {
  const { state } = useContext(Context);
  const { jobId } = useParams();

  const findJob = state.response.find((job) => job.id === jobId);

  return <h1>JOB DETAILS: {findJob.id}</h1>;
}
