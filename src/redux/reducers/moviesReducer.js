const initialState = {
  movies: {},
  tvShows: {},
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAllMovies/movies":
      state.movies = action.payload;
      return { ...state };
    case "getAllTvShows/movies":
      state.tvShows = action.payload;
      return { ...state };
    default:
      return state;
  }
};
