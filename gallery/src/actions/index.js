export const setImages = (images) => {
  return {
    type: "SET_IMAGES",
    payload: images,
  };
};

export const setWord = (word) => {
  return {
    type: "SET_WORD",
    payload: word,
  };
};
