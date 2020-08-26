import React from "react";
import { Props } from "./Image";

function ListPicker(props: Props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div className="bg-gray-200 border-gray-800 p-2 rounded flex flex-col w-64">
      <span className="text-xl">Add to existing list</span>

      {props.appState.lists.length > 0 ? (
        props.appState.lists.map((list) => {
          return (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Button
            </button>
          );
        })
      ) : (
        <div>You haven't created any lists yet.</div>
      )}

      <span className="text-xl mt-5">Or create a new list</span>
      <input
        className="p-1 border-1 border-gray-300 bg-white rounded-lg focus:outline-none w-full"
        value={name}
        placeholder="Enter a title..."
        onChange={React.useCallback((e) => {
          setName(e.target.value);
        }, [])}
      />
      <input
        className="mt-2 p-1 border-1 border-gray-300 bg-white rounded-lg focus:outline-none w-full"
        value={description}
        placeholder="Enter a description..."
        onChange={React.useCallback((e) => {
          setDescription(e.target.value);
        }, [])}
      />
      <button className="self-center mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create
      </button>
    </div>
  );
}

export default ListPicker;
