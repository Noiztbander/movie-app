const initialState = {
  movieDetails: {},
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getDetails/detailsPage":
      return { ...state };
    default:
      return state;
  }
};