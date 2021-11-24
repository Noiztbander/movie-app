const NODE_ENV = "development";

const appConfig = {
  development: {
    movieDB: {
      MovieDbApiKey: process.env.REACT_APP_MOVIE_DB_API_KEY,
      MovieDbAccessToken: process.env.REACT_APP_MOVIED_DB_ACCESSTOKEN,
    },
    movieApp: {
      port: process.env.REACT_APP_PORT,
    },
  },
};

export const config = appConfig[NODE_ENV];
