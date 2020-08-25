import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Search from "./pages/Search";

// import unsplash from './services/unsplash';
// import { toJson } from "unsplash-js";

function App() {
  let location = useLocation();
  console.log(location.pathname);

  return (
    <Switch>
      {/* <Route path="/favorites">
      <Favorites />
    </Route> */}
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/">
        <Redirect to="/search" />
      </Route>
    </Switch>
  );
}

export default App;
