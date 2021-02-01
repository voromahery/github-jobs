import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Details } from "./pages";

function App() {
  return (
    <>
      <Header>
        <Header.Text>
          Github <Header.Span>Jobs</Header.Span>
        </Header.Text>
      </Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:jobId">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
