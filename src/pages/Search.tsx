import React from "react";
import { BsSearch } from "react-icons/bs";
import debounce from "lodash/debounce";

import unsplash from "../services/unsplash";
import { toJson } from "unsplash-js";

import Image, { ImageResult } from "../components/Image";
import { AppState } from "../App";

interface UnsplashResult {
  id: string;
  results: Array<ImageResult>;
}

interface Props {
  appState: AppState;
  dispatch: Function;
}

function Search(props: Props) {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [data, setData] = React.useState<UnsplashResult>({
    id: "none",
    results: [],
  });
  const [error, setError] = React.useState<string>("");

  const doSearch = React.useMemo(() => {
    return debounce(async (searchTerm: string) => {
      try {
        const stream = await unsplash.search.photos(searchTerm, 1, 10, {
          orientation: "portrait",
        });
        const data: UnsplashResult = await toJson(stream);

        // Use the next line in case you've reached the unsplash API limit
        // const data: UnsplashResult = require("../static/exampleRes.json");

        setData(data);
      } catch(e) {
        setError("There was an error connecting to the Unsplash API. Please try again later.");
      }

    }, 1000);
  }, []);

  React.useEffect(() => {
    if (searchTerm) {
      doSearch(searchTerm);
    }
  }, [doSearch, searchTerm]);

  return (
    <div className="container mx-auto max-w-screen-lg p-10">
      {error && <div className="mb-5 p-4 bg-red-100 rounded text-red-600">{error}</div>}
      <div className="relative">
        <input
          autoFocus
          className="border-2 border-gray-300 bg-white h-16 px-5 pl-16 rounded-lg text-3xl focus:outline-none w-full"
          type="search"
          name="search"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={React.useCallback((e) => {
            setSearchTerm(e.target.value);
          }, [])}
        />
        <div className="absolute left-0 top-0 focus:outline-none p-4 text-3xl">
          <BsSearch />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results.map((image) => {
          return <Image key={image.id} image={image} {...props} />;
        })}
      </div>
    </div>
  );
}

export default Search;
