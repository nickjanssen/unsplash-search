import React from "react";

import { ImageResult } from "../components/Image";
import { AppState } from "../App";

export interface FavoriteList {
  title: string;
  description: string;
  images: Array<ImageResult>;
}

interface Props {
  appState: AppState;
  dispatch: Function;
}

function Favorites(props: Props) {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.appState.lists.length > 0
          ? props.appState.lists.map((list) => {
              return <div>{list.title}</div>;
            })
          : <div>You haven't created any lists yet.</div>}
      </div>
    </div>
  );
}

export default Favorites;
