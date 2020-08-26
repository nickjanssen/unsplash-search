import React from "react";
import { BsSearch } from "react-icons/bs";
import debounce from "lodash/debounce";

// import unsplash from '../services/unsplash';
// import { toJson } from "unsplash-js";

import Image, { ImageResult } from '../components/Image';

interface UnsplashResult {
  id: string;
  results: Array<ImageResult>;
}

function Search() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [data, setData] = React.useState<UnsplashResult>({
    id: "none",
    results: [],
  });

  const doSearch = React.useMemo(() => {
    return debounce(async () => {
      // const stream = await unsplash.search.photos(searchTerm, 1, 10, { orientation: "portrait" })
      // const data = await toJson(stream);
      const data: UnsplashResult = require("../static/exampleRes.json");

      console.log("data", data);

      setData(data);
    }, 1000);
  }, []);

  React.useEffect(() => {
    doSearch();
  }, [doSearch, searchTerm]);

  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="m-10 relative">
        <input
          className="border-2 border-gray-300 bg-white h-16 px-5 pl-16 rounded-lg text-3xl focus:outline-none w-full"
          type="search"
          name="search"
          placeholder="Enter search term"
          onChange={React.useCallback((e) => {
            setSearchTerm(e.target.value);
          }, [])}
        />
        <div className="absolute left-0 top-0 focus:outline-none p-4 text-3xl">
          <BsSearch />
        </div>
      </div>
      <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results.map((image) => {
          return (
            <Image
              key={image.id}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Search;
