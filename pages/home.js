import React from "react";
import CardContainer from "../container/card";
import BodyFormContainer from "../container/body-form";
import { Random } from "../components/";

export default function Home() {
  return (
    <Random>
      <BodyFormContainer />
      <Random.Div>
        <CardContainer />
      </Random.Div>
    </Random>
  );
}
