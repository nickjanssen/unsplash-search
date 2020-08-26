import React from "react";
import {
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

const navRoutes = [
  {
    label: "Search",
    pathname: "/search",
  },
  {
    label: "Favorites",
    pathname: "/favorites",
  },
];

function App() {
  return (
    <>
      <div className="p-5 border-b border-gray-300">
        <ul className="flex justify-center">
          {navRoutes.map(({ label, pathname }) => {
            return (
              <li className="mx-2" key={pathname}>
                <NavLink
                  to={pathname}
                  className="text-center block rounded py-2 px-4"
                  activeClassName="text-white border border-blue-500 bg-blue-500 hover:bg-blue-700"
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Switch>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
