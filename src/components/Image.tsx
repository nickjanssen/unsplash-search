import React from "react";
import { BsDownload, BsStar } from "react-icons/bs";

export interface ImageResult {
  id: string;
  links: {
    download: string;
  };
  urls: {
    full: string;
    thumb: string;
  };
  user: {
    name: string;
    portfolio_url: string;
  };
}

interface Props {
  image: ImageResult;
}

function Image(props: Props) {
  return (
    <div
      className="h-64 flex bg-cover bg-center"
      style={React.useMemo(() => ({
        backgroundImage: `url(${props.image.urls.thumb})`,
      }), [props.image.urls.thumb])}
    >
      <div className="bg-black bg-opacity-0 transition-colors duration-200 hover:bg-opacity-50 flex-1 opacity-0 hover:opacity-100 flex justify-between flex-col">
        <div className="flex justify-center">
          <button
            className="text-3xl text-gray-500 hover:text-white my-2 ml-2 p-2 hover:bg-gray-700 rounded hover:bg-opacity-50"
            onClick={React.useCallback(() => {
              window.open(props.image.links.download);
            }, [props.image.links.download])}
          >
            <BsDownload />
          </button>
          <button
            className="text-3xl text-gray-500 hover:text-white my-2 ml-2 p-2 hover:bg-gray-700 rounded hover:bg-opacity-50"
            onClick={React.useCallback(() => {
              // todo
            }, [])}
          >
            <BsStar />
          </button>
        </div>

        <a
          className="bg-gray-900 hover:bg-gray-500 hover:text-white text-center text-xl text-gray-500 "
          target="blank"
          href={props.image.user.portfolio_url}
        >
          By {props.image.user.name}
        </a>
      </div>
    </div>
  );
}

export default Image;
