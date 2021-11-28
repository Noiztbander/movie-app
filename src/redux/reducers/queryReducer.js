let initialState = JSON.parse(window.localStorage.getItem("app_mediaquery"));

if (initialState === null) {
  initialState = initialState = {
    superLargeDesktop: true,
    desktop: true,
    tablet: true,
    mobile: true,
  };
}

export const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update/mediaquery":
      const mediaQueryPastState = state;
      const mediaQueryNewState = action.payload;
      Object.assign(mediaQueryPastState, mediaQueryNewState);
      window.localStorage.setItem(
        "app_mediaquery",
        JSON.stringify({ ...state }),
      );
      return { ...state };
    default:
      return state;
  }
};
