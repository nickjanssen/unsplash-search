import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Search from "./pages/Search";
import Favorites, { FavoriteList } from "./pages/Favorites";
import { ImageResult } from "./components/Image";

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

export interface AppState {
  lists: Array<FavoriteList>;
}

const initialState: AppState = {
  lists: [],
};

type Action =
  | { type: "add-image-to-list"; list: FavoriteList; image: ImageResult }
  | { type: "add-list"; list: FavoriteList };

export const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "add-list":
      return {
        lists: [...state.lists, action.list],
      };
    case "add-image-to-list":
      return {
        lists: state.lists.map((list) => {
          if (list.title === action.list.title) {
            return {
              ...list,
              images: [...list.images, action.image],
            };
          }
          return list;
        }),
      };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

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
          <Favorites appState={state} dispatch={dispatch} />
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
