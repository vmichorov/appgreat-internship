import { combineReducers } from "redux";

const imagesReducer = (images = [], action) => {
  if (action.type === "SET_IMAGES") {
    return action.payload;
  }
  return images;
};

const wordReducer = (word = "", action) => {
  if (action.type === "SET_WORD") {
    return action.payload;
  }
  return word;
};

export default combineReducers({
  images: imagesReducer,
  word: wordReducer,
});
