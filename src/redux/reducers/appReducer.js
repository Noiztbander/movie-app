const initialState = {
  selectedMedia: "movies",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggleMedia/app":
      state.selectedMedia = action.payload;
      return state;
    default:
      return state;
  }
};
