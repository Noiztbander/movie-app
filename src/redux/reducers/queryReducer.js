const initialState = {
  superLargeDesktop: true,
  desktop: true,
  tablet: true,
  mobile: true,
};
export const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update/mediaquery":
      const mediaQueryPastState = state;
      const mediaQueryNewState = action.payload;
      Object.assign(mediaQueryPastState, mediaQueryNewState);
      return { ...state };
    default:
      return state;
  }
};
