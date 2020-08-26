import React from "react";

import Image, { ImageResult } from "../components/Image";
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
    <div className="container mx-auto max-w-screen-lg mt-5 p-5">
      {props.appState.lists.length > 0 ? (
        props.appState.lists.map((list) => {
          return (
            <div key={list.title}>
              <div className="text-xl font-bold">{list.title}</div>
              <div>{list.description}</div>
              <div className="mx-5 mt-5 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {list.images.map((image) => {
                  return <Image key={image.id} image={image} {...props} />;
                })}
              </div>
            </div>
          );
        })
      ) : (
        <div>You haven't created any lists yet.</div>
      )}
    </div>
  );
}

export default Favorites;
