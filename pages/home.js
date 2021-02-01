import React, { useContext } from "react";
import HeaderFormContainer from "../container/header-form";
import CardContainer from "../container/card";
// import { Context } from "../GlobalContext";
// import { Card } from "../components";
import BodyFormContainer from "../container/body-form";
import PaginationContainer from "../container/pagination";

export default function Home() {
  // const {state, dispatch} = useContext(Context);

  return (
    <div>
      <HeaderFormContainer />
      <BodyFormContainer />
      <CardContainer />
      <PaginationContainer/>
    </div>
  );
}
