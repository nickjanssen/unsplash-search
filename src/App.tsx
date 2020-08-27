import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Search from "./pages/Search";
import Favorites, { FavoriteList } from "./pages/Favorites";
import appReducer from "./reducers/app";

export interface AppState {
  lists: Array<FavoriteList>;
}

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

const savedStateString = localStorage.getItem("unsplash-search.state");
const initialState: AppState = savedStateString
  ? JSON.parse(savedStateString)
  : {
      lists: [],
    };

function App() {
  const [state, dispatch] = React.useReducer(appReducer, initialState);

  React.useEffect(() => {
    localStorage.setItem("unsplash-search.state", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <div className="p-5 border-b border-gray-300 flex justify-center items-center flex-col sm:flex-row">
        <div className="mx-4 mr-5 py-2 text-xl font-bold">Unsplash Search</div>

        <ul className="flex justify-center">
          {navRoutes.map(({ label, pathname }) => {
            return (
              <li className="mx-2" key={pathname}>
                <NavLink
                  to={pathname}
                  className="text-center block rounded py-2 px-4 bg-gray-100 hover:bg-blue-100 border border-white"
                  activeClassName="text-white border-blue-500 bg-blue-500 hover:bg-blue-700"
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
          <Favorites appState={state} dispatch={dispatch} />
        </Route>
        <Route path="/search">
          <Search appState={state} dispatch={dispatch} />
        </Route>
        <Route path="/">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
