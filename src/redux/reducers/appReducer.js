const initialState = {
  selectedMedia: "movies",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "displayMovies/app":
      state.selectedMedia = action.payload;
      return state;
    case "displayShows/app":
      state.selectedMedia = action.payload;
      return state;
    default:
      return state;
  }
};
