const initialState = {};

export const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateSelectedMedia/movie":
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};
