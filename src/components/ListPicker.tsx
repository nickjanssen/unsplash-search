import React from "react";
import { Props } from "./Image";
import classNames from "classnames";

function ListPicker(props: Props) {
  const { dispatch } = props;

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div className="bg-gray-200 border-gray-800 p-2 rounded flex flex-col w-64">
      <span className="text-xl">Add to existing list</span>

      <div className="">
        {props.appState.lists.length > 0 ? (
          props.appState.lists.map((list) => {
            const isImageInList = list.images.find(
              (image) => image.id === props.image.id
            );

            return (
              <button
                key={list.title}
                className={classNames("font-bold py-2 px-4 rounded-full mr-1 mb-1", {
                  "bg-blue-500 hover:bg-blue-700 text-white": isImageInList,
                })}
                onClick={() => {
                  if (isImageInList) {
                    dispatch({
                      type: "remove-image-from-list",
                      listTitle: list.title,
                      imageId: props.image.id,
                    });
                  } else {
                    dispatch({
                      type: "add-image-to-list",
                      listTitle: list.title,
                      image: props.image,
                    });
                  }
                }}
              >
                {list.title}
              </button>
            );
          })
        ) : (
          <div>You haven't created any lists yet.</div>
        )}
      </div>

      <span className="text-xl mt-5">Or create a new list</span>
      <input
        className="p-1 border-1 border-gray-300 bg-white rounded-lg focus:outline-none w-full"
        value={title}
        required
        placeholder="Enter a title..."
        onChange={React.useCallback((e) => {
          setTitle(e.target.value);
        }, [])}
      />
      <input
        className="mt-2 p-1 border-1 border-gray-300 bg-white rounded-lg focus:outline-none w-full"
        value={description}
        required
        placeholder="Enter a description..."
        onChange={React.useCallback((e) => {
          setDescription(e.target.value);
        }, [])}
      />
      <button
        className="self-center mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={React.useCallback(() => {
          dispatch({
            type: "add-list",
            list: {
              title,
              description,
              images: [props.image],
            },
          });
          setTitle("");
          setDescription("");
        }, [title, description, dispatch])}
      >
        Create
      </button>
    </div>
  );
}

export default ListPicker;
