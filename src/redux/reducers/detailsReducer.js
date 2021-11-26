export const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "update/detailsPage":
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};
