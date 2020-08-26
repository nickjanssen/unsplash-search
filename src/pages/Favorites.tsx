import React from "react";

import { ImageResult } from '../components/Image';

export interface FavoriteList {
  title: string;
  description: string;
  images: Array<ImageResult>;
}

function Favorites() {
  return <div className="p-10 bg-red-500">Favorites</div>;
}

export default Favorites;
