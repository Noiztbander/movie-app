const initialState = {
  loaded: false,
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update/detailsPage":
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};
