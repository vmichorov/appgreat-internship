import { combineReducers } from "redux";

const imagesReducer = (images = [], action) => {
  if (action.type === "SET_IMAGES") {
    return action.payload;
  }
  return images;
};

export default combineReducers({
  images: imagesReducer,
});
