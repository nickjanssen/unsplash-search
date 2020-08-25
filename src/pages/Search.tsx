import React from 'react';


// import unsplash from './services/unsplash';
// import { toJson } from "unsplash-js";

function Search() {
  React.useEffect(() => {
    const asyncFn = async () => {
      // const stream = await unsplash.search.photos("dogs", 1, 10, { orientation: "portrait" })
      // const data = await toJson(stream);
      const data = require("../static/exampleRes.json");

      console.log("data", data);
    };

    asyncFn();
  }, []);


  return (
    <div className="p-10 bg-red-500">
      Hello world!
    </div>
  );
}

export default Search;
