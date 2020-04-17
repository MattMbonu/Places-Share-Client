import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import UserPage from "./users/pages/User";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <UserPage />
      </Route>
      <Redirect to="/" />
    </Router>
  );
}

export default App;
