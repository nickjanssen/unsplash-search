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

const savedStateString = localStorage.getItem("unsplash-search.state");
const initialState: AppState = savedStateString
  ? JSON.parse(savedStateString)
  : {
      lists: [],
    };

type Action =
  | { type: "add-image-to-list"; listTitle: string; image: ImageResult }
  | { type: "remove-image-from-list"; listTitle: string; imageId: string }
  | { type: "change-list-title"; listTitle: string; newListTitle: string }
  | { type: "change-list-description"; listTitle: string; newListDescription: string }
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
          if (list.title === action.listTitle) {
            return {
              ...list,
              images: [...list.images, action.image],
            };
          }
          return list;
        }),
      };
    case "remove-image-from-list":
      return {
        lists: state.lists.map((list) => {
          if (list.title === action.listTitle) {
            return {
              ...list,
              images: list.images.filter((image) => {
                return image.id !== action.imageId;
              }),
            };
          }
          return list;
        }),
      };
      case "change-list-title":
        return {
          lists: state.lists.map((list) => {
            if (list.title === action.listTitle) {
              return {
                ...list,
                title: action.newListTitle
              };
            }
            return list;
          }),
        };
        case "change-list-description":
          return {
            lists: state.lists.map((list) => {
              if (list.title === action.listTitle) {
                return {
                  ...list,
                  description: action.newListDescription
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
