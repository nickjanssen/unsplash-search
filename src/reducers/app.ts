import { FavoriteList } from "../pages/Favorites";
import { ImageResult } from "../components/Image";
import { AppState } from "../App";

type Action =
  | { type: "add-image-to-list"; listTitle: string; image: ImageResult }
  | { type: "remove-image-from-list"; listTitle: string; imageId: string }
  | { type: "change-list-title"; listTitle: string; newListTitle: string }
  | {
      type: "change-list-description";
      listTitle: string;
      newListDescription: string;
    }
  | { type: "add-list"; list: FavoriteList };

export default (state: AppState, action: Action) => {
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
              title: action.newListTitle,
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
              description: action.newListDescription,
            };
          }
          return list;
        }),
      };
    default:
      throw new Error();
  }
};
