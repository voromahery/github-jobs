import React from "react";
import { Header } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Header>
        <Header.Text>Github Jobs</Header.Text>
      </Header>
      <Home />
    </>
  );
}

export default App;
