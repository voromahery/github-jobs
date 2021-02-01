import React, { useContext } from "react";
import CardContainer from "../container/card";
import BodyFormContainer from "../container/body-form";
import HeaderFormContainer from "../container/header-form";
import { Random } from "../components/";
import { Context } from "../GlobalContext";

export default function Home() {
  const { state } = useContext(Context);
  return (
    <>
      <HeaderFormContainer />
      <Random>
        <BodyFormContainer />
        {state.loading && <h1>Loading...</h1>}
        {state.error && <h1>Oh no!😢 There is an error, please refresh your browser!</h1>}
        {state.response && (
          <Random.Div>
            <CardContainer />
          </Random.Div>
        )}
      </Random>
    </>
  );
}
