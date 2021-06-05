
import './App.css';
import Layout from "./Component/layout/layout";
import { BrowserRouter, Router, Switch, Redirect, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
   <React.Fragment>
     <BrowserRouter>
      <Switch>
        <Route path="/category">
          <Layout></Layout>
        </Route>
        {/* <Redirect path="*" to="/"></Redirect> */}
      </Switch>
     </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
